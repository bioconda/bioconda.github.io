:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pickgene'
.. highlight: bash

bioconductor-pickgene
=====================

.. conda:recipe:: bioconductor-pickgene
   :replaces_section_title:
   :noindex:

   Adaptive Gene Picking for Microarray Expression Data Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pickgene.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pickgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pickgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pickgene/meta.yaml>`_
   :links: biotools: :biotools:`pickgene`, doi: :doi:`10.1007/0-387-21679-0_13`

   Functions to Analyze Microarray \(Gene Expression\) Data.


.. conda:package:: bioconductor-pickgene

   |downloads_bioconductor-pickgene| |docker_bioconductor-pickgene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-pickgene

   and update with::

      mamba update bioconductor-pickgene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pickgene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pickgene:<tag>

   (see `bioconductor-pickgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pickgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pickgene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pickgene
   :alt:   (downloads)
.. |docker_bioconductor-pickgene| image:: https://quay.io/repository/biocontainers/bioconductor-pickgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pickgene
.. _`bioconductor-pickgene/tags`: https://quay.io/repository/biocontainers/bioconductor-pickgene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pickgene";
        var versions = ["1.72.0","1.70.0","1.66.0","1.64.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pickgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pickgene/README.html