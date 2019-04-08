:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-date-format'
.. highlight: bash

perl-date-format
================

.. conda:recipe:: perl-date-format/2.30
   :replaces_section_title:

   Date formating subroutines

   :homepage: http://metacpan.org/pod/Date::Format
   :license: perl_5
   :recipe: /`perl-date-format <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-format>`_/`2.30 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-format/2.30>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-date-format/2.30/meta.yaml>`_

   


.. conda:package:: perl-date-format

   |downloads_perl-date-format| |docker_perl-date-format|

   :versions: 2.30-2, 2.30-1, 2.30-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-date-format

   and update with::

      conda update perl-date-format

   or use the docker container::

      docker pull quay.io/biocontainers/perl-date-format:<tag>

   (see `perl-date-format/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-date-format| image:: https://img.shields.io/conda/dn/bioconda/perl-date-format.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-date-format| image:: https://quay.io/repository/biocontainers/perl-date-format/status
   :target: https://quay.io/repository/biocontainers/perl-date-format
.. _`perl-date-format/tags`: https://quay.io/repository/biocontainers/perl-date-format?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-date-format/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-date-format/README.html