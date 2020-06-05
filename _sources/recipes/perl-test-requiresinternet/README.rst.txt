:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-requiresinternet'
.. highlight: bash

perl-test-requiresinternet
==========================

.. conda:recipe:: perl-test-requiresinternet
   :replaces_section_title:
   :noindex:

   Easily test network connectivity

   :homepage: https://metacpan.org/dist/Test-RequiresInternet
   :license: perl_5
   :recipe: /`perl-test-requiresinternet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requiresinternet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requiresinternet/meta.yaml>`_

   


.. conda:package:: perl-test-requiresinternet

   |downloads_perl-test-requiresinternet| |docker_perl-test-requiresinternet|

   :versions:
      
      

      ``0.05-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-socket: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-requiresinternet

   and update with::

      conda update perl-test-requiresinternet

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-requiresinternet:<tag>

   (see `perl-test-requiresinternet/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-requiresinternet| image:: https://img.shields.io/conda/dn/bioconda/perl-test-requiresinternet.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-requiresinternet
   :alt:   (downloads)
.. |docker_perl-test-requiresinternet| image:: https://quay.io/repository/biocontainers/perl-test-requiresinternet/status
   :target: https://quay.io/repository/biocontainers/perl-test-requiresinternet
.. _`perl-test-requiresinternet/tags`: https://quay.io/repository/biocontainers/perl-test-requiresinternet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-requiresinternet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-requiresinternet/README.html