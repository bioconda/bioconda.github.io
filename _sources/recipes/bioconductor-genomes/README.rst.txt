:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomes'
.. highlight: bash

bioconductor-genomes
====================

.. conda:recipe:: bioconductor-genomes
   :replaces_section_title:
   :noindex:

   Genome sequencing project metadata

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/genomes.html
   :license: GPL-3
   :recipe: /`bioconductor-genomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomes/meta.yaml>`_

   Download genome and assembly reports from NCBI


.. conda:package:: bioconductor-genomes

   |downloads_bioconductor-genomes| |docker_bioconductor-genomes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.36.0-0</code>,  <code>3.32.0-1</code>,  <code>3.32.0-0</code>,  <code>3.30.0-0</code>,  <code>3.28.0-0</code>,  <code>3.24.0-0</code>,  <code>3.22.0-0</code>,  <code>3.20.0-1</code>,  <code>3.20.0-0</code>,  </span></summary>
      

      ``3.36.0-0``,  ``3.32.0-1``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.24.0-0``,  ``3.22.0-0``,  ``3.20.0-1``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-curl: 
   :depends r-readr: 
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

      mamba install bioconductor-genomes

   and update with::

      mamba update bioconductor-genomes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomes:<tag>

   (see `bioconductor-genomes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomes
   :alt:   (downloads)
.. |docker_bioconductor-genomes| image:: https://quay.io/repository/biocontainers/bioconductor-genomes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomes
.. _`bioconductor-genomes/tags`: https://quay.io/repository/biocontainers/bioconductor-genomes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomes";
        var versions = ["3.36.0","3.32.0","3.32.0","3.30.0","3.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomes/README.html