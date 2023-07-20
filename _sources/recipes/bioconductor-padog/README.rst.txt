:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-padog'
.. highlight: bash

bioconductor-padog
==================

.. conda:recipe:: bioconductor-padog
   :replaces_section_title:
   :noindex:

   Pathway Analysis with Down\-weighting of Overlapping Genes \(PADOG\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PADOG.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-padog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-padog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-padog/meta.yaml>`_
   :links: biotools: :biotools:`padog`, doi: :doi:`10.1186/1471-2105-13-136`

   This package implements a general purpose gene set analysis method called PADOG that downplays the importance of genes that apear often accross the sets of genes to be analyzed. The package provides also a benchmark for gene set analysis methods in terms of sensitivity and ranking using 24 public datasets from KEGGdzPathwaysGEO package.


.. conda:package:: bioconductor-padog

   |downloads_bioconductor-padog| |docker_bioconductor-padog|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.26.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-hgu133a.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-hgu133plus2.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-keggdzpathwaysgeo: ``>=1.38.0,<1.39.0``
   :depends bioconductor-keggrest: ``>=1.40.0,<1.41.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-gsa: 
   :depends r-nlme: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-padog

   and update with::

      conda update bioconductor-padog

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-padog:<tag>

   (see `bioconductor-padog/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-padog| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-padog.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-padog
   :alt:   (downloads)
.. |docker_bioconductor-padog| image:: https://quay.io/repository/biocontainers/bioconductor-padog/status
   :target: https://quay.io/repository/biocontainers/bioconductor-padog
.. _`bioconductor-padog/tags`: https://quay.io/repository/biocontainers/bioconductor-padog?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-padog";
        var versions = ["1.42.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-padog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-padog/README.html