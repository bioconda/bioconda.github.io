:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedmetagenomicdata'
.. highlight: bash

bioconductor-curatedmetagenomicdata
===================================

.. conda:recipe:: bioconductor-curatedmetagenomicdata
   :replaces_section_title:
   :noindex:

   Curated Metagenomic Data of the Human Microbiome

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/curatedMetagenomicData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-curatedmetagenomicdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedmetagenomicdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedmetagenomicdata/meta.yaml>`_

   The curatedMetagenomicData package provides standardized\, curated human microbiome data for novel analyses. It includes gene families\, marker abundance\, marker presence\, pathway abundance\, pathway coverage\, and relative abundance for samples collected from different body sites. The bacterial\, fungal\, and archaeal taxonomic abundances for each sample were calculated with MetaPhlAn3\, and metabolic functional potential was calculated with HUMAnN3. The manually curated sample metadata and standardized metagenomic data are available as \(Tree\)SummarizedExperiment objects.


.. conda:package:: bioconductor-curatedmetagenomicdata

   |downloads_bioconductor-curatedmetagenomicdata| |docker_bioconductor-curatedmetagenomicdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.0-0</code>,  <code>3.4.1-0</code>,  <code>3.2.3-0</code>,  <code>3.2.1-0</code>,  <code>3.0.1-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``3.6.0-0``,  ``3.4.1-0``,  ``3.2.3-0``,  ``3.2.1-0``,  ``3.0.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.3-0``,  ``1.10.2-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-mia: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.6.0,<2.7.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedmetagenomicdata

   and update with::

      conda update bioconductor-curatedmetagenomicdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedmetagenomicdata:<tag>

   (see `bioconductor-curatedmetagenomicdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedmetagenomicdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedmetagenomicdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedmetagenomicdata
   :alt:   (downloads)
.. |docker_bioconductor-curatedmetagenomicdata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedmetagenomicdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedmetagenomicdata
.. _`bioconductor-curatedmetagenomicdata/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedmetagenomicdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedmetagenomicdata";
        var versions = ["3.6.0","3.4.1","3.2.3","3.2.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedmetagenomicdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedmetagenomicdata/README.html