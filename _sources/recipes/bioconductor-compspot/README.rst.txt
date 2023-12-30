:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compspot'
.. highlight: bash

bioconductor-compspot
=====================

.. conda:recipe:: bioconductor-compspot
   :replaces_section_title:
   :noindex:

   compSPOT\: Tool for identifying and comparing significantly mutated genomic hotspots

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/compSPOT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-compspot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compspot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compspot/meta.yaml>`_

   Clonal cell groups share common mutations within cancer\, precancer\, and even clinically normal appearing tissues. The frequency and location of these mutations may predict prognosis and cancer risk. It has also been well established that certain genomic regions have increased sensitivity to acquiring mutations. Mutation\-sensitive genomic regions may therefore serve as markers for predicting cancer risk. This package contains multiple functions to establish significantly mutated hotspots\, compare hotspot mutation burden between samples\, and perform exploratory data analysis of the correlation between hotspot mutation burden and personal risk factors for cancer\, such as age\, gender\, and history of carcinogen exposure. This package allows users to identify robust genomic markers to help establish cancer risk.


.. conda:package:: bioconductor-compspot

   |downloads_bioconductor-compspot| |docker_bioconductor-compspot|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-plotly: 
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

      mamba install bioconductor-compspot

   and update with::

      mamba update bioconductor-compspot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-compspot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compspot:<tag>

   (see `bioconductor-compspot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compspot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compspot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compspot
   :alt:   (downloads)
.. |docker_bioconductor-compspot| image:: https://quay.io/repository/biocontainers/bioconductor-compspot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compspot
.. _`bioconductor-compspot/tags`: https://quay.io/repository/biocontainers/bioconductor-compspot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compspot";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compspot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compspot/README.html