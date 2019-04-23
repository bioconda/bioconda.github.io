:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discosnp'
.. highlight: bash

discosnp
========

.. conda:recipe:: discosnp
   :replaces_section_title:

   Designed for discovering all kinds of SNPs

   :homepage: https://gatb.inria.fr/software/discosnp/
   :license: GNU Affero General Public License v3.0
   :recipe: /`discosnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discosnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discosnp/meta.yaml>`_
   :links: biotools: :biotools:`discosnp`, doi: :doi:`10.1093/nar/gkn000`

   


.. conda:package:: discosnp

   |downloads_discosnp| |docker_discosnp|

   :versions: 2.3.0-6, 2.3.0-5, 2.3.0-4, 2.3.0-3, 2.3.0-2, 2.3.0-1, 2.3.0-0, 2.2.10-1, 2.2.10-0
   
   :depends bwa: 
   :depends python: >=3.0
   :depends shortreadconnector: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install discosnp

   and update with::

      conda update discosnp

   or use the docker container::

      docker pull quay.io/biocontainers/discosnp:<tag>

   (see `discosnp/tags`_ for valid values for ``<tag>``)


.. |downloads_discosnp| image:: https://img.shields.io/conda/dn/bioconda/discosnp.svg?style=flat
   :alt:   (downloads)
.. |docker_discosnp| image:: https://quay.io/repository/biocontainers/discosnp/status
   :target: https://quay.io/repository/biocontainers/discosnp
.. _`discosnp/tags`: https://quay.io/repository/biocontainers/discosnp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discosnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discosnp/README.html