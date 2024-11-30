:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snpstats'
.. highlight: bash

bioconductor-snpstats
=====================

.. conda:recipe:: bioconductor-snpstats
   :replaces_section_title:
   :noindex:

   SnpMatrix and XSnpMatrix classes and methods

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/snpStats.html
   :license: GPL-3-only
   :recipe: /`bioconductor-snpstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpstats/meta.yaml>`_
   :links: biotools: :biotools:`snpstats`, doi: :doi:`10.1038/nmeth.3252`

   Classes and statistical methods for large SNP association studies. This extends the earlier snpMatrix package\, allowing for uncertainty in genotypes.


.. conda:package:: bioconductor-snpstats

   |downloads_bioconductor-snpstats| |docker_bioconductor-snpstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.44.0-2</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.44.0-2``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-survival: 
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

      mamba install bioconductor-snpstats

   and update with::

      mamba update bioconductor-snpstats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snpstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snpstats:<tag>

   (see `bioconductor-snpstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snpstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snpstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snpstats
   :alt:   (downloads)
.. |docker_bioconductor-snpstats| image:: https://quay.io/repository/biocontainers/bioconductor-snpstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snpstats
.. _`bioconductor-snpstats/tags`: https://quay.io/repository/biocontainers/bioconductor-snpstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snpstats";
        var versions = ["1.52.0","1.52.0","1.50.0","1.48.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snpstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snpstats/README.html