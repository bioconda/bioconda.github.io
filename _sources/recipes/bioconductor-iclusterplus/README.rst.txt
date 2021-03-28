:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iclusterplus'
.. highlight: bash

bioconductor-iclusterplus
=========================

.. conda:recipe:: bioconductor-iclusterplus
   :replaces_section_title:
   :noindex:

   Integrative clustering of multi\-type genomic data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/iClusterPlus.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iclusterplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iclusterplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iclusterplus/meta.yaml>`_

   Integrative clustering of multiple genomic data using a joint latent variable model.


.. conda:package:: bioconductor-iclusterplus

   |downloads_bioconductor-iclusterplus| |docker_bioconductor-iclusterplus|

   :versions:
      
      

      ``1.26.0-1``,  ``1.26.0-0``,  ``1.20.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iclusterplus

   and update with::

      conda update bioconductor-iclusterplus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iclusterplus:<tag>

   (see `bioconductor-iclusterplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iclusterplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iclusterplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iclusterplus
   :alt:   (downloads)
.. |docker_bioconductor-iclusterplus| image:: https://quay.io/repository/biocontainers/bioconductor-iclusterplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iclusterplus
.. _`bioconductor-iclusterplus/tags`: https://quay.io/repository/biocontainers/bioconductor-iclusterplus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iclusterplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iclusterplus/README.html