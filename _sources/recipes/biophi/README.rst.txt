:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biophi'
.. highlight: bash

biophi
======

.. conda:recipe:: biophi
   :replaces_section_title:
   :noindex:

   BioPhi open\-source antibody design platform.

   :homepage: https://github.com/Merck/BioPhi
   :documentation: https://biophi.dichlab.org
   
   :license: MIT / MIT
   :recipe: /`biophi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biophi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biophi/meta.yaml>`_
   :links: biotools: :biotools:`biophi`

   


.. conda:package:: biophi

   |downloads_biophi| |docker_biophi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.11-0</code>,  <code>1.0.10-2</code>,  <code>1.0.10-1</code>,  <code>1.0.10-0</code>,  <code>1.0.9-4</code>,  <code>1.0.9-3</code>,  <code>1.0.9-2</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  </span></summary>
      

      ``1.0.11-0``,  ``1.0.10-2``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on abnumber: ``0.3.2``
   :depends on anarci: ``2020.04.23``
   :depends on celery: 
   :depends on click: ``>=7``
   :depends on flask: ``<3``
   :depends on hmmer: ``>=3.1``
   :depends on humanize: 
   :depends on pandas: ``<2.2``
   :depends on python: ``>=3.8``
   :depends on redis-py: 
   :depends on requests: 
   :depends on sapiens: ``1.1.0``
   :depends on sqlalchemy: ``<2``
   :depends on tqdm: 
   :depends on werkzeug: ``<3``
   :depends on xlsxwriter: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install biophi

to add into an existing workspace instead, run::

    pixi add biophi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biophi

Alternatively, to install into a new environment, run::

    conda create -n envname biophi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biophi:<tag>

(see `biophi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biophi| image:: https://img.shields.io/conda/dn/bioconda/biophi.svg?style=flat
   :target: https://anaconda.org/bioconda/biophi
   :alt:   (downloads)
.. |docker_biophi| image:: https://quay.io/repository/biocontainers/biophi/status
   :target: https://quay.io/repository/biocontainers/biophi
.. _`biophi/tags`: https://quay.io/repository/biocontainers/biophi?tab=tags


.. raw:: html

    <script>
        var package = "biophi";
        var versions = ["1.0.11","1.0.10","1.0.10","1.0.10","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biophi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biophi/README.html