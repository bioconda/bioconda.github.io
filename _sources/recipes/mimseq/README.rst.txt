:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimseq'
.. highlight: bash

mimseq
======

.. conda:recipe:: mimseq
   :replaces_section_title:
   :noindex:

   Modification\-induced misincorporation tRNA sequencing.

   :homepage: https://github.com/nedialkova-lab/mim-tRNAseq
   :license: GPL3 / GPL-3.0-only
   :recipe: /`mimseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimseq/meta.yaml>`_

   


.. conda:package:: mimseq

   |downloads_mimseq| |docker_mimseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.6-1</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3-0</code>,  <code>1.2.1-0</code>,  <code>1.2-0</code>,  </span></summary>
      

      ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.4-0``,  ``0.3.4.9-0``,  ``0.3.4.8-0``,  ``0.3.4.7-0``,  ``0.3.4.5-0``,  ``0.3.4.3-0``,  ``0.3.4.1-0``,  ``0.3.4-0``,  ``0.3.3.2-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.6-0``,  ``0.2.5.6-0``,  ``0.2.5.5-1``,  ``0.2.5.5-0``,  ``0.2.5.4-0``,  ``0.2.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.30.0``
   :depends bioconductor-complexheatmap: ``>=2.2.0``
   :depends bioconductor-deseq2: ``>=1.26.0``
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.10.1``
   :depends gmap: ``<=2019.02.26``
   :depends infernal: ``>=1.1.4``
   :depends matplotlib-base: ``>=3.4.2``
   :depends numpy: ``>=1.21.1``
   :depends pandas: ``>=1.3.1``
   :depends pybedtools: ``>=0.8.2``
   :depends pyfiglet: ``>=0.8.post1``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``3.7.*``
   :depends r-base: ``>=4.1``
   :depends r-calibrate: ``>=1.7.7``
   :depends r-devtools: ``>=2.4.1``
   :depends r-dplyr: ``>=1.0.6``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-ggpol: ``>=0.0.7``
   :depends r-gridextra: ``>=2.3``
   :depends r-pheatmap: ``>=1.0.12``
   :depends r-plyr: ``>=1.8.6``
   :depends r-reshape2: ``>=1.4.4``
   :depends r-tidyverse: ``>=1.3.0``
   :depends requests: ``>=2.26.0``
   :depends samtools: ``>=1.11``
   :depends seaborn-base: ``>=0.11.1``
   :depends statsmodels: ``>=0.13.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mimseq

   and update with::

      mamba update mimseq

  To create a new environment, run::

      mamba create --name myenvname mimseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mimseq:<tag>

   (see `mimseq/tags`_ for valid values for ``<tag>``)


.. |downloads_mimseq| image:: https://img.shields.io/conda/dn/bioconda/mimseq.svg?style=flat
   :target: https://anaconda.org/bioconda/mimseq
   :alt:   (downloads)
.. |docker_mimseq| image:: https://quay.io/repository/biocontainers/mimseq/status
   :target: https://quay.io/repository/biocontainers/mimseq
.. _`mimseq/tags`: https://quay.io/repository/biocontainers/mimseq?tab=tags


.. raw:: html

    <script>
        var package = "mimseq";
        var versions = ["1.3.6","1.3.6","1.3.5","1.3.4","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimseq/README.html