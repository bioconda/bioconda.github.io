:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr'
.. highlight: bash

bioconductor-rnamodr
====================

.. conda:recipe:: bioconductor-rnamodr
   :replaces_section_title:
   :noindex:

   Detection of post\-transcriptional modifications in high throughput sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RNAmodR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr/meta.yaml>`_

   RNAmodR provides classes and workflows for loading\/aggregation data from high througput sequencing aimed at detecting post\-transcriptional modifications through analysis of specific patterns. In addition\, utilities are provided to validate and visualize the results. The RNAmodR package provides a core functionality from which specific analysis strategies can be easily implemented as a seperate package.


.. conda:package:: bioconductor-rnamodr

   |downloads_bioconductor-rnamodr| |docker_bioconductor-rnamodr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.2-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-modstrings: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colorramps: 
   :depends on r-ggplot2: 
   :depends on r-matrixstats: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rocr: 

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

    pixi global install bioconductor-rnamodr

to add into an existing workspace instead, run::

    pixi add bioconductor-rnamodr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rnamodr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rnamodr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rnamodr:<tag>

(see `bioconductor-rnamodr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rnamodr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr
.. _`bioconductor-rnamodr/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnamodr";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr/README.html