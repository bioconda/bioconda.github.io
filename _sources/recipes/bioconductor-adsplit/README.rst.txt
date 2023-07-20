:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adsplit'
.. highlight: bash

bioconductor-adsplit
====================

.. conda:recipe:: bioconductor-adsplit
   :replaces_section_title:
   :noindex:

   Annotation\-Driven Clustering

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/adSplit.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adsplit/meta.yaml>`_

   This package implements clustering of microarray gene expression profiles according to functional annotations. For each term genes are annotated to\, splits into two subclasses are computed and a significance of the supporting gene set is determined.


.. conda:package:: bioconductor-adsplit

   |downloads_bioconductor-adsplit| |docker_bioconductor-adsplit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-keggrest: ``>=1.40.0,<1.41.0``
   :depends bioconductor-multtest: ``>=2.56.0,<2.57.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: ``>=1.9.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adsplit

   and update with::

      conda update bioconductor-adsplit

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adsplit:<tag>

   (see `bioconductor-adsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adsplit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adsplit
   :alt:   (downloads)
.. |docker_bioconductor-adsplit| image:: https://quay.io/repository/biocontainers/bioconductor-adsplit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adsplit
.. _`bioconductor-adsplit/tags`: https://quay.io/repository/biocontainers/bioconductor-adsplit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adsplit";
        var versions = ["1.70.0","1.68.0","1.68.0","1.64.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adsplit/README.html