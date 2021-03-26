:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-api'
.. highlight: bash

perl-ensembl-api
================

.. conda:recipe:: perl-ensembl-api
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-api <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-api>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-api/meta.yaml>`_

   


.. conda:package:: perl-ensembl-api

   |downloads_perl-ensembl-api| |docker_perl-ensembl-api|

   :versions:
      
      

      ``98-1``,  ``98-0``

      

   
   :depends perl: 
   :depends perl-ensembl-compara: ``98.*``
   :depends perl-ensembl-funcgen: ``98.*``
   :depends perl-ensembl-io: ``98.*``
   :depends perl-ensembl-variation: ``98.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ensembl-api

   and update with::

      conda update perl-ensembl-api

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-api:<tag>

   (see `perl-ensembl-api/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-api| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-api.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-api
   :alt:   (downloads)
.. |docker_perl-ensembl-api| image:: https://quay.io/repository/biocontainers/perl-ensembl-api/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-api
.. _`perl-ensembl-api/tags`: https://quay.io/repository/biocontainers/perl-ensembl-api?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-api/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-api/README.html