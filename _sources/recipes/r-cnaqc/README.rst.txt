:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cnaqc'
.. highlight: bash

r-cnaqc
=======

.. conda:recipe:: r-cnaqc
   :replaces_section_title:
   :noindex:

   Copy number quality control

   :homepage: https://github.com/caravagnalab/CNAqc
   :documentation: https://caravagnalab.github.io/CNAqc/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-cnaqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cnaqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cnaqc/meta.yaml>`_

   CNAqc is a package to quality control \(QC\) bulk cancer sequencing data. 
   Methods are available to \, visualise and manipulate i\) somatic mutation data 
   of both single\-nucleotide variants and insertion\-deletions\, ii\) allele\-specific 
   Copy Number Alterations \(CNAs\) and iii\) tumour purity estimates. QC procedures 
   in CNAqc can be used to validate copy number segmentations against variant 
   allele frequencies of somatic mutations\; QC scores can be used to rank 
   alternative tumour segmentations and purity\/ ploidy estimates. 
   CNAqc provides also algorithms to phase mutation multiplicities against CNAs and 
   estimate Cancer Cell Fractions \(CCFs\) with their uncertainty. The package contains 
   also statistical tests to identify patterns of over\-fragmentation of chromosome 
   arms \(excessively short and numerous DNA fragments\) and perform 
   various manipulation tasks for somatic tumour data.



.. conda:package:: r-cnaqc

   |downloads_r-cnaqc| |docker_r-cnaqc|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-complexheatmap: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-rhtslib: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-variantannotation: 
   :depends r-akima: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bmix: 
   :depends r-cli: 
   :depends r-clisymbols: 
   :depends r-cowplot: 
   :depends r-crayon: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-easypar: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-ggsci: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-peakpick: 
   :depends r-pio: 
   :depends r-progress: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vcfr: 
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

      mamba install r-cnaqc

   and update with::

      mamba update r-cnaqc

  To create a new environment, run::

      mamba create --name myenvname r-cnaqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cnaqc:<tag>

   (see `r-cnaqc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cnaqc| image:: https://img.shields.io/conda/dn/bioconda/r-cnaqc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cnaqc
   :alt:   (downloads)
.. |docker_r-cnaqc| image:: https://quay.io/repository/biocontainers/r-cnaqc/status
   :target: https://quay.io/repository/biocontainers/r-cnaqc
.. _`r-cnaqc/tags`: https://quay.io/repository/biocontainers/r-cnaqc?tab=tags


.. raw:: html

    <script>
        var package = "r-cnaqc";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cnaqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cnaqc/README.html