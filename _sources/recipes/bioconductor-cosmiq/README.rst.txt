.. title:: Package Recipe 'bioconductor-cosmiq'
.. highlight: bash


bioconductor-cosmiq
===================

.. conda:recipe:: bioconductor-cosmiq
   :replaces_section_title:

   cosmiq is a tool for the preprocessing of liquid\- or gas \- chromatography mass spectrometry \(LCMS\/GCMS\) data with a focus on metabolomics or lipidomics applications. To improve the detection of low abundant signals\, cosmiq generates master maps of the mZ\/RT space from all acquired runs before a peak detection algorithm is applied. The result is a more robust identification and quantification of low\-intensity MS signals compared to conventional approaches where peak picking is performed in each LCMS\/GCMS file separately. The cosmiq package builds on the xcmsSet object structure and can be therefore integrated well with the package xcms as an alternative preprocessing step.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cosmiq.html
   :license: GPL-3
   :recipe: /`bioconductor-cosmiq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmiq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmiq/meta.yaml>`_
   :links: biotools: :biotools:`cosmiq`, doi: :doi:`10.5167/uzh-107947`

   


.. conda:package:: bioconductor-cosmiq

   |downloads_bioconductor-cosmiq| |docker_bioconductor-cosmiq|

   :versions: 1.16.1, 1.16.0, 1.12.0

   :depends: :conda:package:`bioconductor-faahko` >=1.22.0,<1.23.0 :conda:package:`bioconductor-massspecwavelet` >=1.48.0,<1.49.0 :conda:package:`bioconductor-xcms` >=3.4.0,<3.5.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-pracma`  :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-cosmiq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cosmiq

   and update with::

      conda update bioconductor-cosmiq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cosmiq


.. |required_by_bioconductor-cosmiq| conda:required_by:: bioconductor-cosmiq
.. |downloads_bioconductor-cosmiq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosmiq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cosmiq| image:: https://quay.io/repository/biocontainers/bioconductor-cosmiq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosmiq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosmiq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosmiq/README.html

