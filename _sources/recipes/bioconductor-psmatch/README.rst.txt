:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-psmatch'
.. highlight: bash

bioconductor-psmatch
====================

.. conda:recipe:: bioconductor-psmatch
   :replaces_section_title:
   :noindex:

   Handling and Managing Peptide Spectrum Matches

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PSMatch.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-psmatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psmatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psmatch/meta.yaml>`_

   The PSMatch package helps proteomics practitioners to load\, handle and manage Peptide Spectrum Matches. It provides functions to model peptide\-protein relations as adjacency matrices and connected components\, visualise these as graphs and make informed decision about shared peptide filtering. The package also provides functions to calculate and visualise MS2 fragment ions.


.. conda:package:: bioconductor-psmatch

   |downloads_bioconductor-psmatch| |docker_bioconductor-psmatch|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-mscoreutils: ``>=1.12.0,<1.13.0``
   :depends bioconductor-protgenerics: ``>=1.32.0,<1.33.0``
   :depends bioconductor-qfeatures: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-psmatch

   and update with::

      mamba update bioconductor-psmatch

  To create a new environment, run::

      mamba create --name myenvname bioconductor-psmatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-psmatch:<tag>

   (see `bioconductor-psmatch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-psmatch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-psmatch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-psmatch
   :alt:   (downloads)
.. |docker_bioconductor-psmatch| image:: https://quay.io/repository/biocontainers/bioconductor-psmatch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-psmatch
.. _`bioconductor-psmatch/tags`: https://quay.io/repository/biocontainers/bioconductor-psmatch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-psmatch";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-psmatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-psmatch/README.html