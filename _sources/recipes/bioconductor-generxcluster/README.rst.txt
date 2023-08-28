:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-generxcluster'
.. highlight: bash

bioconductor-generxcluster
==========================

.. conda:recipe:: bioconductor-generxcluster
   :replaces_section_title:
   :noindex:

   gRx Differential Clustering

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/geneRxCluster.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-generxcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generxcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generxcluster/meta.yaml>`_
   :links: biotools: :biotools:`generxcluster`

   Detect Differential Clustering of Genomic Sites such as gene therapy integrations.  The package provides some functions for exploring genomic insertion sites originating from two different sources. Possibly\, the two sources are two different gene therapy vectors.  Vectors are preferred that target sensitive regions less frequently\, motivating the search for localized clusters of insertions and comparison of the clusters formed by integration of different vectors.  Scan statistics allow the discovery of spatial differences in clustering and calculation of False Discovery Rates \(FDRs\) providing statistical methods for comparing retroviral vectors. A scan statistic for comparing two vectors using multiple window widths to detect clustering differentials and compute FDRs is implemented here.


.. conda:package:: bioconductor-generxcluster

   |downloads_bioconductor-generxcluster| |docker_bioconductor-generxcluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-generxcluster

   and update with::

      mamba update bioconductor-generxcluster

  To create a new environment, run::

      mamba create --name myenvname bioconductor-generxcluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-generxcluster:<tag>

   (see `bioconductor-generxcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-generxcluster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-generxcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-generxcluster
   :alt:   (downloads)
.. |docker_bioconductor-generxcluster| image:: https://quay.io/repository/biocontainers/bioconductor-generxcluster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-generxcluster
.. _`bioconductor-generxcluster/tags`: https://quay.io/repository/biocontainers/bioconductor-generxcluster?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-generxcluster";
        var versions = ["1.36.0","1.34.0","1.34.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-generxcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-generxcluster/README.html