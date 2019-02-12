:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m3drop'
.. highlight: bash

bioconductor-m3drop
===================

.. conda:recipe:: bioconductor-m3drop
   :replaces_section_title:

   This package fits a Michaelis\-Menten model to the pattern of dropouts in single\-cell RNASeq data. This model is used as a null to identify significantly variable \(i.e. differentially expressed\) genes for use in downstream analysis\, such as clustering cells.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/M3Drop.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-m3drop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3drop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3drop/meta.yaml>`_
   :links: biotools: :biotools:`m3drop`, doi: :doi:`10.1002/1873-3468.12684`

   


.. conda:package:: bioconductor-m3drop

   |downloads_bioconductor-m3drop| |docker_bioconductor-m3drop|

   :versions: 1.8.1-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bbmle: 
   
   :depends r-gplots: 
   
   :depends r-numderiv: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-statmod: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-m3drop

   and update with::

      conda update bioconductor-m3drop

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-m3drop:<tag>

   (see `bioconductor-m3drop/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-m3drop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m3drop.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-m3drop| image:: https://quay.io/repository/biocontainers/bioconductor-m3drop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m3drop
.. _`bioconductor-m3drop/tags`: https://quay.io/repository/biocontainers/bioconductor-m3drop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m3drop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m3drop/README.html