:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-easydifferentialgenecoexpression'
.. highlight: bash

r-easydifferentialgenecoexpression
==================================

.. conda:recipe:: r-easydifferentialgenecoexpression
   :replaces_section_title:
   :noindex:

   A function that reads in the GEO code of a list of probesets or gene symbols\, a gene expression dataset GEO accession code\, the name of the dataset feature discriminating the two conditions for the differential coexpression\, and the values of the two different conditions for the differential coexpression\, and returns the significant pairs of genes\/probesets with highest differential coexpression \(p\-value \< 0.005\). If the input gene list is made of gene symbols\, this package associates the probesets to these gene symbols\, if found.  Platforms available\: GPL80\, GPL8300\, GPL80\, GPL96\, GPL570\, GPL571\, GPL20115\, GPL1293\,  GPL6102\, GPL6104\, GPL6883\, GPL6884\, GPL13497\, GPL14550\, GPL17077\, GPL6480. GEO\: Gene Expression Omnibus. ID\: identifier code. The GEO datasets are downloaded from the URL \<https\:\/\/ftp.ncbi.nlm.nih.gov\/geo\/series\/\>.

   :homepage: https://github.com/davidechicco/easyDifferentialGeneCoexpression
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-easydifferentialgenecoexpression <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-easydifferentialgenecoexpression>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-easydifferentialgenecoexpression/meta.yaml>`_

   


.. conda:package:: r-easydifferentialgenecoexpression

   |downloads_r-easydifferentialgenecoexpression| |docker_r-easydifferentialgenecoexpression|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bioconductor-annotate: 
   :depends bioconductor-biobase: 
   :depends bioconductor-diffcoexp: 
   :depends bioconductor-geoquery: 
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-geneexpressionfromgeo: 
   :depends r-jetset: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :depends r-stringi: 
   :depends r-xml2: 
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

      mamba install r-easydifferentialgenecoexpression

   and update with::

      mamba update r-easydifferentialgenecoexpression

  To create a new environment, run::

      mamba create --name myenvname r-easydifferentialgenecoexpression

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-easydifferentialgenecoexpression:<tag>

   (see `r-easydifferentialgenecoexpression/tags`_ for valid values for ``<tag>``)


.. |downloads_r-easydifferentialgenecoexpression| image:: https://img.shields.io/conda/dn/bioconda/r-easydifferentialgenecoexpression.svg?style=flat
   :target: https://anaconda.org/bioconda/r-easydifferentialgenecoexpression
   :alt:   (downloads)
.. |docker_r-easydifferentialgenecoexpression| image:: https://quay.io/repository/biocontainers/r-easydifferentialgenecoexpression/status
   :target: https://quay.io/repository/biocontainers/r-easydifferentialgenecoexpression
.. _`r-easydifferentialgenecoexpression/tags`: https://quay.io/repository/biocontainers/r-easydifferentialgenecoexpression?tab=tags


.. raw:: html

    <script>
        var package = "r-easydifferentialgenecoexpression";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-easydifferentialgenecoexpression/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-easydifferentialgenecoexpression/README.html