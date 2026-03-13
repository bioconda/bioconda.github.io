:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoiseq'
.. highlight: bash

kipoiseq
========

.. conda:recipe:: kipoiseq
   :replaces_section_title:
   :noindex:

   kipoiseq\: sequence\-based data\-laoders for Kipoi

   :homepage: https://github.com/kipoi/kipoiseq
   :documentation: https://kipoi.org/kipoiseq/
   
   :license: MIT / MIT
   :recipe: /`kipoiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoiseq/meta.yaml>`_

   kipoiseq\: sequence\-based data\-laoders for Kipoi


.. conda:package:: kipoiseq

   |downloads_kipoiseq| |docker_kipoiseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.4.1-0</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  </span></summary>
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.4.1-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gffutils: 
   :depends on kipoi: ``>=0.5.5``
   :depends on kipoi-conda: ``>=0.1.0``
   :depends on kipoi-utils: ``>=0.1.1``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyfaidx: 
   :depends on pyranges: 
   :depends on python: ``>=3.6``
   :depends on tqdm: 

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

    pixi global install kipoiseq

to add into an existing workspace instead, run::

    pixi add kipoiseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kipoiseq

Alternatively, to install into a new environment, run::

    conda create -n envname kipoiseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kipoiseq:<tag>

(see `kipoiseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kipoiseq| image:: https://img.shields.io/conda/dn/bioconda/kipoiseq.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoiseq
   :alt:   (downloads)
.. |docker_kipoiseq| image:: https://quay.io/repository/biocontainers/kipoiseq/status
   :target: https://quay.io/repository/biocontainers/kipoiseq
.. _`kipoiseq/tags`: https://quay.io/repository/biocontainers/kipoiseq?tab=tags


.. raw:: html

    <script>
        var package = "kipoiseq";
        var versions = ["0.7.1","0.7.0","0.6.0","0.5.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoiseq/README.html