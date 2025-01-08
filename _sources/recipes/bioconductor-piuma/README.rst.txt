:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-piuma'
.. highlight: bash

bioconductor-piuma
==================

.. conda:recipe:: bioconductor-piuma
   :replaces_section_title:
   :noindex:

   Phenotypes Identification Using Mapper from topological data Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PIUMA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-piuma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-piuma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-piuma/meta.yaml>`_

   The PIUMA package offers a tidy pipeline of Topological Data Analysis frameworks to identify and characterize communities in high and heterogeneous dimensional data.


.. conda:package:: bioconductor-piuma

   |downloads_bioconductor-piuma| |docker_bioconductor-piuma|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-dbscan: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-kernlab: 
   :depends r-patchwork: 
   :depends r-scales: 
   :depends r-tsne: 
   :depends r-umap: 
   :depends r-vegan: 
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

      mamba install bioconductor-piuma

   and update with::

      mamba update bioconductor-piuma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-piuma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-piuma:<tag>

   (see `bioconductor-piuma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-piuma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-piuma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-piuma
   :alt:   (downloads)
.. |docker_bioconductor-piuma| image:: https://quay.io/repository/biocontainers/bioconductor-piuma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-piuma
.. _`bioconductor-piuma/tags`: https://quay.io/repository/biocontainers/bioconductor-piuma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-piuma";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-piuma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-piuma/README.html