:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-getopt-argvfile'
.. highlight: bash

perl-getopt-argvfile
====================

.. conda:recipe:: perl-getopt-argvfile/1.11
   :replaces_section_title:
   :noindex:

   interpolates script options from files into \@ARGV or another array

   :homepage: http://metacpan.org/pod/Getopt::ArgvFile
   :license: artistic_1
   :recipe: /`perl-getopt-argvfile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-argvfile>`_/`1.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-argvfile/1.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-argvfile/1.11/meta.yaml>`_

   


.. conda:package:: perl-getopt-argvfile

   |downloads_perl-getopt-argvfile| |docker_perl-getopt-argvfile|

   :versions:
      
      

      ``1.11-2``,  ``1.11-1``,  ``1.11-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-test-harness: 
   :depends perl-test-simple: 
   :depends perl-text-parsewords: 
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

      mamba install perl-getopt-argvfile

   and update with::

      mamba update perl-getopt-argvfile

  To create a new environment, run::

      mamba create --name myenvname perl-getopt-argvfile

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-getopt-argvfile:<tag>

   (see `perl-getopt-argvfile/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-getopt-argvfile| image:: https://img.shields.io/conda/dn/bioconda/perl-getopt-argvfile.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-getopt-argvfile
   :alt:   (downloads)
.. |docker_perl-getopt-argvfile| image:: https://quay.io/repository/biocontainers/perl-getopt-argvfile/status
   :target: https://quay.io/repository/biocontainers/perl-getopt-argvfile
.. _`perl-getopt-argvfile/tags`: https://quay.io/repository/biocontainers/perl-getopt-argvfile?tab=tags


.. raw:: html

    <script>
        var package = "perl-getopt-argvfile";
        var versions = ["1.11","1.11","1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-getopt-argvfile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-getopt-argvfile/README.html