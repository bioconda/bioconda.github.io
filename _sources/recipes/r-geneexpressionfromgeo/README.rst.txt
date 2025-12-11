:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-geneexpressionfromgeo'
.. highlight: bash

r-geneexpressionfromgeo
=======================

.. conda:recipe:: r-geneexpressionfromgeo
   :replaces_section_title:
   :noindex:

   A function that reads in the GEO code of a gene expression dataset\, retrieves its data from GEO\, \(optionally\) retrieves the gene symbols of the dataset\, and returns a simple dataframe table containing all the data. Platforms available\: GPL11532\, GPL23126\, GPL6244\, GPL8300\, GPL80\, GPL96\, GPL570\, GPL571\, GPL20115\, GPL1293\,  GPL6102\, GPL6104\, GPL6883\, GPL6884\, GPL13497\, GPL14550\, GPL17077\, GPL6480. GEO\: Gene Expression Omnibus. ID\: identifier code. The GEO datasets are downloaded from the URL \<https\:\/\/ftp.ncbi.nlm.nih.gov\/geo\/series\/\>. More information can be found in the following manuscript\: Davide Chicco\, \"geneExpressionFromGEO\: an R package to facilitate data reading from Gene Expression Omnibus \(GEO\)\". Microarray Data Analysis\, Methods in Molecular Biology\, volume 2401\, chapter 12\, pages 187\-194\, Springer Protocols\, 2021\, \<doi\:10.1007\/978\-1\-0716\-1839\-4\_12\>.

   :homepage: https://github.com/davidechicco/geneExpressionFromGEO
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-geneexpressionfromgeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-geneexpressionfromgeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-geneexpressionfromgeo/meta.yaml>`_

   


.. conda:package:: r-geneexpressionfromgeo

   |downloads_r-geneexpressionfromgeo| |docker_r-geneexpressionfromgeo|

   :versions:
      
      

      ``1.3-0``,  ``1.2-0``,  ``0.9-3``,  ``0.9-2``,  ``0.9-1``,  ``0.9-0``

      

   
   :depends bioconductor-annotate: 
   :depends bioconductor-biobase: 
   :depends bioconductor-geoquery: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-qpdf: 
   :depends r-xml2: 
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

      mamba install r-geneexpressionfromgeo

   and update with::

      mamba update r-geneexpressionfromgeo

  To create a new environment, run::

      mamba create --name myenvname r-geneexpressionfromgeo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-geneexpressionfromgeo:<tag>

   (see `r-geneexpressionfromgeo/tags`_ for valid values for ``<tag>``)


.. |downloads_r-geneexpressionfromgeo| image:: https://img.shields.io/conda/dn/bioconda/r-geneexpressionfromgeo.svg?style=flat
   :target: https://anaconda.org/bioconda/r-geneexpressionfromgeo
   :alt:   (downloads)
.. |docker_r-geneexpressionfromgeo| image:: https://quay.io/repository/biocontainers/r-geneexpressionfromgeo/status
   :target: https://quay.io/repository/biocontainers/r-geneexpressionfromgeo
.. _`r-geneexpressionfromgeo/tags`: https://quay.io/repository/biocontainers/r-geneexpressionfromgeo?tab=tags


.. raw:: html

    <script>
        var package = "r-geneexpressionfromgeo";
        var versions = ["1.3","1.2","0.9","0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-geneexpressionfromgeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-geneexpressionfromgeo/README.html