:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pram'
.. highlight: bash

bioconductor-pram
=================

.. conda:recipe:: bioconductor-pram
   :replaces_section_title:
   :noindex:

   Pooling RNA\-seq datasets for assembling transcript models

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pram.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pram/meta.yaml>`_

   Publicly available RNA\-seq data is routinely used for retrospective analysis to elucidate new biology.  Novel transcript discovery enabled by large collections of RNA\-seq datasets has emerged as one of such analysis.  To increase the power of transcript discovery from large collections of RNA\-seq datasets\, we developed a new R package named Pooling RNA\-seq and Assembling Models \(PRAM\)\, which builds transcript models in intergenic regions from pooled RNA\-seq datasets.  This package includes functions for defining intergenic regions\, extracting and pooling related RNA\-seq alignments\, predicting\, selected\, and evaluating transcript models.


.. conda:package:: bioconductor-pram

   |downloads_bioconductor-pram| |docker_bioconductor-pram|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.11.8``
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

      mamba install bioconductor-pram

   and update with::

      mamba update bioconductor-pram

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pram

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pram:<tag>

   (see `bioconductor-pram/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pram| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pram.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pram
   :alt:   (downloads)
.. |docker_bioconductor-pram| image:: https://quay.io/repository/biocontainers/bioconductor-pram/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pram
.. _`bioconductor-pram/tags`: https://quay.io/repository/biocontainers/bioconductor-pram?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pram";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pram/README.html