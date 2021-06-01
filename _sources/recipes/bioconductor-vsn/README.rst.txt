:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vsn'
.. highlight: bash

bioconductor-vsn
================

.. conda:recipe:: bioconductor-vsn
   :replaces_section_title:
   :noindex:

   Variance stabilization and calibration for microarray data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/vsn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vsn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsn/meta.yaml>`_
   :links: biotools: :biotools:`vsn`

   The package implements a method for normalising microarray intensities\, and works for single\- and multiple\-color arrays. It can also be used for data from other technologies\, as long as they have similar format. The method uses a robust variant of the maximum\-likelihood estimator for an additive\-multiplicative error model and affine calibration. The model incorporates data calibration step \(a.k.a. normalization\)\, a model for the dependence of the variance on the mean intensity and a variance stabilizing data transformation. Differences between transformed intensities are analogous to \"normalized log\-ratios\". However\, in contrast to the latter\, their variance is independent of the mean\, and they are usually more sensitive and specific in detecting differential transcription.


.. conda:package:: bioconductor-vsn

   |downloads_bioconductor-vsn| |docker_bioconductor-vsn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.60.0-0</code>,  <code>3.58.0-1</code>,  <code>3.58.0-0</code>,  <code>3.56.0-0</code>,  <code>3.54.0-0</code>,  <code>3.52.0-1</code>,  <code>3.50.0-0</code>,  <code>3.48.1-0</code>,  <code>3.46.0-0</code>,  </span></summary>
      

      ``3.60.0-0``,  ``3.58.0-1``,  ``3.58.0-0``,  ``3.56.0-0``,  ``3.54.0-0``,  ``3.52.0-1``,  ``3.50.0-0``,  ``3.48.1-0``,  ``3.46.0-0``,  ``3.44.0-0``,  ``3.38.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-vsn
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