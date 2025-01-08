:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogsa'
.. highlight: bash

bioconductor-mogsa
==================

.. conda:recipe:: bioconductor-mogsa
   :replaces_section_title:
   :noindex:

   Multiple omics data integrative clustering and gene set analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mogsa.html
   :license: GPL-2
   :recipe: /`bioconductor-mogsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogsa/meta.yaml>`_

   This package provide a method for doing gene set analysis based on multiple omics data.


.. conda:package:: bioconductor-mogsa

   |downloads_bioconductor-mogsa| |docker_bioconductor-mogsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.21.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genefilter: ``>=1.88.0,<1.89.0``
   :depends bioconductor-graphite: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-corpcor: 
   :depends r-gplots: 
   :depends r-svd: 
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

      mamba install bioconductor-mogsa

   and update with::

      mamba update bioconductor-mogsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mogsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mogsa:<tag>

   (see `bioconductor-mogsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mogsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogsa
   :alt:   (downloads)
.. |docker_bioconductor-mogsa| image:: https://quay.io/repository/biocontainers/bioconductor-mogsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogsa
.. _`bioconductor-mogsa/tags`: https://quay.io/repository/biocontainers/bioconductor-mogsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mogsa";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogsa/README.html