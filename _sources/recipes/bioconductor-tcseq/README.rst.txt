:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcseq'
.. highlight: bash

bioconductor-tcseq
==================

.. conda:recipe:: bioconductor-tcseq
   :replaces_section_title:
   :noindex:

   Time course sequencing data analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TCseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcseq/meta.yaml>`_

   Quantitative and differential analysis of epigenomic and transcriptomic time course sequencing data\, clustering analysis and visualization of the temporal patterns of time course data.


.. conda:package:: bioconductor-tcseq

   |downloads_bioconductor-tcseq| |docker_bioconductor-tcseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.23.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.23.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-locfit: 
   :depends r-reshape2: 
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

      mamba install bioconductor-tcseq

   and update with::

      mamba update bioconductor-tcseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tcseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcseq:<tag>

   (see `bioconductor-tcseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcseq
   :alt:   (downloads)
.. |docker_bioconductor-tcseq| image:: https://quay.io/repository/biocontainers/bioconductor-tcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcseq
.. _`bioconductor-tcseq/tags`: https://quay.io/repository/biocontainers/bioconductor-tcseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcseq";
        var versions = ["1.26.0","1.23.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcseq/README.html