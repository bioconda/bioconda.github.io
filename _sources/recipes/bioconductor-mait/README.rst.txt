:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mait'
.. highlight: bash

bioconductor-mait
=================

.. conda:recipe:: bioconductor-mait
   :replaces_section_title:
   :noindex:

   Statistical Analysis of Metabolomic Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MAIT.html
   :license: GPL-2
   :recipe: /`bioconductor-mait <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mait>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mait/meta.yaml>`_
   :links: biotools: :biotools:`mait`

   The MAIT package contains functions to perform end\-to\-end statistical analysis of LC\/MS Metabolomic Data. Special emphasis is put on peak annotation and in modular function design of the functions.


.. conda:package:: bioconductor-mait

   |downloads_bioconductor-mait| |docker_bioconductor-mait|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-1``,  ``1.16.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-camera: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-camera: ``>=1.66.0,<1.67.0a0``
   :depends on bioconductor-xcms: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-xcms: ``>=4.8.0,<4.9.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-agricolae: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: 
   :depends on r-class: 
   :depends on r-e1071: 
   :depends on r-gplots: 
   :depends on r-mass: 
   :depends on r-pls: 
   :depends on r-plsgenomics: 
   :depends on r-rcpp: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-mait

to add into an existing workspace instead, run::

    pixi add bioconductor-mait

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mait

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mait

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mait:<tag>

(see `bioconductor-mait/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mait| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mait.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mait
   :alt:   (downloads)
.. |docker_bioconductor-mait| image:: https://quay.io/repository/biocontainers/bioconductor-mait/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mait
.. _`bioconductor-mait/tags`: https://quay.io/repository/biocontainers/bioconductor-mait?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mait";
        var versions = ["1.44.0","1.40.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mait/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mait/README.html