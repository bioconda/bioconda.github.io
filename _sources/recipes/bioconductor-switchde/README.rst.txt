:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-switchde'
.. highlight: bash

bioconductor-switchde
=====================

.. conda:recipe:: bioconductor-switchde
   :replaces_section_title:
   :noindex:

   Switch\-like differential expression across single\-cell trajectories

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/switchde.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-switchde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-switchde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-switchde/meta.yaml>`_
   :links: biotools: :biotools:`switchde`, doi: :doi:`10.1093/bioinformatics/btw798`

   Inference and detection of switch\-like differential expression across single\-cell RNA\-seq trajectories.


.. conda:package:: bioconductor-switchde

   |downloads_bioconductor-switchde| |docker_bioconductor-switchde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-switchde

   and update with::

      mamba update bioconductor-switchde

  To create a new environment, run::

      mamba create --name myenvname bioconductor-switchde

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-switchde:<tag>

   (see `bioconductor-switchde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-switchde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-switchde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-switchde
   :alt:   (downloads)
.. |docker_bioconductor-switchde| image:: https://quay.io/repository/biocontainers/bioconductor-switchde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-switchde
.. _`bioconductor-switchde/tags`: https://quay.io/repository/biocontainers/bioconductor-switchde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-switchde";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-switchde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-switchde/README.html