:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ramwas'
.. highlight: bash

bioconductor-ramwas
===================

.. conda:recipe:: bioconductor-ramwas
   :replaces_section_title:
   :noindex:

   Fast Methylome\-Wide Association Study Pipeline for Enrichment Platforms

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ramwas.html
   :license: LGPL-3
   :recipe: /`bioconductor-ramwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramwas/meta.yaml>`_

   A complete toolset for methylome\-wide association studies \(MWAS\). It is specifically designed for data from enrichment based methylation assays\, but can be applied to other data as well. The analysis pipeline includes seven steps\: \(1\) scanning aligned reads from BAM files\, \(2\) calculation of quality control measures\, \(3\) creation of methylation score \(coverage\) matrix\, \(4\) principal component analysis for capturing batch effects and detection of outliers\, \(5\) association analysis with respect to phenotypes of interest while correcting for top PCs and known covariates\, \(6\) annotation of significant findings\, and \(7\) multi\-marker analysis \(methylation risk score\) using elastic net. Additionally\, RaMWAS include tools for joint analysis of methlyation and genotype data. This work is published in Bioinformatics\, Shabalin et al. \(2018\) \<doi\:10.1093\/bioinformatics\/bty069\>.


.. conda:package:: bioconductor-ramwas

   |downloads_bioconductor-ramwas| |docker_bioconductor-ramwas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-filematrix: 
   :depends r-glmnet: 
   :depends r-kernsmooth: 
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

      mamba install bioconductor-ramwas

   and update with::

      mamba update bioconductor-ramwas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ramwas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ramwas:<tag>

   (see `bioconductor-ramwas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ramwas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ramwas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ramwas
   :alt:   (downloads)
.. |docker_bioconductor-ramwas| image:: https://quay.io/repository/biocontainers/bioconductor-ramwas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ramwas
.. _`bioconductor-ramwas/tags`: https://quay.io/repository/biocontainers/bioconductor-ramwas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ramwas";
        var versions = ["1.24.0","1.22.0","1.22.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ramwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ramwas/README.html