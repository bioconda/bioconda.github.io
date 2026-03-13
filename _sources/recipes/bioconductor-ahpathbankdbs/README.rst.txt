:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahpathbankdbs'
.. highlight: bash

bioconductor-ahpathbankdbs
==========================

.. conda:recipe:: bioconductor-ahpathbankdbs
   :replaces_section_title:
   :noindex:

   Metabolites and proteins linked to PathBank pathways \(for AnnotationHub\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/AHPathbankDbs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahpathbankdbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahpathbankdbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahpathbankdbs/meta.yaml>`_

   The package provides a comprehensive mapping table of metabolites and proteins linked to PathBank pathways. The tables include HMDB\, KEGG\, ChEBI\, CAS\, Drugbank\, Uniprot IDs. The tables are provided for each of the 10 species \(\"Homo sapiens\"\, \"Escherichia coli\"\, \"Mus musculus\"\, \"Arabidopsis thaliana\"\, \"Saccharomyces cerevisiae\"\, \"Bos taurus\"\, \"Caenorhabditis elegans\"\, \"Rattus norvegicus\"\, \"Drosophila melanogaster\"\, and \"Pseudomonas aeruginosa\"\). These table information can be used for Metabolite Set \(and other\) Enrichment Analysis.


.. conda:package:: bioconductor-ahpathbankdbs

   |downloads_bioconductor-ahpathbankdbs| |docker_bioconductor-ahpathbankdbs|

   :versions:
      
      

      ``0.99.5-7``,  ``0.99.5-6``,  ``0.99.5-5``,  ``0.99.5-4``,  ``0.99.5-3``,  ``0.99.5-2``,  ``0.99.5-1``,  ``0.99.5-0``

      

   
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

    pixi global install bioconductor-ahpathbankdbs

to add into an existing workspace instead, run::

    pixi add bioconductor-ahpathbankdbs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ahpathbankdbs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ahpathbankdbs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ahpathbankdbs:<tag>

(see `bioconductor-ahpathbankdbs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ahpathbankdbs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ahpathbankdbs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ahpathbankdbs
   :alt:   (downloads)
.. |docker_bioconductor-ahpathbankdbs| image:: https://quay.io/repository/biocontainers/bioconductor-ahpathbankdbs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ahpathbankdbs
.. _`bioconductor-ahpathbankdbs/tags`: https://quay.io/repository/biocontainers/bioconductor-ahpathbankdbs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ahpathbankdbs";
        var versions = ["0.99.5","0.99.5","0.99.5","0.99.5","0.99.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ahpathbankdbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ahpathbankdbs/README.html