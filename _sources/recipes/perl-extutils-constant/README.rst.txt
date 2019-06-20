:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-constant'
.. highlight: bash

perl-extutils-constant
======================

.. conda:recipe:: perl-extutils-constant
   :replaces_section_title:

   generate XS code to import C header constants

   :homepage: http://metacpan.org/pod/ExtUtils::Constant
   :license: perl_5
   :recipe: /`perl-extutils-constant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-constant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-constant/meta.yaml>`_

   


.. conda:package:: perl-extutils-constant

   |downloads_perl-extutils-constant| |docker_perl-extutils-constant|

   :versions: 0.25-0, 0.24-1, 0.24-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-constant

   and update with::

      conda update perl-extutils-constant

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-constant:<tag>

   (see `perl-extutils-constant/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-constant| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-constant.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-constant
   :alt:   (downloads)
.. |docker_perl-extutils-constant| image:: https://quay.io/repository/biocontainers/perl-extutils-constant/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-constant
.. _`perl-extutils-constant/tags`: https://quay.io/repository/biocontainers/perl-extutils-constant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-constant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-constant/README.html