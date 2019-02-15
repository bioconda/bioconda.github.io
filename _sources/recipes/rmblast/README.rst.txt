:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmblast'
.. highlight: bash

rmblast
=======

.. conda:recipe:: rmblast
   :replaces_section_title:

   RMBlast is a RepeatMasker compatible version of the standard NCBI BLAST suite.

   :homepage: http://www.repeatmasker.org/RMBlast.html
   :license: OSL-2.1
   :recipe: /`rmblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmblast/meta.yaml>`_

   


.. conda:package:: rmblast

   |downloads_rmblast| |docker_rmblast|

   :versions: 2.6.0-0, 2.2.28-4, 2.2.28-3, 2.2.28-2
   
   :depends boost: >=1.67.0,<1.67.1.0a0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends nettle: >=3.3,<3.4.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends pcre: >=8.41,<9.0a0
   
   :depends perl: 
   
   :depends perl-archive-tar: 
   
   :depends perl-list-moreutils: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmblast

   and update with::

      conda update rmblast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rmblast:<tag>

   (see `rmblast/tags`_ for valid values for ``<tag>``)


.. |downloads_rmblast| image:: https://img.shields.io/conda/dn/bioconda/rmblast.svg?style=flat
   :alt:   (downloads)
.. |docker_rmblast| image:: https://quay.io/repository/biocontainers/rmblast/status
   :target: https://quay.io/repository/biocontainers/rmblast
.. _`rmblast/tags`: https://quay.io/repository/biocontainers/rmblast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmblast/README.html