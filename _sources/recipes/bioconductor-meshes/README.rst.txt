.. title:: Package Recipe 'bioconductor-meshes'
.. highlight: bash


bioconductor-meshes
===================

.. conda:recipe:: bioconductor-meshes
   :replaces_section_title:

   MeSH \(Medical Subject Headings\) is the NLM controlled vocabulary used to manually index articles for MEDLINE\/PubMed. MeSH terms were associated by Entrez Gene ID by three methods\, gendoo\, gene2pubmed and RBBH. This association is fundamental for enrichment and semantic analyses. meshes supports enrichment analysis \(over\-representation and gene set enrichment analysis\) of gene list or whole expression profile. The semantic comparisons of MeSH terms provide quantitative ways to compute similarities between genes and gene groups. meshes implemented five methods proposed by Resnik\, Schlicker\, Jiang\, Lin and Wang respectively and supports more than 70 species.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/meshes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshes/meta.yaml>`_
   :links: biotools: :biotools:`meshes`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-meshes

   |downloads_bioconductor-meshes| |docker_bioconductor-meshes|

   :versions: 1.8.0, 1.6.1, 1.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-enrichplot` >=1.2.0,<1.3.0 :conda:package:`bioconductor-gosemsim` >=2.8.0,<2.9.0 :conda:package:`bioconductor-mesh.db` >=1.11.0,<1.12.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rvcheck`  

   :required~by: |required_by_bioconductor-meshes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meshes

   and update with::

      conda update bioconductor-meshes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-meshes


.. |required_by_bioconductor-meshes| conda:required_by:: bioconductor-meshes
.. |downloads_bioconductor-meshes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshes.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-meshes| image:: https://quay.io/repository/biocontainers/bioconductor-meshes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshes/README.html

