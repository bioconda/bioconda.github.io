:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coregx'
.. highlight: bash

bioconductor-coregx
===================

.. conda:recipe:: bioconductor-coregx
   :replaces_section_title:
   :noindex:

   Classes and Functions to Serve as the Basis for Other \'Gx\' Packages

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CoreGx.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-coregx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregx/meta.yaml>`_

   A collection of functions and classes which serve as the foundation for our lab\'s suite of R packages\, such as \'PharmacoGx\' and \'RadioGx\'. This package was created to abstract shared functionality from other lab package releases to increase ease of maintainability and reduce code repetition in current and future \'Gx\' suite programs. Major features include a \'CoreSet\' class\, from which \'RadioSet\' and \'PharmacoSet\' are derived\, along with get and set methods for each respective slot. Additional functions related to fitting and plotting dose response curves\, quantifying statistical correlation and calculating area under the curve \(AUC\) or survival fraction \(SF\) are included. For more details please see the included documentation\, as well as\: Smirnov\, P.\, Safikhani\, Z.\, El\-Hachem\, N.\, Wang\, D.\, She\, A.\, Olsen\, C.\, Freeman\, M.\, Selby\, H.\, Gendoo\, D.\, Grossman\, P.\, Beck\, A.\, Aerts\, H.\, Lupien\, M.\, Goldenberg\, A. \(2015\) \<doi\:10.1093\/bioinformatics\/btv723\>. Manem\, V.\, Labie\, M.\, Smirnov\, P.\, Kofia\, V.\, Freeman\, M.\, Koritzinksy\, M.\, Abazeed\, M.\, Haibe\-Kains\, B.\, Bratman\, S. \(2018\) \<doi\:10.1101\/449793\>.


.. conda:package:: bioconductor-coregx

   |downloads_bioconductor-coregx| |docker_bioconductor-coregx|

   :versions:
      
      

      ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-bumpymatrix: ``>=1.14.0,<1.15.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-piano: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bench: 
   :depends r-checkmate: 
   :depends r-crayon: 
   :depends r-data.table: 
   :depends r-glue: 
   :depends r-lsa: 
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

      mamba install bioconductor-coregx

   and update with::

      mamba update bioconductor-coregx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-coregx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coregx:<tag>

   (see `bioconductor-coregx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coregx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coregx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coregx
   :alt:   (downloads)
.. |docker_bioconductor-coregx| image:: https://quay.io/repository/biocontainers/bioconductor-coregx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coregx
.. _`bioconductor-coregx/tags`: https://quay.io/repository/biocontainers/bioconductor-coregx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-coregx";
        var versions = ["2.10.0","2.6.0","2.4.0","2.2.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coregx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coregx/README.html