:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnanorm'
.. highlight: bash

bioconductor-cnanorm
====================

.. conda:recipe:: bioconductor-cnanorm
   :replaces_section_title:
   :noindex:

   A normalization method for Copy Number Aberration in cancer samples

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CNAnorm.html
   :license: GPL-2-only
   :recipe: /`bioconductor-cnanorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnanorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnanorm/meta.yaml>`_
   :links: biotools: :biotools:`cnanorm`

   Performs ratio\, GC content correction and normalization of data obtained using low coverage \(one read every 100\-10\,000 bp\) high troughput sequencing. It performs a \"discrete\" normalization looking for the ploidy of the genome. It will also provide tumour content if at least two ploidy states can be found.


.. conda:package:: bioconductor-cnanorm

   |downloads_bioconductor-cnanorm| |docker_bioconductor-cnanorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.1-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.1-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-dnacopy: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cnanorm

   and update with::

      mamba update bioconductor-cnanorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cnanorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnanorm:<tag>

   (see `bioconductor-cnanorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnanorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnanorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnanorm
   :alt:   (downloads)
.. |docker_bioconductor-cnanorm| image:: https://quay.io/repository/biocontainers/bioconductor-cnanorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnanorm
.. _`bioconductor-cnanorm/tags`: https://quay.io/repository/biocontainers/bioconductor-cnanorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnanorm";
        var versions = ["1.52.0","1.48.0","1.48.0","1.46.1","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnanorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnanorm/README.html