:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-descan2'
.. highlight: bash

bioconductor-descan2
====================

.. conda:recipe:: bioconductor-descan2
   :replaces_section_title:
   :noindex:

   Differential Enrichment Scan 2

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/DEScan2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-descan2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-descan2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-descan2/meta.yaml>`_

   Integrated peak and differential caller\, specifically designed for broad epigenomic signals.


.. conda:package:: bioconductor-descan2

   |downloads_bioconductor-descan2| |docker_bioconductor-descan2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.1-1</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.1-1``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-chippeakanno: ``>=3.32.0,<3.33.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-glue: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=0.12.13``
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-descan2

   and update with::

      conda update bioconductor-descan2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-descan2:<tag>

   (see `bioconductor-descan2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-descan2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-descan2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-descan2
   :alt:   (downloads)
.. |docker_bioconductor-descan2| image:: https://quay.io/repository/biocontainers/bioconductor-descan2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-descan2
.. _`bioconductor-descan2/tags`: https://quay.io/repository/biocontainers/bioconductor-descan2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-descan2";
        var versions = ["1.18.0","1.14.1","1.14.1","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-descan2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-descan2/README.html