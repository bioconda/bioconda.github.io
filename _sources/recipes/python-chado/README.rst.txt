:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-chado'
.. highlight: bash

python-chado
============

.. conda:recipe:: python-chado
   :replaces_section_title:
   :noindex:

   A Python library for interacting with Chado database.

   :homepage: https://github.com/galaxy-genome-annotation/python-chado
   :license: MIT / MIT
   :recipe: /`python-chado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-chado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-chado/meta.yaml>`_

   


.. conda:package:: python-chado

   |downloads_python-chado| |docker_python-chado|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.9-0</code>,  <code>2.3.8-0</code>,  <code>2.3.7-0</code>,  <code>2.3.6-0</code>,  <code>2.3.5-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  </span></summary>
      

      ``2.3.9-0``,  ``2.3.8-0``,  ``2.3.7-0``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-1``,  ``2.1.2-1``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: ``0.6.4``
   :depends on biopython: 
   :depends on click: 
   :depends on future: 
   :depends on psycopg2: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on sqlalchemy: 
   :depends on wrapt: 

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

    pixi global install python-chado

to add into an existing workspace instead, run::

    pixi add python-chado

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-chado

Alternatively, to install into a new environment, run::

    conda create -n envname python-chado

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-chado:<tag>

(see `python-chado/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-chado| image:: https://img.shields.io/conda/dn/bioconda/python-chado.svg?style=flat
   :target: https://anaconda.org/bioconda/python-chado
   :alt:   (downloads)
.. |docker_python-chado| image:: https://quay.io/repository/biocontainers/python-chado/status
   :target: https://quay.io/repository/biocontainers/python-chado
.. _`python-chado/tags`: https://quay.io/repository/biocontainers/python-chado?tab=tags


.. raw:: html

    <script>
        var package = "python-chado";
        var versions = ["2.3.9","2.3.8","2.3.7","2.3.6","2.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-chado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-chado/README.html