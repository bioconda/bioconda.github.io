:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepstat'
.. highlight: bash

bioconductor-pepstat
====================

.. conda:recipe:: bioconductor-pepstat
   :replaces_section_title:
   :noindex:

   Statistical analysis of peptide microarrays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pepStat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pepstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepstat/meta.yaml>`_
   :links: biotools: :biotools:`pepstat`, doi: :doi:`10.1007/978-1-4939-3037-1_10`

   Statistical analysis of peptide microarrays


.. conda:package:: bioconductor-pepstat

   |downloads_bioconductor-pepstat| |docker_bioconductor-pepstat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-plyr: 
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

      mamba install bioconductor-pepstat

   and update with::

      mamba update bioconductor-pepstat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pepstat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pepstat:<tag>

   (see `bioconductor-pepstat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepstat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepstat
   :alt:   (downloads)
.. |docker_bioconductor-pepstat| image:: https://quay.io/repository/biocontainers/bioconductor-pepstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepstat
.. _`bioconductor-pepstat/tags`: https://quay.io/repository/biocontainers/bioconductor-pepstat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pepstat";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepstat/README.html