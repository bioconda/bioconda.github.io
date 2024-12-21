:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggmanh'
.. highlight: bash

bioconductor-ggmanh
===================

.. conda:recipe:: bioconductor-ggmanh
   :replaces_section_title:
   :noindex:

   Visualization Tool for GWAS Result

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ggmanh.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ggmanh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmanh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmanh/meta.yaml>`_

   Manhattan plot and QQ Plot are commonly used to visualize the end result of Genome Wide Association Study. The \"ggmanh\" package aims to keep the generation of these plots simple while maintaining customizability. Main functions include manhattan\_plot\, qqunif\, and thinPoints.


.. conda:package:: bioconductor-ggmanh

   |downloads_bioconductor-ggmanh| |docker_bioconductor-ggmanh|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0``
   :depends bioconductor-seqarray: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-magrittr: 
   :depends r-paletteer: 
   :depends r-pals: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-tidyr: 
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

      mamba install bioconductor-ggmanh

   and update with::

      mamba update bioconductor-ggmanh

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggmanh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggmanh:<tag>

   (see `bioconductor-ggmanh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggmanh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggmanh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggmanh
   :alt:   (downloads)
.. |docker_bioconductor-ggmanh| image:: https://quay.io/repository/biocontainers/bioconductor-ggmanh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggmanh
.. _`bioconductor-ggmanh/tags`: https://quay.io/repository/biocontainers/bioconductor-ggmanh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggmanh";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggmanh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggmanh/README.html