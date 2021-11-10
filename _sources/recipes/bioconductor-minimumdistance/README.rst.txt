:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minimumdistance'
.. highlight: bash

bioconductor-minimumdistance
============================

.. conda:recipe:: bioconductor-minimumdistance
   :replaces_section_title:
   :noindex:

   A Package for De Novo CNV Detection in Case\-Parent Trios

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MinimumDistance.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minimumdistance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minimumdistance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minimumdistance/meta.yaml>`_
   :links: biotools: :biotools:`minimumdistance`, doi: :doi:`10.1186/1471-2105-13-330`

   Analysis of de novo copy number variants in trios from high\-dimensional genotyping platforms.


.. conda:package:: bioconductor-minimumdistance

   |downloads_bioconductor-minimumdistance| |docker_bioconductor-minimumdistance|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-dnacopy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-matrixgenerics: ``>=1.6.0,<1.7.0``
   :depends bioconductor-oligoclasses: ``>=1.56.0,<1.57.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-vanillaice: ``>=1.56.0,<1.57.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-ff: 
   :depends r-foreach: 
   :depends r-lattice: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minimumdistance

   and update with::

      conda update bioconductor-minimumdistance

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minimumdistance:<tag>

   (see `bioconductor-minimumdistance/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minimumdistance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minimumdistance.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minimumdistance
   :alt:   (downloads)
.. |docker_bioconductor-minimumdistance| image:: https://quay.io/repository/biocontainers/bioconductor-minimumdistance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minimumdistance
.. _`bioconductor-minimumdistance/tags`: https://quay.io/repository/biocontainers/bioconductor-minimumdistance?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-minimumdistance";
        var versions = ["1.38.0","1.36.0","1.34.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minimumdistance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minimumdistance/README.html