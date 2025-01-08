:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichdo'
.. highlight: bash

bioconductor-enrichdo
=====================

.. conda:recipe:: bioconductor-enrichdo
   :replaces_section_title:
   :noindex:

   a Global Weighted Model for Disease Ontology Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EnrichDO.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-enrichdo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichdo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichdo/meta.yaml>`_

   To implement disease ontology \(DO\) enrichment analysis\, this package is designed and presents a double weighted model based on the latest annotations of the human genome with DO terms\, by integrating the DO graph topology on a global scale. This package exhibits high accuracy that it can identify more specific DO terms\, which alleviates the over enriched problem. The package includes various statistical models and visualization schemes for discovering the associations between genes and diseases from biological big data.


.. conda:package:: bioconductor-enrichdo

   |downloads_bioconductor-enrichdo| |docker_bioconductor-enrichdo|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hash: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-enrichdo

   and update with::

      mamba update bioconductor-enrichdo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-enrichdo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enrichdo:<tag>

   (see `bioconductor-enrichdo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enrichdo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichdo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enrichdo
   :alt:   (downloads)
.. |docker_bioconductor-enrichdo| image:: https://quay.io/repository/biocontainers/bioconductor-enrichdo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichdo
.. _`bioconductor-enrichdo/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichdo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enrichdo";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichdo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichdo/README.html