:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-abbrev'
.. highlight: bash

perl-text-abbrev
================

.. conda:recipe:: perl-text-abbrev
   :replaces_section_title:

   abbrev \- create an abbreviation table from a list

   :homepage: http://search.cpan.org/dist/Text-Abbrev
   :license: perl_5
   :recipe: /`perl-text-abbrev <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-abbrev>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-abbrev/meta.yaml>`_

   


.. conda:package:: perl-text-abbrev

   |downloads_perl-text-abbrev| |docker_perl-text-abbrev|

   :versions: 1.02-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-exporter: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-abbrev

   and update with::

      conda update perl-text-abbrev

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-abbrev:<tag>

   (see `perl-text-abbrev/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-abbrev| image:: https://img.shields.io/conda/dn/bioconda/perl-text-abbrev.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-text-abbrev| image:: https://quay.io/repository/biocontainers/perl-text-abbrev/status
   :target: https://quay.io/repository/biocontainers/perl-text-abbrev
.. _`perl-text-abbrev/tags`: https://quay.io/repository/biocontainers/perl-text-abbrev?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-abbrev/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-abbrev/README.html