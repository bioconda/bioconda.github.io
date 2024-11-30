:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-htssip'
.. highlight: bash

r-htssip
========

.. conda:recipe:: r-htssip
   :replaces_section_title:
   :noindex:

   Functions for analyzing high throughput sequencing  stable isotope probing \(HTS\-SIP\) data. Analyses include high resolution stable isotope probing \(HR\-SIP\)\, multi\-window high resolution stable isotope probing \(MW\-HR\-SIP\)\,  and quantitative stable isotope probing \(q\-SIP\). 

   :homepage: https://CRAN.R-project.org/package=HTSSIP
   :license: GPL2 / GPL-2
   :recipe: /`r-htssip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-htssip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-htssip/meta.yaml>`_

   


.. conda:package:: r-htssip

   |downloads_r-htssip| |docker_r-htssip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-5</code>,  <code>1.4.1-4</code>,  <code>1.4.1-3</code>,  <code>1.4.1-2</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4.0-3</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-3``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.16.1``
   :depends bioconductor-phyloseq: ``>=1.20.0``
   :depends r-ape: ``>=4.1``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-coenocliner: ``>=0.2.2``
   :depends r-dplyr: ``>=0.7.4``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-igraph: ``>=1.1.2``
   :depends r-lazyeval: ``>=0.2.0``
   :depends r-magrittr: ``>=1.5``
   :depends r-plyr: ``>=1.8.4``
   :depends r-stringr: ``>=1.2.0``
   :depends r-tidyr: ``>=0.7.2``
   :depends r-vegan: ``>=2.4.0``
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

      mamba install r-htssip

   and update with::

      mamba update r-htssip

  To create a new environment, run::

      mamba create --name myenvname r-htssip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-htssip:<tag>

   (see `r-htssip/tags`_ for valid values for ``<tag>``)


.. |downloads_r-htssip| image:: https://img.shields.io/conda/dn/bioconda/r-htssip.svg?style=flat
   :target: https://anaconda.org/bioconda/r-htssip
   :alt:   (downloads)
.. |docker_r-htssip| image:: https://quay.io/repository/biocontainers/r-htssip/status
   :target: https://quay.io/repository/biocontainers/r-htssip
.. _`r-htssip/tags`: https://quay.io/repository/biocontainers/r-htssip?tab=tags


.. raw:: html

    <script>
        var package = "r-htssip";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-htssip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-htssip/README.html