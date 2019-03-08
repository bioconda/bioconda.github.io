:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vsn'
.. highlight: bash

bioconductor-vsn
================

.. conda:recipe:: bioconductor-vsn
   :replaces_section_title:

   The package implements a method for normalising microarray intensities\, and works for single\- and multiple\-color arrays. It can also be used for data from other technologies\, as long as they have similar format. The method uses a robust variant of the maximum\-likelihood estimator for an additive\-multiplicative error model and affine calibration. The model incorporates data calibration step \(a.k.a. normalization\)\, a model for the dependence of the variance on the mean intensity and a variance stabilizing data transformation. Differences between transformed intensities are analogous to \"normalized log\-ratios\". However\, in contrast to the latter\, their variance is independent of the mean\, and they are usually more sensitive and specific in detecting differential transcription.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/vsn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vsn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsn/meta.yaml>`_
   :links: biotools: :biotools:`vsn`

   


.. conda:package:: bioconductor-vsn

   |downloads_bioconductor-vsn| |docker_bioconductor-vsn|

   :versions: 3.50.0-0, 3.48.1-0, 3.46.0-0, 3.44.0-0, 3.38.0-1
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-lattice: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vsn

   and update with::

      conda update bioconductor-vsn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vsn:<tag>

   (see `bioconductor-vsn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vsn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vsn.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-vsn| image:: https://quay.io/repository/biocontainers/bioconductor-vsn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vsn
.. _`bioconductor-vsn/tags`: https://quay.io/repository/biocontainers/bioconductor-vsn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vsn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vsn/README.html