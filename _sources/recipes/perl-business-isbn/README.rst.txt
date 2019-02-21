:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-business-isbn'
.. highlight: bash

perl-business-isbn
==================

.. conda:recipe:: perl-business-isbn
   :replaces_section_title:

   work with International Standard Book Numbers

   :homepage: https://github.com/briandfoy/business-isbn
   :license: artistic_2
   :recipe: /`perl-business-isbn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-business-isbn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-business-isbn/meta.yaml>`_

   


.. conda:package:: perl-business-isbn

   |downloads_perl-business-isbn| |docker_perl-business-isbn|

   :versions: 3.004-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-business-isbn-data: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-business-isbn

   and update with::

      conda update perl-business-isbn

   or use the docker container::

      docker pull quay.io/biocontainers/perl-business-isbn:<tag>

   (see `perl-business-isbn/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-business-isbn| image:: https://img.shields.io/conda/dn/bioconda/perl-business-isbn.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-business-isbn| image:: https://quay.io/repository/biocontainers/perl-business-isbn/status
   :target: https://quay.io/repository/biocontainers/perl-business-isbn
.. _`perl-business-isbn/tags`: https://quay.io/repository/biocontainers/perl-business-isbn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-business-isbn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-business-isbn/README.html