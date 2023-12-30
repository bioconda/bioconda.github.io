:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-repviz'
.. highlight: bash

bioconductor-repviz
===================

.. conda:recipe:: bioconductor-repviz
   :replaces_section_title:
   :noindex:

   Replicate oriented Visualization of a genomic region

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RepViz.html
   :license: GPL-3
   :recipe: /`bioconductor-repviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repviz/meta.yaml>`_

   RepViz enables the view of a genomic region in a simple and efficient way. RepViz allows simultaneous viewing of both intra\- and intergroup variation in sequencing counts of the studied conditions\, as well as their comparison to the output features \(e.g. identified peaks\) from user selected data analysis methods.The RepViz tool is primarily designed for chromatin data such as ChIP\-seq and ATAC\-seq\, but can also be used with other sequencing data such as RNA\-seq\, or combinations of different types of genomic data.


.. conda:package:: bioconductor-repviz

   |downloads_bioconductor-repviz| |docker_bioconductor-repviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-repviz

   and update with::

      mamba update bioconductor-repviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-repviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-repviz:<tag>

   (see `bioconductor-repviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-repviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-repviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-repviz
   :alt:   (downloads)
.. |docker_bioconductor-repviz| image:: https://quay.io/repository/biocontainers/bioconductor-repviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-repviz
.. _`bioconductor-repviz/tags`: https://quay.io/repository/biocontainers/bioconductor-repviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-repviz";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-repviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-repviz/README.html