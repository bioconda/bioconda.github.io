:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipexoqual'
.. highlight: bash

bioconductor-chipexoqual
========================

.. conda:recipe:: bioconductor-chipexoqual
   :replaces_section_title:
   :noindex:

   ChIPexoQual

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ChIPexoQual.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-chipexoqual <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipexoqual>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipexoqual/meta.yaml>`_

   Package with a quality control pipeline for ChIP\-exo\/nexus data.


.. conda:package:: bioconductor-chipexoqual

   |downloads_bioconductor-chipexoqual| |docker_bioconductor-chipexoqual|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biovizbase: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-broom: ``>=0.4``
   :depends r-data.table: ``>=1.9.6``
   :depends r-dplyr: ``>=0.5``
   :depends r-ggplot2: ``>=1.0``
   :depends r-hexbin: ``>=1.27``
   :depends r-rcolorbrewer: ``>=1.1``
   :depends r-rmarkdown: 
   :depends r-scales: ``>=0.4.0``
   :depends r-viridis: ``>=0.3``
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

      mamba install bioconductor-chipexoqual

   and update with::

      mamba update bioconductor-chipexoqual

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chipexoqual

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipexoqual:<tag>

   (see `bioconductor-chipexoqual/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipexoqual| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipexoqual.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipexoqual
   :alt:   (downloads)
.. |docker_bioconductor-chipexoqual| image:: https://quay.io/repository/biocontainers/bioconductor-chipexoqual/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipexoqual
.. _`bioconductor-chipexoqual/tags`: https://quay.io/repository/biocontainers/bioconductor-chipexoqual?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipexoqual";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipexoqual/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipexoqual/README.html