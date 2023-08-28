:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sleuth'
.. highlight: bash

r-sleuth
========

.. conda:recipe:: r-sleuth
   :replaces_section_title:
   :noindex:

   Tools for investigating RNA\-Seq.

   :homepage: http://pachterlab.github.io/sleuth/
   :developer docs: https://github.com/pachterlab/sleuth
   :license: GPL / GPLv3
   :recipe: /`r-sleuth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sleuth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sleuth/meta.yaml>`_

   


.. conda:package:: r-sleuth

   |downloads_r-sleuth| |docker_r-sleuth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.30.1-1</code>,  <code>0.30.1-0</code>,  <code>0.30.0-6</code>,  <code>0.30.0-5</code>,  <code>0.30.0-4</code>,  <code>0.30.0-3</code>,  <code>0.30.0-2</code>,  <code>0.30.0-1</code>,  <code>0.30.0-0</code>,  </span></summary>
      

      ``0.30.1-1``,  ``0.30.1-0``,  ``0.30.0-6``,  ``0.30.0-5``,  ``0.30.0-4``,  ``0.30.0-3``,  ``0.30.0-2``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhdf5: 
   :depends r-aggregation: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-lazyeval: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-reshape2: 
   :depends r-shiny: 
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

      mamba install r-sleuth

   and update with::

      mamba update r-sleuth

  To create a new environment, run::

      mamba create --name myenvname r-sleuth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-sleuth:<tag>

   (see `r-sleuth/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sleuth| image:: https://img.shields.io/conda/dn/bioconda/r-sleuth.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sleuth
   :alt:   (downloads)
.. |docker_r-sleuth| image:: https://quay.io/repository/biocontainers/r-sleuth/status
   :target: https://quay.io/repository/biocontainers/r-sleuth
.. _`r-sleuth/tags`: https://quay.io/repository/biocontainers/r-sleuth?tab=tags


.. raw:: html

    <script>
        var package = "r-sleuth";
        var versions = ["0.30.1","0.30.1","0.30.0","0.30.0","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sleuth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sleuth/README.html