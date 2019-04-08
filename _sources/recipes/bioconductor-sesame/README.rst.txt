:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sesame'
.. highlight: bash

bioconductor-sesame
===================

.. conda:recipe:: bioconductor-sesame
   :replaces_section_title:

   Tools For analyzing Illumina Infinium DNA methylation arrays.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sesame.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sesame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesame/meta.yaml>`_

   


.. conda:package:: bioconductor-sesame

   |downloads_bioconductor-sesame| |docker_bioconductor-sesame|

   :versions: 1.0.0-0
   
   :depends bioconductor-dnacopy: >=1.56.0,<1.57.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-illuminaio: >=0.24.0,<0.25.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-sesamedata: >=1.0.0,<1.1.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-r6: 
   :depends r-randomforest: 
   :depends r-wheatmap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sesame

   and update with::

      conda update bioconductor-sesame

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sesame:<tag>

   (see `bioconductor-sesame/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sesame| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sesame.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sesame| image:: https://quay.io/repository/biocontainers/bioconductor-sesame/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sesame
.. _`bioconductor-sesame/tags`: https://quay.io/repository/biocontainers/bioconductor-sesame?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sesame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sesame/README.html