:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tb_variant_filter'
.. highlight: bash

tb_variant_filter
=================

.. conda:recipe:: tb_variant_filter
   :replaces_section_title:

   VCF variant filter optimised for filter M. tuberculosis H37Rv variants

   :homepage: http://github.com/COMBAT-TB/tb_variant_filter
   :license: GPL / GPL-3.0
   :recipe: /`tb_variant_filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb_variant_filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb_variant_filter/meta.yaml>`_

   tb\_variant\_filter filters variants in VCF filters\, with a focus on the kinds of filtering
   done with variants found relative to M. tuberculosis H37Rv


.. conda:package:: tb_variant_filter

   |downloads_tb_variant_filter| |docker_tb_variant_filter|

   :versions: 0.1.0-0, 0.0.1-0
   
   :depends intervaltree: 
   
   :depends lxml: 
   
   :depends pandas: 
   
   :depends py2neo: >=4.2.0
   
   :depends python: >=3.7
   
   :depends requests: 
   
   :depends vcfpy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tb_variant_filter

   and update with::

      conda update tb_variant_filter

   or use the docker container::

      docker pull quay.io/biocontainers/tb_variant_filter:<tag>

   (see `tb_variant_filter/tags`_ for valid values for ``<tag>``)


.. |downloads_tb_variant_filter| image:: https://img.shields.io/conda/dn/bioconda/tb_variant_filter.svg?style=flat
   :alt:   (downloads)
.. |docker_tb_variant_filter| image:: https://quay.io/repository/biocontainers/tb_variant_filter/status
   :target: https://quay.io/repository/biocontainers/tb_variant_filter
.. _`tb_variant_filter/tags`: https://quay.io/repository/biocontainers/tb_variant_filter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tb_variant_filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tb_variant_filter/README.html