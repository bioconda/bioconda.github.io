:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tidygenomics'
.. highlight: bash

r-tidygenomics
==============

.. conda:recipe:: r-tidygenomics
   :replaces_section_title:
   :noindex:

   Handle genomic data within data frames just as you would with \'GRanges\'. This packages provides method to deal with genomic intervals the \"tidy\-way\" which makes it simpler to integrate in the the general data munging process. The API is inspired by the popular \'bedtools\' and the genome\_join\(\) method from the \'fuzzyjoin\' package.

   :homepage: https://github.com/const-ae/tidygenomics
   :license: GPL3 / GPL-3
   :recipe: /`r-tidygenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidygenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidygenomics/meta.yaml>`_

   


.. conda:package:: r-tidygenomics

   |downloads_r-tidygenomics| |docker_r-tidygenomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.2-7</code>,  <code>0.1.2-6</code>,  <code>0.1.2-5</code>,  <code>0.1.2-4</code>,  <code>0.1.2-3</code>,  <code>0.1.2-2</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  <code>0.1.0-3</code>,  </span></summary>
      

      ``0.1.2-7``,  ``0.1.2-6``,  ``0.1.2-5``,  ``0.1.2-4``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-iranges: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-fuzzyjoin: ``>=0.1.3``
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-tidygenomics

   and update with::

      mamba update r-tidygenomics

  To create a new environment, run::

      mamba create --name myenvname r-tidygenomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tidygenomics:<tag>

   (see `r-tidygenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tidygenomics| image:: https://img.shields.io/conda/dn/bioconda/r-tidygenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tidygenomics
   :alt:   (downloads)
.. |docker_r-tidygenomics| image:: https://quay.io/repository/biocontainers/r-tidygenomics/status
   :target: https://quay.io/repository/biocontainers/r-tidygenomics
.. _`r-tidygenomics/tags`: https://quay.io/repository/biocontainers/r-tidygenomics?tab=tags


.. raw:: html

    <script>
        var package = "r-tidygenomics";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tidygenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tidygenomics/README.html