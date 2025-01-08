:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tmsig'
.. highlight: bash

bioconductor-tmsig
==================

.. conda:recipe:: bioconductor-tmsig
   :replaces_section_title:
   :noindex:

   Tools for Molecular Signatures

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TMSig.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-tmsig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmsig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmsig/meta.yaml>`_

   The TMSig package contains tools to prepare\, analyze\, and visualize named lists of sets\, with an emphasis on molecular signatures \(such as gene or kinase sets\). It includes fast\, memory efficient functions to construct sparse incidence and similarity matrices and filter\, cluster\, invert\, and decompose sets. Additionally\, bubble heatmaps can be created to visualize the results of any differential or molecular signatures analysis.


.. conda:package:: bioconductor-tmsig

   |downloads_bioconductor-tmsig| |docker_bioconductor-tmsig|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-matrix: 
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

      mamba install bioconductor-tmsig

   and update with::

      mamba update bioconductor-tmsig

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tmsig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tmsig:<tag>

   (see `bioconductor-tmsig/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tmsig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tmsig.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tmsig
   :alt:   (downloads)
.. |docker_bioconductor-tmsig| image:: https://quay.io/repository/biocontainers/bioconductor-tmsig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tmsig
.. _`bioconductor-tmsig/tags`: https://quay.io/repository/biocontainers/bioconductor-tmsig?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tmsig";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tmsig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tmsig/README.html