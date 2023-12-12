:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geotcgadata'
.. highlight: bash

bioconductor-geotcgadata
========================

.. conda:recipe:: bioconductor-geotcgadata
   :replaces_section_title:
   :noindex:

   Processing Various Types of Data on GEO and TCGA

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GeoTcgaData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geotcgadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geotcgadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geotcgadata/meta.yaml>`_

   Gene Expression Omnibus\(GEO\) and The Cancer Genome Atlas \(TCGA\) provide us with a wealth of data\, such as RNA\-seq\, DNA Methylation\, SNP and Copy number variation data. It\'s easy to download data from TCGA using the gdc tool\, but processing these data into a format suitable for bioinformatics analysis requires more work. This R package was developed to handle these data.


.. conda:package:: bioconductor-geotcgadata

   |downloads_bioconductor-geotcgadata| |docker_bioconductor-geotcgadata|

   :versions:
      
      

      ``2.2.0-0``,  ``2.0.0-0``

      

   
   :depends bioconductor-cqn: ``>=1.48.0,<1.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-topconfects: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-plyr: 
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

      mamba install bioconductor-geotcgadata

   and update with::

      mamba update bioconductor-geotcgadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geotcgadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geotcgadata:<tag>

   (see `bioconductor-geotcgadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geotcgadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geotcgadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geotcgadata
   :alt:   (downloads)
.. |docker_bioconductor-geotcgadata| image:: https://quay.io/repository/biocontainers/bioconductor-geotcgadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geotcgadata
.. _`bioconductor-geotcgadata/tags`: https://quay.io/repository/biocontainers/bioconductor-geotcgadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geotcgadata";
        var versions = ["2.2.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geotcgadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geotcgadata/README.html