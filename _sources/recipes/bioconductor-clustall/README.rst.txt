:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustall'
.. highlight: bash

bioconductor-clustall
=====================

.. conda:recipe:: bioconductor-clustall
   :replaces_section_title:
   :noindex:

   ClustAll\: Data driven strategy to robustly identify stratification of patients within complex diseases

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ClustAll.html
   :license: GPL-2
   :recipe: /`bioconductor-clustall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustall/meta.yaml>`_

   Data driven strategy to find hidden groups of patients with complex diseases using clinical data. ClustAll facilitates the unsupervised identification of multiple robust stratifications. ClustAll\, is able to overcome the most common limitations found when dealing with clinical data \(missing values\, correlated data\, mixed data types\).


.. conda:package:: bioconductor-clustall

   |downloads_bioconductor-clustall| |docker_bioconductor-clustall|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bigstatsr: 
   :depends r-circlize: 
   :depends r-cluster: 
   :depends r-clvalid: 
   :depends r-dosnow: 
   :depends r-dplyr: 
   :depends r-factominer: 
   :depends r-flock: 
   :depends r-foreach: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-mice: 
   :depends r-modeest: 
   :depends r-networkd3: 
   :depends r-pbapply: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-clustall

   and update with::

      mamba update bioconductor-clustall

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clustall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clustall:<tag>

   (see `bioconductor-clustall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clustall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustall
   :alt:   (downloads)
.. |docker_bioconductor-clustall| image:: https://quay.io/repository/biocontainers/bioconductor-clustall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustall
.. _`bioconductor-clustall/tags`: https://quay.io/repository/biocontainers/bioconductor-clustall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustall";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustall/README.html