:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiccompare'
.. highlight: bash

bioconductor-hiccompare
=======================

.. conda:recipe:: bioconductor-hiccompare
   :replaces_section_title:
   :noindex:

   HiCcompare\: Joint normalization and comparative analysis of multiple Hi\-C datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HiCcompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hiccompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiccompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiccompare/meta.yaml>`_
   :links: biotools: :biotools:`HiCcompare`, doi: :doi:`10.1186/s12859-018-2288-x`

   HiCcompare provides functions for joint normalization and difference detection in multiple Hi\-C datasets. HiCcompare operates on processed Hi\-C data in the form of chromosome\-specific chromatin interaction matrices. It accepts three\-column tab\-separated text files storing chromatin interaction matrices in a sparse matrix format which are available from several sources. HiCcompare is designed to give the user the ability to perform a comparative analysis on the 3\-Dimensional structure of the genomes of cells in different biological states.\`HiCcompare\` differs from other packages that attempt to compare Hi\-C data in that it works on processed data in chromatin interaction matrix format instead of pre\-processed sequencing data. In addition\, \`HiCcompare\` provides a non\-parametric method for the joint normalization and removal of biases between two Hi\-C datasets for the purpose of comparative analysis. \`HiCcompare\` also provides a simple yet robust method for detecting differences between Hi\-C datasets.


.. conda:package:: bioconductor-hiccompare

   |downloads_bioconductor-hiccompare| |docker_bioconductor-hiccompare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-gtools: 
   :depends on r-kernsmooth: 
   :depends on r-mgcv: 
   :depends on r-pheatmap: 

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

    pixi global install bioconductor-hiccompare

to add into an existing workspace instead, run::

    pixi add bioconductor-hiccompare

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hiccompare

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hiccompare

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hiccompare:<tag>

(see `bioconductor-hiccompare/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hiccompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiccompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hiccompare
   :alt:   (downloads)
.. |docker_bioconductor-hiccompare| image:: https://quay.io/repository/biocontainers/bioconductor-hiccompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiccompare
.. _`bioconductor-hiccompare/tags`: https://quay.io/repository/biocontainers/bioconductor-hiccompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hiccompare";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.1","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiccompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiccompare/README.html