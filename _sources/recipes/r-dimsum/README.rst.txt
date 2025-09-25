:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dimsum'
.. highlight: bash

r-dimsum
========

.. conda:recipe:: r-dimsum
   :replaces_section_title:
   :noindex:

   An error model and pipeline for analyzing deep mutational scanning \(DMS\) data and diagnosing common experimental pathologies

   :homepage: https://github.com/lehner-lab/DiMSum
   :license: MIT
   :recipe: /`r-dimsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dimsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dimsum/meta.yaml>`_

   


.. conda:package:: r-dimsum

   |downloads_r-dimsum| |docker_r-dimsum|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  </span></summary>
      

      ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2.11-1``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-2``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.5-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-iranges: 
   :depends bioconductor-shortread: 
   :depends cutadapt: ``>=2.4-0``
   :depends fastqc: ``0.11.*``
   :depends pandoc: ``>=1.17.2``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cairo: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-hexbin: 
   :depends r-optparse: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-seqinr: 
   :depends r-stringr: 
   :depends starcode: ``>=1.3``
   :depends vsearch: ``>=2.17``
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

      mamba install r-dimsum

   and update with::

      mamba update r-dimsum

  To create a new environment, run::

      mamba create --name myenvname r-dimsum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-dimsum:<tag>

   (see `r-dimsum/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dimsum| image:: https://img.shields.io/conda/dn/bioconda/r-dimsum.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dimsum
   :alt:   (downloads)
.. |docker_r-dimsum| image:: https://quay.io/repository/biocontainers/r-dimsum/status
   :target: https://quay.io/repository/biocontainers/r-dimsum
.. _`r-dimsum/tags`: https://quay.io/repository/biocontainers/r-dimsum?tab=tags


.. raw:: html

    <script>
        var package = "r-dimsum";
        var versions = ["1.4","1.4","1.4","1.4","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dimsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dimsum/README.html