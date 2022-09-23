:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosmiq'
.. highlight: bash

bioconductor-cosmiq
===================

.. conda:recipe:: bioconductor-cosmiq
   :replaces_section_title:
   :noindex:

   cosmiq \- COmbining Single Masses Into Quantities

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/cosmiq.html
   :license: GPL-3
   :recipe: /`bioconductor-cosmiq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmiq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmiq/meta.yaml>`_
   :links: biotools: :biotools:`cosmiq`, doi: :doi:`10.5167/uzh-107947`

   cosmiq is a tool for the preprocessing of liquid\- or gas \- chromatography mass spectrometry \(LCMS\/GCMS\) data with a focus on metabolomics or lipidomics applications. To improve the detection of low abundant signals\, cosmiq generates master maps of the mZ\/RT space from all acquired runs before a peak detection algorithm is applied. The result is a more robust identification and quantification of low\-intensity MS signals compared to conventional approaches where peak picking is performed in each LCMS\/GCMS file separately. The cosmiq package builds on the xcmsSet object structure and can be therefore integrated well with the package xcms as an alternative preprocessing step.


.. conda:package:: bioconductor-cosmiq

   |downloads_bioconductor-cosmiq| |docker_bioconductor-cosmiq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-1``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-faahko: ``>=1.34.0,<1.35.0``
   :depends bioconductor-massspecwavelet: ``>=1.60.0,<1.61.0``
   :depends bioconductor-xcms: ``>=3.16.0,<3.17.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-pracma: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cosmiq

   and update with::

      conda update bioconductor-cosmiq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosmiq:<tag>

   (see `bioconductor-cosmiq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosmiq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosmiq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosmiq
   :alt:   (downloads)
.. |docker_bioconductor-cosmiq| image:: https://quay.io/repository/biocontainers/bioconductor-cosmiq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosmiq
.. _`bioconductor-cosmiq/tags`: https://quay.io/repository/biocontainers/bioconductor-cosmiq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cosmiq";
        var versions = ["1.28.0","1.28.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosmiq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosmiq/README.html