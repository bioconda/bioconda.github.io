:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipo'
.. highlight: bash

bioconductor-ipo
================

.. conda:recipe:: bioconductor-ipo
   :replaces_section_title:

   The outcome of XCMS data processing strongly depends on the parameter settings. IPO \(\`Isotopologue Parameter Optimization\`\) is a parameter optimization tool that is applicable for different kinds of samples and liquid chromatography coupled to high resolution mass spectrometry devices\, fast and free of labeling steps. IPO uses natural\, stable 13C isotopes to calculate a peak picking score. Retention time correction is optimized by minimizing the relative retention time differences within features and grouping parameters are optimized by maximizing the number of features showing exactly one peak from each injection of a pooled sample. The different parameter settings are achieved by design of experiment. The resulting scores are evaluated using response surface models.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IPO.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-ipo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipo/meta.yaml>`_
   :links: biotools: :biotools:`ipo`

   


.. conda:package:: bioconductor-ipo

   |downloads_bioconductor-ipo| |docker_bioconductor-ipo|

   :versions: 1.8.1-1, 1.8.1-0, 1.4.0-0, 1.2.2-0, 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-camera: >=1.38.0,<1.39.0
   :depends bioconductor-xcms: >=3.4.0,<3.5.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rsm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ipo

   and update with::

      conda update bioconductor-ipo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ipo:<tag>

   (see `bioconductor-ipo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ipo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ipo
   :alt:   (downloads)
.. |docker_bioconductor-ipo| image:: https://quay.io/repository/biocontainers/bioconductor-ipo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipo
.. _`bioconductor-ipo/tags`: https://quay.io/repository/biocontainers/bioconductor-ipo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipo/README.html