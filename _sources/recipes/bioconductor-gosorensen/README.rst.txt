:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosorensen'
.. highlight: bash

bioconductor-gosorensen
=======================

.. conda:recipe:: bioconductor-gosorensen
   :replaces_section_title:
   :noindex:

   Statistical inference based on the Sorensen\-Dice dissimilarity and the Gene Ontology \(GO\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/goSorensen.html
   :license: GPL-3
   :recipe: /`bioconductor-gosorensen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosorensen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosorensen/meta.yaml>`_

   This package implements inferential methods to compare gene lists \(in this first release\, to prove equivalence\) in terms of their biological meaning as expressed in the GO. The compared gene lists are characterized by cross\-tabulation frequency tables of enriched GO items. Dissimilarity between gene lists is evaluated using the Sorensen\-Dice index. The fundamental guiding principle is that two gene lists are taken as similar if they share a great proportion of common enriched GO items.


.. conda:package:: bioconductor-gosorensen

   |downloads_bioconductor-gosorensen| |docker_bioconductor-gosorensen|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-goprofiles: ``>=1.64.0,<1.65.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-stringr: 
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

      mamba install bioconductor-gosorensen

   and update with::

      mamba update bioconductor-gosorensen

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gosorensen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gosorensen:<tag>

   (see `bioconductor-gosorensen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gosorensen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosorensen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosorensen
   :alt:   (downloads)
.. |docker_bioconductor-gosorensen| image:: https://quay.io/repository/biocontainers/bioconductor-gosorensen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosorensen
.. _`bioconductor-gosorensen/tags`: https://quay.io/repository/biocontainers/bioconductor-gosorensen?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gosorensen";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosorensen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosorensen/README.html