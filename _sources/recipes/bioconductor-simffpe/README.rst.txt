:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simffpe'
.. highlight: bash

bioconductor-simffpe
====================

.. conda:recipe:: bioconductor-simffpe
   :replaces_section_title:
   :noindex:

   NGS Read Simulator for FFPE Tissue

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SimFFPE.html
   :license: LGPL-3
   :recipe: /`bioconductor-simffpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simffpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simffpe/meta.yaml>`_

   The NGS \(Next\-Generation Sequencing\) reads from FFPE \(Formalin\-Fixed Paraffin\-Embedded\) samples contain numerous artifact chimeric reads \(ACRS\)\, which can lead to false positive structural variant calls. These ACRs are derived from the combination of two single\-stranded DNA \(ss\-DNA\) fragments with short reverse complementary regions \(SRCRs\). This package simulates these artifact chimeric reads as well as normal reads for FFPE samples on the whole genome \/ several chromosomes \/ large regions.


.. conda:package:: bioconductor-simffpe

   |downloads_bioconductor-simffpe| |docker_bioconductor-simffpe|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-truncnorm: 
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

      mamba install bioconductor-simffpe

   and update with::

      mamba update bioconductor-simffpe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-simffpe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simffpe:<tag>

   (see `bioconductor-simffpe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simffpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simffpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simffpe
   :alt:   (downloads)
.. |docker_bioconductor-simffpe| image:: https://quay.io/repository/biocontainers/bioconductor-simffpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simffpe
.. _`bioconductor-simffpe/tags`: https://quay.io/repository/biocontainers/bioconductor-simffpe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simffpe";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simffpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simffpe/README.html