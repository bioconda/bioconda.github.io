:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncgtw'
.. highlight: bash

bioconductor-ncgtw
==================

.. conda:recipe:: bioconductor-ncgtw
   :replaces_section_title:
   :noindex:

   Alignment of LC\-MS Profiles by Neighbor\-wise Compound\-specific Graphical Time Warping with Misalignment Detection

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ncGTW.html
   :license: GPL-2
   :recipe: /`bioconductor-ncgtw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncgtw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncgtw/meta.yaml>`_

   The purpose of ncGTW is to help XCMS for LC\-MS data alignment. Currently\, ncGTW can detect the misaligned feature groups by XCMS\, and the user can choose to realign these feature groups by ncGTW or not.


.. conda:package:: bioconductor-ncgtw

   |downloads_bioconductor-ncgtw| |docker_bioconductor-ncgtw|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-xcms: ``>=3.14.0,<3.15.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ncgtw

   and update with::

      conda update bioconductor-ncgtw

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncgtw:<tag>

   (see `bioconductor-ncgtw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncgtw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncgtw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncgtw
   :alt:   (downloads)
.. |docker_bioconductor-ncgtw| image:: https://quay.io/repository/biocontainers/bioconductor-ncgtw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncgtw
.. _`bioconductor-ncgtw/tags`: https://quay.io/repository/biocontainers/bioconductor-ncgtw?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncgtw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncgtw/README.html