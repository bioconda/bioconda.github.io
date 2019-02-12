:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plink'
.. highlight: bash

plink
=====

.. conda:recipe:: plink
   :replaces_section_title:

   Whole genome association analysis toolset\, designed to perform a range of basic\, large\-scale analyses in a computationally efficient manner.

   :homepage: https://www.cog-genomics.org/plink
   :license: GPLv3
   :recipe: /`plink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink/meta.yaml>`_
   :links: biotools: :biotools:`PLINK`, doi: :doi:`10.1086/519795`

   


.. conda:package:: plink

   |downloads_plink| |docker_plink|

   :versions: 1.90b4-2, 1.90b4-1, 1.90b4-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plink

   and update with::

      conda update plink

   or use the docker container::

      docker pull quay.io/repository/biocontainers/plink:<tag>

   (see `plink/tags`_ for valid values for ``<tag>``)


.. |downloads_plink| image:: https://img.shields.io/conda/dn/bioconda/plink.svg?style=flat
   :alt:   (downloads)
.. |docker_plink| image:: https://quay.io/repository/biocontainers/plink/status
   :target: https://quay.io/repository/biocontainers/plink
.. _`plink/tags`: https://quay.io/repository/biocontainers/plink?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plink/README.html