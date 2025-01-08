:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msigdb'
.. highlight: bash

bioconductor-msigdb
===================

.. conda:recipe:: bioconductor-msigdb
   :replaces_section_title:
   :noindex:

   An ExperimentHub Package for the Molecular Signatures Database \(MSigDB\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/msigdb.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-msigdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msigdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msigdb/meta.yaml>`_

   This package provides the Molecular Signatures Database \(MSigDB\) in a R accessible objects. Signatures are stored in GeneSet class objects form the GSEABase package and the entire database is stored in a GeneSetCollection object. These data are then hosted on the ExperimentHub. Data used in this package was obtained from the MSigDB of the Broad Institute. Metadata for each gene set is stored along with the gene set in the GeneSet class object.


.. conda:package:: bioconductor-msigdb

   |downloads_bioconductor-msigdb| |docker_bioconductor-msigdb|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241231``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.20.0,<3.21.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-msigdb

   and update with::

      mamba update bioconductor-msigdb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msigdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msigdb:<tag>

   (see `bioconductor-msigdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msigdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msigdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msigdb
   :alt:   (downloads)
.. |docker_bioconductor-msigdb| image:: https://quay.io/repository/biocontainers/bioconductor-msigdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msigdb
.. _`bioconductor-msigdb/tags`: https://quay.io/repository/biocontainers/bioconductor-msigdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msigdb";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msigdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msigdb/README.html