:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-date'
.. highlight: bash

perl-http-date
==============

.. conda:recipe:: perl-http-date
   :replaces_section_title:

   date conversion routines

   :homepage: http://metacpan.org/pod/HTTP::Date
   :license: perl_5
   :recipe: /`perl-http-date <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-date>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-date/meta.yaml>`_

   


.. conda:package:: perl-http-date

   |downloads_perl-http-date| |docker_perl-http-date|

   :versions: 6.02-3, 6.02-2, 6.02-1, 6.02-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-time-local: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-date

   and update with::

      conda update perl-http-date

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-http-date:<tag>

   (see `perl-http-date/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-date| image:: https://img.shields.io/conda/dn/bioconda/perl-http-date.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-http-date| image:: https://quay.io/repository/biocontainers/perl-http-date/status
   :target: https://quay.io/repository/biocontainers/perl-http-date
.. _`perl-http-date/tags`: https://quay.io/repository/biocontainers/perl-http-date?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-date/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-date/README.html