:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msfeatures'
.. highlight: bash

bioconductor-msfeatures
=======================

.. conda:recipe:: bioconductor-msfeatures
   :replaces_section_title:
   :noindex:

   Functionality for Mass Spectrometry Features

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsFeatures.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msfeatures/meta.yaml>`_

   The MsFeature package defines functionality for Mass Spectrometry features. This includes functions to group \(LC\-MS\) features based on some of their properties\, such as retention time \(coeluting features\)\, or correlation of signals across samples. This packge hence allows to group features\, and its results can be used as an input for the \`QFeatures\` package which allows to aggregate abundance levels of features within each group. This package defines concepts and functions for base and common data types\, implementations for more specific data types are expected to be implemented in the respective packages \(such as e.g. \`xcms\`\). All functionality of this package is implemented in a modular way which allows combination of different grouping approaches and enables its re\-use in other R packages.


.. conda:package:: bioconductor-msfeatures

   |downloads_bioconductor-msfeatures| |docker_bioconductor-msfeatures|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-mscoreutils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-protgenerics: ``>=1.38.0,<1.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-msfeatures

   and update with::

      mamba update bioconductor-msfeatures

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msfeatures

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msfeatures:<tag>

   (see `bioconductor-msfeatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msfeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msfeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msfeatures
   :alt:   (downloads)
.. |docker_bioconductor-msfeatures| image:: https://quay.io/repository/biocontainers/bioconductor-msfeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msfeatures
.. _`bioconductor-msfeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-msfeatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msfeatures";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msfeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msfeatures/README.html