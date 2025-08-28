:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-hash-indexed'
.. highlight: bash

perl-tie-hash-indexed
=====================

.. conda:recipe:: perl-tie-hash-indexed
   :replaces_section_title:
   :noindex:

   Ordered hashes for Perl

   :homepage: https://metacpan.org/pod/Tie::Hash::Indexed
   :license: perl_5
   :recipe: /`perl-tie-hash-indexed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash-indexed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash-indexed/meta.yaml>`_

   


.. conda:package:: perl-tie-hash-indexed

   |downloads_perl-tie-hash-indexed| |docker_perl-tie-hash-indexed|

   :versions:
      
      

      ``0.08-4``,  ``0.08-3``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``,  ``0.05-2``,  ``0.05-1``,  ``0.05-0``

      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-module-build: ``0.4234.*``
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

      mamba install perl-tie-hash-indexed

   and update with::

      mamba update perl-tie-hash-indexed

  To create a new environment, run::

      mamba create --name myenvname perl-tie-hash-indexed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-tie-hash-indexed:<tag>

   (see `perl-tie-hash-indexed/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-hash-indexed| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-hash-indexed.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-hash-indexed
   :alt:   (downloads)
.. |docker_perl-tie-hash-indexed| image:: https://quay.io/repository/biocontainers/perl-tie-hash-indexed/status
   :target: https://quay.io/repository/biocontainers/perl-tie-hash-indexed
.. _`perl-tie-hash-indexed/tags`: https://quay.io/repository/biocontainers/perl-tie-hash-indexed?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-hash-indexed";
        var versions = ["0.08","0.08","0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-hash-indexed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-hash-indexed/README.html