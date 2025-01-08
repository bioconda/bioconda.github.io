:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multigsea'
.. highlight: bash

bioconductor-multigsea
======================

.. conda:recipe:: bioconductor-multigsea
   :replaces_section_title:
   :noindex:

   Combining GSEA\-based pathway enrichment with multi omics data integration

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/multiGSEA.html
   :license: GPL-3
   :recipe: /`bioconductor-multigsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multigsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multigsea/meta.yaml>`_

   Extracted features from pathways derived from 8 different databases \(KEGG\, Reactome\, Biocarta\, etc.\) can be used on transcriptomic\, proteomic\, and\/or metabolomic level to calculate a combined GSEA\-based enrichment score.


.. conda:package:: bioconductor-multigsea

   |downloads_bioconductor-multigsea| |docker_bioconductor-multigsea|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends bioconductor-graphite: ``>=1.52.0,<1.53.0``
   :depends bioconductor-metaboliteidmapping: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-metap: 
   :depends r-rappdirs: 
   :depends r-rlang: 
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

      mamba install bioconductor-multigsea

   and update with::

      mamba update bioconductor-multigsea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multigsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multigsea:<tag>

   (see `bioconductor-multigsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multigsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multigsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multigsea
   :alt:   (downloads)
.. |docker_bioconductor-multigsea| image:: https://quay.io/repository/biocontainers/bioconductor-multigsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multigsea
.. _`bioconductor-multigsea/tags`: https://quay.io/repository/biocontainers/bioconductor-multigsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multigsea";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multigsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multigsea/README.html