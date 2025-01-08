:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterseq'
.. highlight: bash

bioconductor-clusterseq
=======================

.. conda:recipe:: bioconductor-clusterseq
   :replaces_section_title:
   :noindex:

   Clustering of high\-throughput sequencing data by identifying co\-expression patterns

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/clusterSeq.html
   :license: GPL-3
   :recipe: /`bioconductor-clusterseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterseq/meta.yaml>`_

   Identification of clusters of co\-expressed genes based on their expression across multiple \(replicated\) biological samples.


.. conda:package:: bioconductor-clusterseq

   |downloads_bioconductor-clusterseq| |docker_bioconductor-clusterseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bayseq: ``>=2.40.0,<2.41.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-clusterseq

   and update with::

      mamba update bioconductor-clusterseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clusterseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterseq:<tag>

   (see `bioconductor-clusterseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterseq
   :alt:   (downloads)
.. |docker_bioconductor-clusterseq| image:: https://quay.io/repository/biocontainers/bioconductor-clusterseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterseq
.. _`bioconductor-clusterseq/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clusterseq";
        var versions = ["1.30.0","1.26.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterseq/README.html