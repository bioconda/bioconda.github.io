:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-forks'
.. highlight: bash

perl-forks
==========

.. conda:recipe:: perl-forks
   :replaces_section_title:
   :noindex:

   drop\-in replacement for Perl threads using fork\(\)

   :homepage: http://search.cpan.org/~rybskej/forks/lib/forks.pm
   :license: perl_5
   :recipe: /`perl-forks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-forks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-forks/meta.yaml>`_

   


.. conda:package:: perl-forks

   |downloads_perl-forks| |docker_perl-forks|

   :versions:
      
      

      ``0.36-8``,  ``0.36-7``,  ``0.36-6``,  ``0.36-5``,  ``0.36-4``,  ``0.36-3``,  ``0.36-2``,  ``0.36-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-acme-damn: 
   :depends perl-attribute-handlers: 
   :depends perl-devel-symdump: 
   :depends perl-list-moreutils: 
   :depends perl-storable: 
   :depends perl-sys-sigaction: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-forks

   and update with::

      mamba update perl-forks

  To create a new environment, run::

      mamba create --name myenvname perl-forks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-forks:<tag>

   (see `perl-forks/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-forks| image:: https://img.shields.io/conda/dn/bioconda/perl-forks.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-forks
   :alt:   (downloads)
.. |docker_perl-forks| image:: https://quay.io/repository/biocontainers/perl-forks/status
   :target: https://quay.io/repository/biocontainers/perl-forks
.. _`perl-forks/tags`: https://quay.io/repository/biocontainers/perl-forks?tab=tags


.. raw:: html

    <script>
        var package = "perl-forks";
        var versions = ["0.36","0.36","0.36","0.36","0.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-forks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-forks/README.html