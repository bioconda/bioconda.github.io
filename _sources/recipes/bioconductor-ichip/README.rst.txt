:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ichip'
.. highlight: bash

bioconductor-ichip
==================

.. conda:recipe:: bioconductor-ichip
   :replaces_section_title:
   :noindex:

   Bayesian Modeling of ChIP\-chip Data Through Hidden Ising Models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iChip.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ichip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ichip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ichip/meta.yaml>`_
   :links: biotools: :biotools:`ichip`, doi: :doi:`10.1093/bioinformatics/btq032`

   Hidden Ising models are implemented to identify enriched genomic regions in ChIP\-chip data.  They can be used to analyze the data from multiple platforms \(e.g.\, Affymetrix\, Agilent\, and NimbleGen\)\, and the data with single to multiple replicates.


.. conda:package:: bioconductor-ichip

   |downloads_bioconductor-ichip| |docker_bioconductor-ichip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-ichip

   and update with::

      mamba update bioconductor-ichip

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ichip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ichip:<tag>

   (see `bioconductor-ichip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ichip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ichip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ichip
   :alt:   (downloads)
.. |docker_bioconductor-ichip| image:: https://quay.io/repository/biocontainers/bioconductor-ichip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ichip
.. _`bioconductor-ichip/tags`: https://quay.io/repository/biocontainers/bioconductor-ichip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ichip";
        var versions = ["1.56.0","1.54.0","1.52.0","1.52.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ichip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ichip/README.html