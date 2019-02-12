:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-basic'
.. highlight: bash

perl-statistics-basic
=====================

.. conda:recipe:: perl-statistics-basic
   :replaces_section_title:

   

   :homepage: http://metacpan.org/pod/Statistics-Basic
   :license: open_source
   :recipe: /`perl-statistics-basic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-basic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-basic/meta.yaml>`_

   


.. conda:package:: perl-statistics-basic

   |downloads_perl-statistics-basic| |docker_perl-statistics-basic|

   :versions: 1.6611-2, 1.6611-1, 1.6611-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-number-format: 
   
   :depends perl-scalar-list-utils: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-statistics-basic

   and update with::

      conda update perl-statistics-basic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-statistics-basic:<tag>

   (see `perl-statistics-basic/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-basic| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-basic.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-statistics-basic| image:: https://quay.io/repository/biocontainers/perl-statistics-basic/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-basic
.. _`perl-statistics-basic/tags`: https://quay.io/repository/biocontainers/perl-statistics-basic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-basic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-basic/README.html