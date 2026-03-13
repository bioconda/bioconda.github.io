:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swathxtend'
.. highlight: bash

bioconductor-swathxtend
=======================

.. conda:recipe:: bioconductor-swathxtend
   :replaces_section_title:
   :noindex:

   SWATH extended library generation and statistical data analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SwathXtend.html
   :license: GPL-2
   :recipe: /`bioconductor-swathxtend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend/meta.yaml>`_
   :links: biotools: :biotools:`swathxtend`, doi: :doi:`10.1074/mcp.M115.055558`

   Contains utility functions for integrating spectral libraries for SWATH and statistical data analysis for SWATH generated data.


.. conda:package:: bioconductor-swathxtend

   |downloads_bioconductor-swathxtend| |docker_bioconductor-swathxtend|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 
   :depends on r-lattice: 
   :depends on r-openxlsx: 
   :depends on r-venndiagram: 

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

    pixi global install bioconductor-swathxtend

to add into an existing workspace instead, run::

    pixi add bioconductor-swathxtend

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-swathxtend

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-swathxtend

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-swathxtend:<tag>

(see `bioconductor-swathxtend/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-swathxtend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swathxtend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swathxtend
   :alt:   (downloads)
.. |docker_bioconductor-swathxtend| image:: https://quay.io/repository/biocontainers/bioconductor-swathxtend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swathxtend
.. _`bioconductor-swathxtend/tags`: https://quay.io/repository/biocontainers/bioconductor-swathxtend?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-swathxtend";
        var versions = ["2.32.0","2.28.0","2.24.0","2.22.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html