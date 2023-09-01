:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahpathbankdbs'
.. highlight: bash

bioconductor-ahpathbankdbs
==========================

.. conda:recipe:: bioconductor-ahpathbankdbs
   :replaces_section_title:
   :noindex:

   Metabolites and proteins linked to PathBank pathways \(for AnnotationHub\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/AHPathbankDbs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahpathbankdbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahpathbankdbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahpathbankdbs/meta.yaml>`_

   The package provides a comprehensive mapping table of metabolites and proteins linked to PathBank pathways. The tables include HMDB\, KEGG\, ChEBI\, CAS\, Drugbank\, Uniprot IDs. The tables are provided for each of the 10 species \(\"Homo sapiens\"\, \"Escherichia coli\"\, \"Mus musculus\"\, \"Arabidopsis thaliana\"\, \"Saccharomyces cerevisiae\"\, \"Bos taurus\"\, \"Caenorhabditis elegans\"\, \"Rattus norvegicus\"\, \"Drosophila melanogaster\"\, and \"Pseudomonas aeruginosa\"\). These table information can be used for Metabolite Set \(and other\) Enrichment Analysis.


.. conda:package:: bioconductor-ahpathbankdbs

   |downloads_bioconductor-ahpathbankdbs| |docker_bioconductor-ahpathbankdbs|

   :versions:
      
      

      ``0.99.5-4``,  ``0.99.5-3``,  ``0.99.5-2``,  ``0.99.5-1``,  ``0.99.5-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ahpathbankdbs

   and update with::

      mamba update bioconductor-ahpathbankdbs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ahpathbankdbs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ahpathbankdbs:<tag>

   (see `bioconductor-ahpathbankdbs/tags`_ for valid values for ``<tag>``)


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