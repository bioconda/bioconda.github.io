:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dinor'
.. highlight: bash

bioconductor-dinor
==================

.. conda:recipe:: bioconductor-dinor
   :replaces_section_title:
   :noindex:

   Differential NOMe\-seq analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dinoR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dinor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dinor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dinor/meta.yaml>`_

   dinoR tests for significant differences in NOMe\-seq footprints between two conditions\, using genomic regions of interest \(ROI\) centered around a landmark\, for example a transcription factor \(TF\) motif. This package takes NOMe\-seq data \(GCH methylation\/protection\) in the form of a Ranged Summarized Experiment as input. dinoR can be used to group sequencing fragments into 3 or 5 categories representing characteristic footprints \(TF bound\, nculeosome bound\, open chromatin\)\, plot the percentage of fragments in each category in a heatmap\, or averaged across different ROI groups\, for example\, containing a common TF motif. It is designed to compare footprints between two sample groups\, using edgeR\'s quasi\-likelihood methods on the total fragment counts per ROI\, sample\, and footprint category.


.. conda:package:: bioconductor-dinor

   |downloads_bioconductor-dinor| |docker_bioconductor-dinor|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-dinor

   and update with::

      mamba update bioconductor-dinor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dinor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dinor:<tag>

   (see `bioconductor-dinor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dinor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dinor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dinor
   :alt:   (downloads)
.. |docker_bioconductor-dinor| image:: https://quay.io/repository/biocontainers/bioconductor-dinor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dinor
.. _`bioconductor-dinor/tags`: https://quay.io/repository/biocontainers/bioconductor-dinor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dinor";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dinor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dinor/README.html