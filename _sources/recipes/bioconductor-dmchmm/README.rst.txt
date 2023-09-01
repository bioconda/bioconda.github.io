:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmchmm'
.. highlight: bash

bioconductor-dmchmm
===================

.. conda:recipe:: bioconductor-dmchmm
   :replaces_section_title:
   :noindex:

   Differentially Methylated CpG using Hidden Markov Model

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DMCHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-dmchmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmchmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmchmm/meta.yaml>`_

   A pipeline for identifying differentially methylated CpG sites using Hidden Markov Model in bisulfite sequencing data. DNA methylation studies have enabled researchers to understand methylation patterns and their regulatory roles in biological processes and disease. However\, only a limited number of statistical approaches have been developed to provide formal quantitative analysis. Specifically\, a few available methods do identify differentially methylated CpG \(DMC\) sites or regions \(DMR\)\, but they suffer from limitations that arise mostly due to challenges inherent in bisulfite sequencing data. These challenges include\: \(1\) that read\-depths vary considerably among genomic positions and are often low\; \(2\) both methylation and autocorrelation patterns change as regions change\; and \(3\) CpG sites are distributed unevenly. Furthermore\, there are several methodological limitations\: almost none of these tools is capable of comparing multiple groups and\/or working with missing values\, and only a few allow continuous or multiple covariates. The last of these is of great interest among researchers\, as the goal is often to find which regions of the genome are associated with several exposures and traits. To tackle these issues\, we have developed an efficient DMC identification method based on Hidden Markov Models \(HMMs\) called “DMCHMM” which is a three\-step approach \(model selection\, prediction\, testing\) aiming to address the aforementioned drawbacks.


.. conda:package:: bioconductor-dmchmm

   |downloads_bioconductor-dmchmm| |docker_bioconductor-dmchmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-calibrate: 
   :depends r-fdrtool: 
   :depends r-multcomp: 
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

      mamba install bioconductor-dmchmm

   and update with::

      mamba update bioconductor-dmchmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dmchmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmchmm:<tag>

   (see `bioconductor-dmchmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmchmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmchmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmchmm
   :alt:   (downloads)
.. |docker_bioconductor-dmchmm| image:: https://quay.io/repository/biocontainers/bioconductor-dmchmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmchmm
.. _`bioconductor-dmchmm/tags`: https://quay.io/repository/biocontainers/bioconductor-dmchmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmchmm";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmchmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmchmm/README.html