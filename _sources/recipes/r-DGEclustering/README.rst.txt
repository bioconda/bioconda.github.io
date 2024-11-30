:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dgeclustering'
.. highlight: bash

r-dgeclustering
===============

.. conda:recipe:: r-DGEclustering
   :replaces_section_title:
   :noindex:

   DGEclustering is an R package for multidimensional clustering of differential gene expression datasets\, and it integrates GO annotations to improve the clustering result.

   :homepage: https://github.com/reneechou123/DGEclustering
   :license: MIT
   :recipe: /`r-DGEclustering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-DGEclustering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-DGEclustering/meta.yaml>`_

   


.. conda:package:: r-dgeclustering

   |downloads_r-dgeclustering| |docker_r-dgeclustering|

   :versions:
      
      

      ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-clusterprofiler: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-gosemsim: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-factominer: 
   :depends r-ggplot2: 
   :depends r-intego: 
   :depends r-reshape2: 
   :depends r-rlist: 
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

      mamba install r-dgeclustering

   and update with::

      mamba update r-dgeclustering

  To create a new environment, run::

      mamba create --name myenvname r-dgeclustering

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-dgeclustering:<tag>

   (see `r-dgeclustering/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dgeclustering| image:: https://img.shields.io/conda/dn/bioconda/r-dgeclustering.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dgeclustering
   :alt:   (downloads)
.. |docker_r-dgeclustering| image:: https://quay.io/repository/biocontainers/r-dgeclustering/status
   :target: https://quay.io/repository/biocontainers/r-dgeclustering
.. _`r-dgeclustering/tags`: https://quay.io/repository/biocontainers/r-dgeclustering?tab=tags


.. raw:: html

    <script>
        var package = "r-dgeclustering";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dgeclustering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dgeclustering/README.html