:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msgfplus'
.. highlight: bash

bioconductor-msgfplus
=====================

.. conda:recipe:: bioconductor-msgfplus
   :replaces_section_title:
   :noindex:

   An interface between R and MS\-GF\+

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MSGFplus.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-msgfplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msgfplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msgfplus/meta.yaml>`_

   This package contains function to perform peptide identification using the MS\-GF\+ algorithm. The package contains functionality for building up a parameter set both in code and through a simple GUI\, as well as running the algorithm in batches\, potentially asynchronously.


.. conda:package:: bioconductor-msgfplus

   |downloads_bioconductor-msgfplus| |docker_bioconductor-msgfplus|

   :versions:
      
      

      ``1.24.0-0``,  ``1.18.0-0``,  ``1.16.1-0``

      

   
   :depends bioconductor-mzid: ``>=1.28.0,<1.29.0``
   :depends bioconductor-protgenerics: ``>=1.22.0,<1.23.0``
   :depends openjdk: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msgfplus

   and update with::

      conda update bioconductor-msgfplus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msgfplus:<tag>

   (see `bioconductor-msgfplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msgfplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msgfplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msgfplus
   :alt:   (downloads)
.. |docker_bioconductor-msgfplus| image:: https://quay.io/repository/biocontainers/bioconductor-msgfplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msgfplus
.. _`bioconductor-msgfplus/tags`: https://quay.io/repository/biocontainers/bioconductor-msgfplus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msgfplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msgfplus/README.html