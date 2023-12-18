:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pipette'
.. highlight: bash

r-pipette
=========

.. conda:recipe:: r-pipette
   :replaces_section_title:
   :noindex:

   Pipette biological data in and out of R.

   :homepage: https://r.acidgenomics.com/packages/pipette/
   :developer docs: https://github.com/acidgenomics/r-pipette
   :license: GPL / AGPL-3.0
   :recipe: /`r-pipette <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pipette>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pipette/meta.yaml>`_

   


.. conda:package:: r-pipette

   |downloads_r-pipette| |docker_r-pipette|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.2-0</code>,  <code>0.15.1-0</code>,  <code>0.15.0-1</code>,  <code>0.15.0-0</code>,  <code>0.14.2-0</code>,  <code>0.14.1-0</code>,  <code>0.13.0-0</code>,  <code>0.12.4-0</code>,  <code>0.12.3-0</code>,  </span></summary>
      

      ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.13.0-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.10-1``,  ``0.10.10-0``,  ``0.10.9-1``,  ``0.10.9-0``,  ``0.10.8-0``,  ``0.10.5-0``,  ``0.10.4-1``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.15-2``,  ``0.5.15-1``,  ``0.5.15-0``,  ``0.5.14-2``,  ``0.5.14-0``,  ``0.4.22-1``,  ``0.4.22-0``,  ``0.4.20-0``,  ``0.4.19-0``,  ``0.4.14-0``,  ``0.4.13-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-biostrings: ``>=2.68.0``
   :depends bioconductor-genomicranges: ``>=1.52.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-maftools: ``>=2.16.0``
   :depends bioconductor-rsamtools: ``>=2.16.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidbase: ``>=0.7.2``
   :depends r-acidcli: ``>=0.3.0``
   :depends r-acidgenerics: ``>=0.7.5``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-baseset: ``>=0.9.0``
   :depends r-data.table: ``>=1.14.8``
   :depends r-digest: ``>=0.6.33``
   :depends r-goalie: ``>=0.7.7``
   :depends r-httr2: ``>=0.2.3``
   :depends r-jsonlite: ``>=1.8.8``
   :depends r-matrix: ``>=1.6.4``
   :depends r-ontologyindex: ``>=2.11``
   :depends r-pzfx: ``>=0.3.0``
   :depends r-readr: ``>=2.1.4``
   :depends r-readxl: ``>=1.4.3``
   :depends r-rio: ``>=1.0.1``
   :depends r-syntactic: ``>=0.7.1``
   :depends r-tibble: ``>=3.2.1``
   :depends r-yaml: ``>=2.3.8``
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

      mamba install r-pipette

   and update with::

      mamba update r-pipette

  To create a new environment, run::

      mamba create --name myenvname r-pipette

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pipette:<tag>

   (see `r-pipette/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pipette| image:: https://img.shields.io/conda/dn/bioconda/r-pipette.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pipette
   :alt:   (downloads)
.. |docker_r-pipette| image:: https://quay.io/repository/biocontainers/r-pipette/status
   :target: https://quay.io/repository/biocontainers/r-pipette
.. _`r-pipette/tags`: https://quay.io/repository/biocontainers/r-pipette?tab=tags


.. raw:: html

    <script>
        var package = "r-pipette";
        var versions = ["0.15.2","0.15.1","0.15.0","0.15.0","0.14.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pipette/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pipette/README.html