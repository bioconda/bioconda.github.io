:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-log-any'
.. highlight: bash

perl-log-any
============

.. conda:recipe:: perl-log-any
   :replaces_section_title:

   Bringing loggers and listeners together

   :homepage: https://github.com/preaction/Log-Any
   :license: perl_5
   :recipe: /`perl-log-any <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-log-any>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-log-any/meta.yaml>`_

   


.. conda:package:: perl-log-any

   |downloads_perl-log-any| |docker_perl-log-any|

   :versions: 1.045-1, 1.045-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-apache-test: 
   
   :depends perl-test-simple: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-log-any

   and update with::

      conda update perl-log-any

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-log-any:<tag>

   (see `perl-log-any/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-log-any| image:: https://img.shields.io/conda/dn/bioconda/perl-log-any.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-log-any| image:: https://quay.io/repository/biocontainers/perl-log-any/status
   :target: https://quay.io/repository/biocontainers/perl-log-any
.. _`perl-log-any/tags`: https://quay.io/repository/biocontainers/perl-log-any?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-log-any/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-log-any/README.html