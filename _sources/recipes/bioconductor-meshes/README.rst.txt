:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meshes'
.. highlight: bash

bioconductor-meshes
===================

.. conda:recipe:: bioconductor-meshes
   :replaces_section_title:
   :noindex:

   MeSH Enrichment and Semantic analyses

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/meshes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshes/meta.yaml>`_
   :links: biotools: :biotools:`meshes`, doi: :doi:`10.1038/nmeth.3252`

   MeSH \(Medical Subject Headings\) is the NLM controlled vocabulary used to manually index articles for MEDLINE\/PubMed. MeSH terms were associated by Entrez Gene ID by three methods\, gendoo\, gene2pubmed and RBBH. This association is fundamental for enrichment and semantic analyses. meshes supports enrichment analysis \(over\-representation and gene set enrichment analysis\) of gene list or whole expression profile. The semantic comparisons of MeSH terms provide quantitative ways to compute similarities between genes and gene groups. meshes implemented five methods proposed by Resnik\, Schlicker\, Jiang\, Lin and Wang respectively and supports more than 70 species.


.. conda:package:: bioconductor-meshes

   |downloads_bioconductor-meshes| |docker_bioconductor-meshes|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-dose: ``>=3.18.0,<3.19.0``
   :depends bioconductor-enrichplot: ``>=1.12.0,<1.13.0``
   :depends bioconductor-gosemsim: ``>=2.18.0,<2.19.0``
   :depends bioconductor-mesh.db: ``>=1.15.0,<1.16.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rvcheck: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meshes

   and update with::

      conda update bioconductor-meshes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meshes:<tag>

   (see `bioconductor-meshes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meshes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meshes
   :alt:   (downloads)
.. |docker_bioconductor-meshes| image:: https://quay.io/repository/biocontainers/bioconductor-meshes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshes
.. _`bioconductor-meshes/tags`: https://quay.io/repository/biocontainers/bioconductor-meshes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meshes";
        var versions = ["1.18.0","1.16.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshes/README.html