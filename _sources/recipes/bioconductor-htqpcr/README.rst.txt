:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htqpcr'
.. highlight: bash

bioconductor-htqpcr
===================

.. conda:recipe:: bioconductor-htqpcr
   :replaces_section_title:
   :noindex:

   Automated analysis of high\-throughput qPCR data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/HTqPCR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htqpcr/meta.yaml>`_
   :links: biotools: :biotools:`htqpcr`

   Analysis of Ct values from high throughput quantitative real\-time PCR \(qPCR\) assays across multiple conditions or replicates. The input data can be from spatially\-defined formats such ABI TaqMan Low Density Arrays or OpenArray\; LightCycler from Roche Applied Science\; the CFX plates from Bio\-Rad Laboratories\; conventional 96\- or 384\-well plates\; or microfluidic devices such as the Dynamic Arrays from Fluidigm Corporation. HTqPCR handles data loading\, quality assessment\, normalization\, visualization and parametric or non\-parametric testing for statistical significance in Ct values between features \(e.g. genes\, microRNAs\).


.. conda:package:: bioconductor-htqpcr

   |downloads_bioconductor-htqpcr| |docker_bioconductor-htqpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htqpcr

   and update with::

      conda update bioconductor-htqpcr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htqpcr:<tag>

   (see `bioconductor-htqpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htqpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htqpcr
   :alt:   (downloads)
.. |docker_bioconductor-htqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-htqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htqpcr
.. _`bioconductor-htqpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-htqpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-htqpcr";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htqpcr/README.html