:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-padma'
.. highlight: bash

bioconductor-padma
==================

.. conda:recipe:: bioconductor-padma
   :replaces_section_title:
   :noindex:

   Individualized Multi\-Omic Pathway Deviation Scores Using Multiple Factor Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/padma.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-padma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-padma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-padma/meta.yaml>`_

   Use multiple factor analysis to calculate individualized pathway\-centric scores of deviation with respect to the sampled population based on multi\-omic assays \(e.g.\, RNA\-seq\, copy number alterations\, methylation\, etc\). Graphical and numerical outputs are provided to identify highly aberrant individuals for a particular pathway of interest\, as well as the gene and omics drivers of aberrant multi\-omic profiles.


.. conda:package:: bioconductor-padma

   |downloads_bioconductor-padma| |docker_bioconductor-padma|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-factominer: 
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

      mamba install bioconductor-padma

   and update with::

      mamba update bioconductor-padma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-padma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-padma:<tag>

   (see `bioconductor-padma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-padma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-padma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-padma
   :alt:   (downloads)
.. |docker_bioconductor-padma| image:: https://quay.io/repository/biocontainers/bioconductor-padma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-padma
.. _`bioconductor-padma/tags`: https://quay.io/repository/biocontainers/bioconductor-padma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-padma";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-padma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-padma/README.html