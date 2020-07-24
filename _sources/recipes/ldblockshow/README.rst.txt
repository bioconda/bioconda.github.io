:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ldblockshow'
.. highlight: bash

ldblockshow
===========

.. conda:recipe:: ldblockshow
   :replaces_section_title:
   :noindex:

   a tool for showing linkage disequilibrium heatmaps from variant call format \(VCF\) files

   :homepage: https://github.com/BGI-shenzhen/LDBlockShow
   :license: MIT
   :recipe: /`ldblockshow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldblockshow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldblockshow/meta.yaml>`_
   :links: biotools: :biotools:`ldblockshow`

   


.. conda:package:: ldblockshow

   |downloads_ldblockshow| |docker_ldblockshow|

   :versions:
      
      

      ``1.27-0``,  ``1.25-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends perl-svg: 
   :depends plink: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ldblockshow

   and update with::

      conda update ldblockshow

   or use the docker container::

      docker pull quay.io/biocontainers/ldblockshow:<tag>

   (see `ldblockshow/tags`_ for valid values for ``<tag>``)


.. |downloads_ldblockshow| image:: https://img.shields.io/conda/dn/bioconda/ldblockshow.svg?style=flat
   :target: https://anaconda.org/bioconda/ldblockshow
   :alt:   (downloads)
.. |docker_ldblockshow| image:: https://quay.io/repository/biocontainers/ldblockshow/status
   :target: https://quay.io/repository/biocontainers/ldblockshow
.. _`ldblockshow/tags`: https://quay.io/repository/biocontainers/ldblockshow?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ldblockshow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ldblockshow/README.html