:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-titancna'
.. highlight: bash

bioconductor-titancna
=====================

.. conda:recipe:: bioconductor-titancna
   :replaces_section_title:
   :noindex:

   Subclonal copy number and LOH prediction from whole genome sequencing of tumours

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/TitanCNA.html
   :license: GPL-3
   :recipe: /`bioconductor-titancna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-titancna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-titancna/meta.yaml>`_
   :links: biotools: :biotools:`titancna`

   Hidden Markov model to segment and predict regions of subclonal copy number alterations \(CNA\) and loss of heterozygosity \(LOH\)\, and estimate cellular prevalence of clonal clusters in tumour whole genome sequencing data.


.. conda:package:: bioconductor-titancna

   |downloads_bioconductor-titancna| |docker_bioconductor-titancna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.19.1-4``,  ``1.19.1-3``,  ``1.19.1-2``,  ``1.19.1-1``,  ``1.19.1-0``,  ``1.18.0-0``,  ``1.17.2-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: ``>=1.10.4``
   :depends r-dplyr: ``>=0.5.0``
   :depends r-foreach: ``>=1.4.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-titancna

   and update with::

      conda update bioconductor-titancna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-titancna:<tag>

   (see `bioconductor-titancna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-titancna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-titancna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-titancna
   :alt:   (downloads)
.. |docker_bioconductor-titancna| image:: https://quay.io/repository/biocontainers/bioconductor-titancna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-titancna
.. _`bioconductor-titancna/tags`: https://quay.io/repository/biocontainers/bioconductor-titancna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-titancna";
        var versions = ["1.36.0","1.36.0","1.32.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-titancna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-titancna/README.html