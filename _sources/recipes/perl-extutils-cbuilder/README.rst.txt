:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-cbuilder'
.. highlight: bash

perl-extutils-cbuilder
======================

.. conda:recipe:: perl-extutils-cbuilder/0.280230
   :replaces_section_title:
   :noindex:

   Compile and link C code for Perl modules

   :homepage: http://search.cpan.org/dist/ExtUtils-CBuilder
   :license: perl_5
   :recipe: /`perl-extutils-cbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder>`_/`0.280230 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder/0.280230>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder/0.280230/meta.yaml>`_

   


.. conda:package:: perl-extutils-cbuilder

   |downloads_perl-extutils-cbuilder| |docker_perl-extutils-cbuilder|

   :versions:
      
      

      ``0.280230-2``,  ``0.280230-1``,  ``0.280230-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-extutils-makemaker: 
   :depends perl-file-temp: 
   :depends perl-ipc-cmd: 
   :depends perl-perl-ostype: 
   :depends perl-text-parsewords: 
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

      mamba install perl-extutils-cbuilder

   and update with::

      mamba update perl-extutils-cbuilder

  To create a new environment, run::

      mamba create --name myenvname perl-extutils-cbuilder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-cbuilder:<tag>

   (see `perl-extutils-cbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-cbuilder| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-cbuilder.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-cbuilder
   :alt:   (downloads)
.. |docker_perl-extutils-cbuilder| image:: https://quay.io/repository/biocontainers/perl-extutils-cbuilder/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-cbuilder
.. _`perl-extutils-cbuilder/tags`: https://quay.io/repository/biocontainers/perl-extutils-cbuilder?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-cbuilder";
        var versions = ["0.280230","0.280230","0.280230"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-cbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-cbuilder/README.html