:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cpan-meta-requirements'
.. highlight: bash

perl-cpan-meta-requirements
===========================

.. conda:recipe:: perl-cpan-meta-requirements
   :replaces_section_title:

   a set of version requirements for a CPAN dist

   :homepage: https://github.com/Perl-Toolchain-Gang/CPAN-Meta-Requirements
   :license: perl_5
   :recipe: /`perl-cpan-meta-requirements <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-requirements>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-requirements/meta.yaml>`_

   


.. conda:package:: perl-cpan-meta-requirements

   |downloads_perl-cpan-meta-requirements| |docker_perl-cpan-meta-requirements|

   :versions: 2.140-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-version: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cpan-meta-requirements

   and update with::

      conda update perl-cpan-meta-requirements

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-cpan-meta-requirements:<tag>

   (see `perl-cpan-meta-requirements/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cpan-meta-requirements| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-meta-requirements.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-cpan-meta-requirements| image:: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements
.. _`perl-cpan-meta-requirements/tags`: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-meta-requirements/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-meta-requirements/README.html