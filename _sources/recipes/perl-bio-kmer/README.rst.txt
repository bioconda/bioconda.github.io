:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-kmer'
.. highlight: bash

perl-bio-kmer
=============

.. conda:recipe:: perl-bio-kmer
   :replaces_section_title:
   :noindex:

   A perl module for helping with kmer analysis.

   :homepage: https://metacpan.org/pod/Bio::Kmer
   :license: MIT
   :recipe: /`perl-bio-kmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-kmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-kmer/meta.yaml>`_

   


.. conda:package:: perl-bio-kmer

   |downloads_perl-bio-kmer| |docker_perl-bio-kmer|

   :versions:
      
      

      ``0.55-0``

      

   
   :depends kmer-jellyfish: ``>=2``
   :depends kmer-jellyfish: ``>=2.3.1,<2.3.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.26``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: 
   :depends perl-file-which: 
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

      mamba install perl-bio-kmer

   and update with::

      mamba update perl-bio-kmer

  To create a new environment, run::

      mamba create --name myenvname perl-bio-kmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-kmer:<tag>

   (see `perl-bio-kmer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-kmer| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-kmer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-kmer
   :alt:   (downloads)
.. |docker_perl-bio-kmer| image:: https://quay.io/repository/biocontainers/perl-bio-kmer/status
   :target: https://quay.io/repository/biocontainers/perl-bio-kmer
.. _`perl-bio-kmer/tags`: https://quay.io/repository/biocontainers/perl-bio-kmer?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-kmer";
        var versions = ["0.55"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-kmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-kmer/README.html