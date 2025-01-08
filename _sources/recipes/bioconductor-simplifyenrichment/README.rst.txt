:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simplifyenrichment'
.. highlight: bash

bioconductor-simplifyenrichment
===============================

.. conda:recipe:: bioconductor-simplifyenrichment
   :replaces_section_title:
   :noindex:

   Simplify Functional Enrichment Results

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/simplifyEnrichment.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-simplifyenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simplifyenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simplifyenrichment/meta.yaml>`_

   A new clustering algorithm\, \"binary cut\"\, for clustering similarity matrices of functional terms is implemeted in this package. It also provides functions for visualizing\, summarizing and comparing the clusterings.


.. conda:package:: bioconductor-simplifyenrichment

   |downloads_bioconductor-simplifyenrichment| |docker_bioconductor-simplifyenrichment|

   :versions:
      
      

      ``2.0.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-simona: ``>=1.4.0,<1.5.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-clue: 
   :depends r-cluster: ``>=1.14.2``
   :depends r-colorspace: 
   :depends r-digest: 
   :depends r-getoptlong: 
   :depends r-globaloptions: ``>=0.1.0``
   :depends r-slam: 
   :depends r-tm: 
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

      mamba install bioconductor-simplifyenrichment

   and update with::

      mamba update bioconductor-simplifyenrichment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-simplifyenrichment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simplifyenrichment:<tag>

   (see `bioconductor-simplifyenrichment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simplifyenrichment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simplifyenrichment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simplifyenrichment
   :alt:   (downloads)
.. |docker_bioconductor-simplifyenrichment| image:: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment
.. _`bioconductor-simplifyenrichment/tags`: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simplifyenrichment";
        var versions = ["2.0.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simplifyenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simplifyenrichment/README.html