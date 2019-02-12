:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mpra'
.. highlight: bash

bioconductor-mpra
=================

.. conda:recipe:: bioconductor-mpra
   :replaces_section_title:

   Tools for data management\, count preprocessing\, and differential analysis in massively parallel report assays \(MPRA\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mpra.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mpra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpra/meta.yaml>`_

   


.. conda:package:: bioconductor-mpra

   |downloads_bioconductor-mpra| |docker_bioconductor-mpra|

   :versions: 1.4.1-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-scales: 
   
   :depends r-statmod: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mpra

   and update with::

      conda update bioconductor-mpra

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mpra:<tag>

   (see `bioconductor-mpra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mpra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mpra.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mpra| image:: https://quay.io/repository/biocontainers/bioconductor-mpra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mpra
.. _`bioconductor-mpra/tags`: https://quay.io/repository/biocontainers/bioconductor-mpra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mpra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mpra/README.html