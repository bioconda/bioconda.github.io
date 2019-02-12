:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-details'
.. highlight: bash

perl-file-details
=================

.. conda:recipe:: perl-file-details
   :replaces_section_title:

   File details in an object\, stat\, hash\, etc..

   :homepage: http://metacpan.org/pod/File::Details
   :license: perl_5
   :recipe: /`perl-file-details <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-details>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-details/meta.yaml>`_

   


.. conda:package:: perl-file-details

   |downloads_perl-file-details| |docker_perl-file-details|

   :versions: 0.003-1, 0.003-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-class-accessor: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-details

   and update with::

      conda update perl-file-details

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-details:<tag>

   (see `perl-file-details/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-details| image:: https://img.shields.io/conda/dn/bioconda/perl-file-details.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-details| image:: https://quay.io/repository/biocontainers/perl-file-details/status
   :target: https://quay.io/repository/biocontainers/perl-file-details
.. _`perl-file-details/tags`: https://quay.io/repository/biocontainers/perl-file-details?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-details/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-details/README.html