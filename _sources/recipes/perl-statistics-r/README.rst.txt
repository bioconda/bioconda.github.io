:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-r'
.. highlight: bash

perl-statistics-r
=================

.. conda:recipe:: perl-statistics-r
   :replaces_section_title:
   :noindex:

   Statistics\:\:R \- Perl interface with the R statistical program

   :homepage: http://search.cpan.org/dist/Statistics-R/
   :license: Perl5
   :recipe: /`perl-statistics-r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-r/meta.yaml>`_

   


.. conda:package:: perl-statistics-r

   |downloads_perl-statistics-r| |docker_perl-statistics-r|

   :versions:
      
      

      ``0.34-6``,  ``0.34-5``,  ``0.34-4``,  ``0.34-3``,  ``0.34-2``,  ``0.34-1``,  ``0.34-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-ipc-run: 
   :depends perl-regexp-common: 
   :depends perl-text-balanced: ``>=1.97``
   :depends perl-text-wrap: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install perl-statistics-r

   and update with::

      mamba update perl-statistics-r

  To create a new environment, run::

      mamba create --name myenvname perl-statistics-r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-r:<tag>

   (see `perl-statistics-r/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-r| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-r.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-r
   :alt:   (downloads)
.. |docker_perl-statistics-r| image:: https://quay.io/repository/biocontainers/perl-statistics-r/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-r
.. _`perl-statistics-r/tags`: https://quay.io/repository/biocontainers/perl-statistics-r?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-r";
        var versions = ["0.34","0.34","0.34","0.34","0.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-r/README.html