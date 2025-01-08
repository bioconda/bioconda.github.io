:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smartid'
.. highlight: bash

bioconductor-smartid
====================

.. conda:recipe:: bioconductor-smartid
   :replaces_section_title:
   :noindex:

   Scoring and Marker Selection Method Based on Modified TF\-IDF

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/smartid.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-smartid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smartid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smartid/meta.yaml>`_

   This package enables automated selection of group specific signature\, especially for rare population. The package is developed for generating specifc lists of signature genes based on Term Frequency\-Inverse Document Frequency \(TF\-IDF\) modified methods. It can also be used as a new gene\-set scoring method or data transformation method. Multiple visualization functions are implemented in this package.


.. conda:package:: bioconductor-smartid

   |downloads_bioconductor-smartid| |docker_bioconductor-smartid|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-sparsematrixstats: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-mixtools: 
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

      mamba install bioconductor-smartid

   and update with::

      mamba update bioconductor-smartid

  To create a new environment, run::

      mamba create --name myenvname bioconductor-smartid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-smartid:<tag>

   (see `bioconductor-smartid/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-smartid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smartid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smartid
   :alt:   (downloads)
.. |docker_bioconductor-smartid| image:: https://quay.io/repository/biocontainers/bioconductor-smartid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smartid
.. _`bioconductor-smartid/tags`: https://quay.io/repository/biocontainers/bioconductor-smartid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smartid";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smartid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smartid/README.html