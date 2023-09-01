:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtbseq'
.. highlight: bash

mtbseq
======

.. conda:recipe:: mtbseq
   :replaces_section_title:
   :noindex:

   Pipeline for WGS analysis of M. tuberculosis

   :homepage: https://github.com/ngs-fzb/MTBseq_source
   :license: GPLv3
   :recipe: /`mtbseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtbseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtbseq/meta.yaml>`_

   MTBseq is a semi\-automated pipeline for mapping\, variant calling and
   detection of resistance mediating and phylogenetic variants from Illumina
   whole genome sequence data of Mycobacterium tuberculosis complex isolates


.. conda:package:: mtbseq

   |downloads_mtbseq| |docker_mtbseq|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends bwa: ``0.7.17``
   :depends gatk: ``3.8``
   :depends openjdk: ``>=8,<9``
   :depends perl: ``>=5.22``
   :depends perl-mce: ``>=1.836``
   :depends perl-number-format: 
   :depends perl-statistics-basic: ``>=1.6611``
   :depends picard: ``>=2.17.0,<3``
   :depends samtools: ``1.6``
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

      mamba install mtbseq

   and update with::

      mamba update mtbseq

  To create a new environment, run::

      mamba create --name myenvname mtbseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mtbseq:<tag>

   (see `mtbseq/tags`_ for valid values for ``<tag>``)


.. |downloads_mtbseq| image:: https://img.shields.io/conda/dn/bioconda/mtbseq.svg?style=flat
   :target: https://anaconda.org/bioconda/mtbseq
   :alt:   (downloads)
.. |docker_mtbseq| image:: https://quay.io/repository/biocontainers/mtbseq/status
   :target: https://quay.io/repository/biocontainers/mtbseq
.. _`mtbseq/tags`: https://quay.io/repository/biocontainers/mtbseq?tab=tags


.. raw:: html

    <script>
        var package = "mtbseq";
        var versions = ["1.1.0","1.0.4","1.0.4","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtbseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtbseq/README.html