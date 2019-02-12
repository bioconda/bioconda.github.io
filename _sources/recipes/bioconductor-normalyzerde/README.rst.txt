:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-normalyzerde'
.. highlight: bash

bioconductor-normalyzerde
=========================

.. conda:recipe:: bioconductor-normalyzerde
   :replaces_section_title:

   NormalyzerDE provides screening of normalization methods for LC\-MS based expression data. It calculates a range of normalized matrices using both existing approaches and a novel time\-segmented approach\, calculates performance measures and generates an evaluation report. Furthermore\, it provides an easy utility for Limma\- or ANOVA\- based differential expression analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NormalyzerDE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-normalyzerde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalyzerde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalyzerde/meta.yaml>`_

   


.. conda:package:: bioconductor-normalyzerde

   |downloads_bioconductor-normalyzerde| |docker_bioconductor-normalyzerde|

   :versions: 1.0.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends bioconductor-vsn: >=3.50.0,<3.51.0
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-car: 
   
   :depends r-ggplot2: 
   
   :depends r-mass: 
   
   :depends r-matrixstats: 
   
   :depends r-raster: 
   
   :depends r-rcmdrmisc: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-normalyzerde

   and update with::

      conda update bioconductor-normalyzerde

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-normalyzerde:<tag>

   (see `bioconductor-normalyzerde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-normalyzerde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normalyzerde.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-normalyzerde| image:: https://quay.io/repository/biocontainers/bioconductor-normalyzerde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normalyzerde
.. _`bioconductor-normalyzerde/tags`: https://quay.io/repository/biocontainers/bioconductor-normalyzerde?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normalyzerde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normalyzerde/README.html