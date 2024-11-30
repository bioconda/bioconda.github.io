:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahwikipathwaysdbs'
.. highlight: bash

bioconductor-ahwikipathwaysdbs
==============================

.. conda:recipe:: bioconductor-ahwikipathwaysdbs
   :replaces_section_title:
   :noindex:

   Metabolites linked to WikiPathways pathways \(for AnnotationHub\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/AHWikipathwaysDbs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahwikipathwaysdbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahwikipathwaysdbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahwikipathwaysdbs/meta.yaml>`_

   The package provides a comprehensive mapping table of metabolites linked to Wikipathways pathways. The tables include HMDB\, KEGG\, ChEBI\, Drugbank\, PubChem compound\, ChemSpider\, KNApSAcK\, and Wikidata IDs plus CAS and InChIKey. The tables are provided for each of the 25 species \(\"Anopheles gambiae\"\, \"Arabidopsis thaliana\"\, \"Bacillus subtilis\"\, \"Bos taurus\"\, \"Caenorhabditis elegans\"\, \"Canis familiaris\"\, \"Danio rerio\"\, \"Drosophila melanogaster\"\, \"Equus caballus\"\, \"Escherichia coli\"\, \"Gallus gallus\"\, \"Gibberella zeae\"\, \"Homo sapiens\"\, \"Hordeum vulgare\"\, \"Mus musculus\"\, \"Mycobacterium tuberculosis\"\, \"Oryza sativa\"\, \"Pan troglodytes\"\, \"Plasmodium falciparum\"\, \"Populus trichocarpa\"\, \"Rattus norvegicus\"\, \"Saccharomyces cerevisiae\"\, \"Solanum lycopersicum\"\, \"Sus scrofa\"\, \"Zea mays\"\). These table information can be used for Metabolite Set Enrichment Analysis.


.. conda:package:: bioconductor-ahwikipathwaysdbs

   |downloads_bioconductor-ahwikipathwaysdbs| |docker_bioconductor-ahwikipathwaysdbs|

   :versions:
      
      

      ``0.99.4-5``,  ``0.99.4-4``,  ``0.99.4-3``,  ``0.99.4-2``,  ``0.99.4-1``,  ``0.99.4-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ahwikipathwaysdbs

   and update with::

      mamba update bioconductor-ahwikipathwaysdbs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ahwikipathwaysdbs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.99.4","0.99.4","0.99.4","0.99.4","0.99.4"];
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