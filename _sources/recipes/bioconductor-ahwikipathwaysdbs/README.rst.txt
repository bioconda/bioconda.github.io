:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahwikipathwaysdbs'
.. highlight: bash

bioconductor-ahwikipathwaysdbs
==============================

.. conda:recipe:: bioconductor-ahwikipathwaysdbs
   :replaces_section_title:
   :noindex:

   Metabolites linked to WikiPathways pathways \(for AnnotationHub\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/AHWikipathwaysDbs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahwikipathwaysdbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahwikipathwaysdbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahwikipathwaysdbs/meta.yaml>`_

   The package provides a comprehensive mapping table of metabolites linked to Wikipathways pathways. The tables include HMDB\, KEGG\, ChEBI\, Drugbank\, PubChem compound\, ChemSpider\, KNApSAcK\, and Wikidata IDs plus CAS and InChIKey. The tables are provided for each of the 25 species \(\"Anopheles gambiae\"\, \"Arabidopsis thaliana\"\, \"Bacillus subtilis\"\, \"Bos taurus\"\, \"Caenorhabditis elegans\"\, \"Canis familiaris\"\, \"Danio rerio\"\, \"Drosophila melanogaster\"\, \"Equus caballus\"\, \"Escherichia coli\"\, \"Gallus gallus\"\, \"Gibberella zeae\"\, \"Homo sapiens\"\, \"Hordeum vulgare\"\, \"Mus musculus\"\, \"Mycobacterium tuberculosis\"\, \"Oryza sativa\"\, \"Pan troglodytes\"\, \"Plasmodium falciparum\"\, \"Populus trichocarpa\"\, \"Rattus norvegicus\"\, \"Saccharomyces cerevisiae\"\, \"Solanum lycopersicum\"\, \"Sus scrofa\"\, \"Zea mays\"\). These table information can be used for Metabolite Set Enrichment Analysis.


.. conda:package:: bioconductor-ahwikipathwaysdbs

   |downloads_bioconductor-ahwikipathwaysdbs| |docker_bioconductor-ahwikipathwaysdbs|

   :versions:
      
      

      ``0.99.4-7``,  ``0.99.4-6``,  ``0.99.4-5``,  ``0.99.4-4``,  ``0.99.4-3``,  ``0.99.4-2``,  ``0.99.4-1``,  ``0.99.4-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-ahwikipathwaysdbs

to add into an existing workspace instead, run::

    pixi add bioconductor-ahwikipathwaysdbs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ahwikipathwaysdbs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ahwikipathwaysdbs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ahwikipathwaysdbs:<tag>

(see `bioconductor-ahwikipathwaysdbs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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