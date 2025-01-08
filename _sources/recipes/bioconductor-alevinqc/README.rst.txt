:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alevinqc'
.. highlight: bash

bioconductor-alevinqc
=====================

.. conda:recipe:: bioconductor-alevinqc
   :replaces_section_title:
   :noindex:

   Generate QC Reports For Alevin Output

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alevinQC.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alevinqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alevinqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alevinqc/meta.yaml>`_

   Generate QC reports summarizing the output from an alevin\, alevin\-fry\, or simpleaf run. Reports can be generated as html or pdf files\, or as shiny applications.


.. conda:package:: bioconductor-alevinqc

   |downloads_bioconductor-alevinqc| |docker_bioconductor-alevinqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-tximport: ``>=1.34.0,<1.35.0``
   :depends bioconductor-tximport: ``>=1.34.0,<1.35.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggally: 
   :depends r-ggplot2: ``>=3.4.0``
   :depends r-rcpp: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-rmarkdown: ``>=2.5``
   :depends r-shiny: 
   :depends r-shinydashboard: 
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

      mamba install bioconductor-alevinqc

   and update with::

      mamba update bioconductor-alevinqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alevinqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alevinqc:<tag>

   (see `bioconductor-alevinqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alevinqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alevinqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alevinqc
   :alt:   (downloads)
.. |docker_bioconductor-alevinqc| image:: https://quay.io/repository/biocontainers/bioconductor-alevinqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alevinqc
.. _`bioconductor-alevinqc/tags`: https://quay.io/repository/biocontainers/bioconductor-alevinqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alevinqc";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alevinqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alevinqc/README.html