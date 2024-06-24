:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-retroseq'
.. highlight: bash

perl-retroseq
=============

.. conda:recipe:: perl-retroseq
   :replaces_section_title:
   :noindex:

   RetroSeq\: discovery and genotyping of TEVs from reads in BAM format.

   :homepage: https://github.com/tk2/RetroSeq
   :license: GPL
   :recipe: /`perl-retroseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-retroseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-retroseq/meta.yaml>`_

   


.. conda:package:: perl-retroseq

   |downloads_perl-retroseq| |docker_perl-retroseq|

   :versions:
      
      

      ``1.5-2``,  ``1.5-1``,  ``1.5-0``

      

   
   :depends bcftools: 
   :depends bedtools: 
   :depends exonerate: ``2.2.0``
   :depends ncurses: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends samtools: ``0.1.19``
   :depends zlib: 
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

      mamba install perl-retroseq

   and update with::

      mamba update perl-retroseq

  To create a new environment, run::

      mamba create --name myenvname perl-retroseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-retroseq:<tag>

   (see `perl-retroseq/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-retroseq| image:: https://img.shields.io/conda/dn/bioconda/perl-retroseq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-retroseq
   :alt:   (downloads)
.. |docker_perl-retroseq| image:: https://quay.io/repository/biocontainers/perl-retroseq/status
   :target: https://quay.io/repository/biocontainers/perl-retroseq
.. _`perl-retroseq/tags`: https://quay.io/repository/biocontainers/perl-retroseq?tab=tags


.. raw:: html

    <script>
        var package = "perl-retroseq";
        var versions = ["1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-retroseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-retroseq/README.html