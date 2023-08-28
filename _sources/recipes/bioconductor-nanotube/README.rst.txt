:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanotube'
.. highlight: bash

bioconductor-nanotube
=====================

.. conda:recipe:: bioconductor-nanotube
   :replaces_section_title:
   :noindex:

   An Easy Pipeline for NanoString nCounter Data Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NanoTube.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-nanotube <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotube>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotube/meta.yaml>`_

   NanoTube includes functions for the processing\, quality control\, analysis\, and visualization of NanoString nCounter data. Analysis functions include differential analysis and gene set analysis methods\, as well as postprocessing steps to help understand the results. Additional functions are included to enable interoperability with other Bioconductor NanoString data analysis packages.


.. conda:package:: bioconductor-nanotube

   |downloads_bioconductor-nanotube| |docker_bioconductor-nanotube|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-fgsea: ``>=1.26.0,<1.27.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-reshape: 
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

      mamba install bioconductor-nanotube

   and update with::

      mamba update bioconductor-nanotube

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nanotube

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanotube:<tag>

   (see `bioconductor-nanotube/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanotube| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanotube.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanotube
   :alt:   (downloads)
.. |docker_bioconductor-nanotube| image:: https://quay.io/repository/biocontainers/bioconductor-nanotube/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanotube
.. _`bioconductor-nanotube/tags`: https://quay.io/repository/biocontainers/bioconductor-nanotube?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanotube";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanotube/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanotube/README.html