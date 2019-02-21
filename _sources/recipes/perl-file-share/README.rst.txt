:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-share'
.. highlight: bash

perl-file-share
===============

.. conda:recipe:: perl-file-share/0.25
   :replaces_section_title:

   Extend File\:\:ShareDir to Local Libraries

   :homepage: https://github.com/ingydotnet/file-share-pm
   :license: perl_5
   :recipe: /`perl-file-share <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share>`_/`0.25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share/0.25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share/0.25/meta.yaml>`_

   


.. conda:package:: perl-file-share

   |downloads_perl-file-share| |docker_perl-file-share|

   :versions: 0.25-2, 0.25-1, 0.25-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-file-sharedir: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-share

   and update with::

      conda update perl-file-share

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-share:<tag>

   (see `perl-file-share/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-share| image:: https://img.shields.io/conda/dn/bioconda/perl-file-share.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-share| image:: https://quay.io/repository/biocontainers/perl-file-share/status
   :target: https://quay.io/repository/biocontainers/perl-file-share
.. _`perl-file-share/tags`: https://quay.io/repository/biocontainers/perl-file-share?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-share/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-share/README.html