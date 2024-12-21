:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tailfindr'
.. highlight: bash

r-tailfindr
===========

.. conda:recipe:: r-tailfindr
   :replaces_section_title:
   :noindex:

   An R package for estimating poly\(A\)\-tail lengths in Oxford Nanopore RNA and DNA reads.

   :homepage: https://github.com/adnaniazi/tailfindr
   :license: AGPL-3.0
   :recipe: /`r-tailfindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tailfindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tailfindr/meta.yaml>`_

   


.. conda:package:: r-tailfindr

   |downloads_r-tailfindr| |docker_r-tailfindr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.2-3</code>,  <code>1.2-2</code>,  </span></summary>
      

      ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-rsamtools: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-crayon: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hdf5r: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-psych: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-rbokeh: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :depends r-testthat: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xml: 
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

      mamba install r-tailfindr

   and update with::

      mamba update r-tailfindr

  To create a new environment, run::

      mamba create --name myenvname r-tailfindr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tailfindr:<tag>

   (see `r-tailfindr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tailfindr| image:: https://img.shields.io/conda/dn/bioconda/r-tailfindr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tailfindr
   :alt:   (downloads)
.. |docker_r-tailfindr| image:: https://quay.io/repository/biocontainers/r-tailfindr/status
   :target: https://quay.io/repository/biocontainers/r-tailfindr
.. _`r-tailfindr/tags`: https://quay.io/repository/biocontainers/r-tailfindr?tab=tags


.. raw:: html

    <script>
        var package = "r-tailfindr";
        var versions = ["1.4","1.4","1.4","1.4","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tailfindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tailfindr/README.html