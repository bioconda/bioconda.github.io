:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-cppguess'
.. highlight: bash

perl-extutils-cppguess
======================

.. conda:recipe:: perl-extutils-cppguess
   :replaces_section_title:

   guess C\+\+ compiler and flags

   :homepage: http://metacpan.org/pod/ExtUtils::CppGuess
   :license: perl_5
   :recipe: /`perl-extutils-cppguess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cppguess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cppguess/meta.yaml>`_

   


.. conda:package:: perl-extutils-cppguess

   |downloads_perl-extutils-cppguess| |docker_perl-extutils-cppguess|

   :versions: 0.12-3, 0.12-2, 0.12-1, 0.12-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-capture-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-cppguess

   and update with::

      conda update perl-extutils-cppguess

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-cppguess:<tag>

   (see `perl-extutils-cppguess/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-cppguess| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-cppguess.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-cppguess| image:: https://quay.io/repository/biocontainers/perl-extutils-cppguess/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-cppguess
.. _`perl-extutils-cppguess/tags`: https://quay.io/repository/biocontainers/perl-extutils-cppguess?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-cppguess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-cppguess/README.html