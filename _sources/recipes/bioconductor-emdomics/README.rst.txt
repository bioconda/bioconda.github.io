:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-emdomics'
.. highlight: bash

bioconductor-emdomics
=====================

.. conda:recipe:: bioconductor-emdomics
   :replaces_section_title:
   :noindex:

   Earth Mover\'s Distance for Differential Analysis of Genomics Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/EMDomics.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-emdomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emdomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emdomics/meta.yaml>`_

   The EMDomics algorithm is used to perform a supervised multi\-class analysis to measure the magnitude and statistical significance of observed continuous genomics data between groups. Usually the data will be gene expression values from array\-based or sequence\-based experiments\, but data from other types of experiments can also be analyzed \(e.g. copy number variation\). Traditional methods like Significance Analysis of Microarrays \(SAM\) and Linear Models for Microarray Data \(LIMMA\) use significance tests based on summary statistics \(mean and standard deviation\) of the distributions. This approach lacks power to identify expression differences between groups that show high levels of intra\-group heterogeneity. The Earth Mover\'s Distance \(EMD\) algorithm instead computes the \"work\" needed to transform one distribution into another\, thus providing a metric of the overall difference in shape between two distributions. Permutation of sample labels is used to generate q\-values for the observed EMD scores. This package also incorporates the Komolgorov\-Smirnov \(K\-S\) test and the Cramer von Mises test \(CVM\)\, which are both common distribution comparison tests.


.. conda:package:: bioconductor-emdomics

   |downloads_bioconductor-emdomics| |docker_bioconductor-emdomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cdft: 
   :depends r-emdist: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-emdomics

   and update with::

      mamba update bioconductor-emdomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-emdomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-emdomics:<tag>

   (see `bioconductor-emdomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-emdomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-emdomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-emdomics
   :alt:   (downloads)
.. |docker_bioconductor-emdomics| image:: https://quay.io/repository/biocontainers/bioconductor-emdomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-emdomics
.. _`bioconductor-emdomics/tags`: https://quay.io/repository/biocontainers/bioconductor-emdomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-emdomics";
        var versions = ["2.30.0","2.28.0","2.24.0","2.22.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-emdomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-emdomics/README.html