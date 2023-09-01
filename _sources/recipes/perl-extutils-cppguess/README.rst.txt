:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-cppguess'
.. highlight: bash

perl-extutils-cppguess
======================

.. conda:recipe:: perl-extutils-cppguess
   :replaces_section_title:
   :noindex:

   guess C\+\+ compiler and flags

   :homepage: http://metacpan.org/pod/ExtUtils::CppGuess
   :license: perl_5
   :recipe: /`perl-extutils-cppguess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cppguess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cppguess/meta.yaml>`_

   


.. conda:package:: perl-extutils-cppguess

   |downloads_perl-extutils-cppguess| |docker_perl-extutils-cppguess|

   :versions:
      
      

      ``0.26-1``,  ``0.26-0``,  ``0.12-5``,  ``0.12-4``,  ``0.12-3``,  ``0.12-2``,  ``0.12-1``,  ``0.12-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-capture-tiny: 
   :depends perl-module-build: ``0.4234.*``
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

      mamba install perl-extutils-cppguess

   and update with::

      mamba update perl-extutils-cppguess

  To create a new environment, run::

      mamba create --name myenvname perl-extutils-cppguess

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-cppguess:<tag>

   (see `perl-extutils-cppguess/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-cppguess| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-cppguess.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-cppguess
   :alt:   (downloads)
.. |docker_perl-extutils-cppguess| image:: https://quay.io/repository/biocontainers/perl-extutils-cppguess/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-cppguess
.. _`perl-extutils-cppguess/tags`: https://quay.io/repository/biocontainers/perl-extutils-cppguess?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-cppguess";
        var versions = ["0.26","0.26","0.12","0.12","0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-cppguess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-cppguess/README.html