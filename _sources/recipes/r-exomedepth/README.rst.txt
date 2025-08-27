:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-exomedepth'
.. highlight: bash

r-exomedepth
============

.. conda:recipe:: r-exomedepth
   :replaces_section_title:
   :noindex:

   Calls copy number variants \(CNVs\) from targeted sequence data\, typically exome sequencing experiments designed to identify the genetic basis of Mendelian disorders.

   :homepage: https://CRAN.R-project.org/package=ExomeDepth
   :license: GPL3 / GPL-3
   :recipe: /`r-exomedepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-exomedepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-exomedepth/meta.yaml>`_

   


.. conda:package:: r-exomedepth

   |downloads_r-exomedepth| |docker_r-exomedepth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.18-0</code>,  <code>1.1.16-4</code>,  <code>1.1.16-3</code>,  <code>1.1.16-2</code>,  <code>1.1.16-1</code>,  <code>1.1.16-0</code>,  <code>1.1.15-4</code>,  <code>1.1.15-3</code>,  <code>1.1.15-2</code>,  </span></summary>
      

      ``1.1.18-0``,  ``1.1.16-4``,  ``1.1.16-3``,  ``1.1.16-2``,  ``1.1.16-1``,  ``1.1.16-0``,  ``1.1.15-4``,  ``1.1.15-3``,  ``1.1.15-2``,  ``1.1.15-1``,  ``1.1.15-0``,  ``1.1.12-0``,  ``1.1.10-4``,  ``1.1.10-3``,  ``1.1.10-2``,  ``1.1.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.23.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends libcxx: ``>=18``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.4.0``
   :depends libgfortran5: ``>=15.1.0``
   :depends r-aod: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-vgam: ``>=0.8.4``
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

      mamba install r-exomedepth

   and update with::

      mamba update r-exomedepth

  To create a new environment, run::

      mamba create --name myenvname r-exomedepth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-exomedepth:<tag>

   (see `r-exomedepth/tags`_ for valid values for ``<tag>``)


.. |downloads_r-exomedepth| image:: https://img.shields.io/conda/dn/bioconda/r-exomedepth.svg?style=flat
   :target: https://anaconda.org/bioconda/r-exomedepth
   :alt:   (downloads)
.. |docker_r-exomedepth| image:: https://quay.io/repository/biocontainers/r-exomedepth/status
   :target: https://quay.io/repository/biocontainers/r-exomedepth
.. _`r-exomedepth/tags`: https://quay.io/repository/biocontainers/r-exomedepth?tab=tags


.. raw:: html

    <script>
        var package = "r-exomedepth";
        var versions = ["1.1.18","1.1.16","1.1.16","1.1.16","1.1.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-exomedepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-exomedepth/README.html