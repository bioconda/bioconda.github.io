:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasnv'
.. highlight: bash

metasnv
=======

.. conda:recipe:: metasnv
   :replaces_section_title:

   SNV calling software

   :homepage: http:// metasnv.embl.de
   :license: GPLv3
   :recipe: /`metasnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnv/meta.yaml>`_

   


.. conda:package:: metasnv

   |downloads_metasnv| |docker_metasnv|

   :versions: 1.0.3-2, 1.0.3-1, 1.0.3-0, 1.0.2-0
   
   :depends htslib: >=1.9,<1.10.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metasnv

   and update with::

      conda update metasnv

   or use the docker container::

      docker pull quay.io/biocontainers/metasnv:<tag>

   (see `metasnv/tags`_ for valid values for ``<tag>``)


.. |downloads_metasnv| image:: https://img.shields.io/conda/dn/bioconda/metasnv.svg?style=flat
   :alt:   (downloads)
.. |docker_metasnv| image:: https://quay.io/repository/biocontainers/metasnv/status
   :target: https://quay.io/repository/biocontainers/metasnv
.. _`metasnv/tags`: https://quay.io/repository/biocontainers/metasnv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasnv/README.html