:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bpcells'
.. highlight: bash

r-bpcells
=========

.. conda:recipe:: r-bpcells
   :replaces_section_title:
   :noindex:

   Efficient operations for single cell ATAC\-seq fragments and RNA counts matrices. Interoperable with standard file formats\, and introduces efficient bit\-packed formats that allow large storage savings and increased read speeds.

   :homepage: https://bnprks.github.io/BPCells
   :developer docs: https://github.com/bnprks/BPCells
   :license: MIT / Apache-2.0 or MIT
   :recipe: /`r-bpcells <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bpcells>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bpcells/meta.yaml>`_

   


.. conda:package:: r-bpcells

   |downloads_r-bpcells| |docker_r-bpcells|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc: ``>=13``
   :depends libhwy: ``>=1.1.0,<1.2.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-ggplot2: ``>=3.4.0``
   :depends r-ggrepel: 
   :depends r-hexbin: 
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-scattermore: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vctrs: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-bpcells

   and update with::

      mamba update r-bpcells

  To create a new environment, run::

      mamba create --name myenvname r-bpcells

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-bpcells:<tag>

   (see `r-bpcells/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bpcells| image:: https://img.shields.io/conda/dn/bioconda/r-bpcells.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bpcells
   :alt:   (downloads)
.. |docker_r-bpcells| image:: https://quay.io/repository/biocontainers/r-bpcells/status
   :target: https://quay.io/repository/biocontainers/r-bpcells
.. _`r-bpcells/tags`: https://quay.io/repository/biocontainers/r-bpcells?tab=tags


.. raw:: html

    <script>
        var package = "r-bpcells";
        var versions = ["0.3.1","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bpcells/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bpcells/README.html