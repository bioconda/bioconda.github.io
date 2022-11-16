:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahwikipathwaysdbs'
.. highlight: bash

bioconductor-ahwikipathwaysdbs
==============================

.. conda:recipe:: bioconductor-ahwikipathwaysdbs
   :replaces_section_title:
   :noindex:

   Metabolites linked to WikiPathways pathways \(for AnnotationHub\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/AHWikipathwaysDbs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahwikipathwaysdbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahwikipathwaysdbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahwikipathwaysdbs/meta.yaml>`_

   The package provides a comprehensive mapping table of metabolites linked to Wikipathways pathways. The tables include HMDB\, KEGG\, ChEBI\, Drugbank\, PubChem compound\, ChemSpider\, KNApSAcK\, and Wikidata IDs plus CAS and InChIKey. The tables are provided for each of the 25 species \(\"Anopheles gambiae\"\, \"Arabidopsis thaliana\"\, \"Bacillus subtilis\"\, \"Bos taurus\"\, \"Caenorhabditis elegans\"\, \"Canis familiaris\"\, \"Danio rerio\"\, \"Drosophila melanogaster\"\, \"Equus caballus\"\, \"Escherichia coli\"\, \"Gallus gallus\"\, \"Gibberella zeae\"\, \"Homo sapiens\"\, \"Hordeum vulgare\"\, \"Mus musculus\"\, \"Mycobacterium tuberculosis\"\, \"Oryza sativa\"\, \"Pan troglodytes\"\, \"Plasmodium falciparum\"\, \"Populus trichocarpa\"\, \"Rattus norvegicus\"\, \"Saccharomyces cerevisiae\"\, \"Solanum lycopersicum\"\, \"Sus scrofa\"\, \"Zea mays\"\). These table information can be used for Metabolite Set Enrichment Analysis.


.. conda:package:: bioconductor-ahwikipathwaysdbs

   |downloads_bioconductor-ahwikipathwaysdbs| |docker_bioconductor-ahwikipathwaysdbs|

   :versions:
      
      

      ``0.99.4-3``,  ``0.99.4-2``,  ``0.99.4-1``,  ``0.99.4-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ahwikipathwaysdbs

   and update with::

      conda update bioconductor-ahwikipathwaysdbs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ahwikipathwaysdbs:<tag>

   (see `bioconductor-ahwikipathwaysdbs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ahwikipathwaysdbs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ahwikipathwaysdbs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ahwikipathwaysdbs
   :alt:   (downloads)
.. |docker_bioconductor-ahwikipathwaysdbs| image:: https://quay.io/repository/biocontainers/bioconductor-ahwikipathwaysdbs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ahwikipathwaysdbs
.. _`bioconductor-ahwikipathwaysdbs/tags`: https://quay.io/repository/biocontainers/bioconductor-ahwikipathwaysdbs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ahwikipathwaysdbs";
        var versions = ["0.99.4","0.99.4","0.99.4","0.99.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ahwikipathwaysdbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ahwikipathwaysdbs/README.html