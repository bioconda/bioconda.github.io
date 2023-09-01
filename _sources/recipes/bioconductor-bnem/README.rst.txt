:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bnem'
.. highlight: bash

bioconductor-bnem
=================

.. conda:recipe:: bioconductor-bnem
   :replaces_section_title:
   :noindex:

   Training of logical models from indirect measurements of perturbation experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/bnem.html
   :license: GPL-3
   :recipe: /`bioconductor-bnem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnem/meta.yaml>`_

   bnem combines the use of indirect measurements of Nested Effects Models \(package mnem\) with the Boolean networks of CellNOptR. Perturbation experiments of signalling nodes in cells are analysed for their effect on the global gene expression profile. Those profiles give evidence for the Boolean regulation of down\-stream nodes in the network\, e.g.\, whether two parents activate their child independently \(OR\-gate\) or jointly \(AND\-gate\).


.. conda:package:: bioconductor-bnem

   |downloads_bioconductor-bnem| |docker_bioconductor-bnem|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-cellnoptr: ``>=1.46.0,<1.47.0``
   :depends bioconductor-epinem: ``>=1.24.0,<1.25.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-mnem: ``>=1.16.0,<1.17.0``
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends bioconductor-vsn: ``>=3.68.0,<3.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-binom: 
   :depends r-cluster: 
   :depends r-flexclust: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-rmarkdown: 
   :depends r-snowfall: 
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

      mamba install bioconductor-bnem

   and update with::

      mamba update bioconductor-bnem

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bnem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bnem:<tag>

   (see `bioconductor-bnem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bnem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bnem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bnem
   :alt:   (downloads)
.. |docker_bioconductor-bnem| image:: https://quay.io/repository/biocontainers/bioconductor-bnem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bnem
.. _`bioconductor-bnem/tags`: https://quay.io/repository/biocontainers/bioconductor-bnem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bnem";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bnem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bnem/README.html