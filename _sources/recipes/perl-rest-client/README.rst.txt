:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-rest-client'
.. highlight: bash

perl-rest-client
================

.. conda:recipe:: perl-rest-client
   :replaces_section_title:
   :noindex:

   A simple client for interacting with RESTful http\/https resources

   :homepage: http://metacpan.org/pod/REST::Client
   :license: perl_5
   :recipe: /`perl-rest-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-rest-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-rest-client/meta.yaml>`_

   


.. conda:package:: perl-rest-client

   |downloads_perl-rest-client| |docker_perl-rest-client|

   :versions:
      
      

      ``273-1``,  ``273-0``

      

   
   :depends perl-lwp-protocol-https: 
   :depends perl-uri: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-rest-client

   and update with::

      conda update perl-rest-client

   or use the docker container::

      docker pull quay.io/biocontainers/perl-rest-client:<tag>

   (see `perl-rest-client/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-rest-client| image:: https://img.shields.io/conda/dn/bioconda/perl-rest-client.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-rest-client
   :alt:   (downloads)
.. |docker_perl-rest-client| image:: https://quay.io/repository/biocontainers/perl-rest-client/status
   :target: https://quay.io/repository/biocontainers/perl-rest-client
.. _`perl-rest-client/tags`: https://quay.io/repository/biocontainers/perl-rest-client?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-rest-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-rest-client/README.html