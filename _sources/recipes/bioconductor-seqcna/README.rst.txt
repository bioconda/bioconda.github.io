:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqcna'
.. highlight: bash

bioconductor-seqcna
===================

.. conda:recipe:: bioconductor-seqcna
   :replaces_section_title:
   :noindex:

   Copy number analysis of high\-throughput sequencing cancer data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/seqCNA.html
   :license: GPL-3
   :recipe: /`bioconductor-seqcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcna/meta.yaml>`_

   Copy number analysis of high\-throughput sequencing cancer data with fast summarization\, extensive filtering and improved normalization


.. conda:package:: bioconductor-seqcna

   |downloads_bioconductor-seqcna| |docker_bioconductor-seqcna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-1``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0``
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-seqcna.annot: ``>=1.38.0,<1.39.0``
   :depends bioconductor-seqcna.annot: ``>=1.38.0,<1.39.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-adehabitatlt: ``>=0.3.4``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dosnow: ``>=1.0.5``
   :depends samtools: ``>=1.19,<2.0a0``
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

      mamba install bioconductor-seqcna

   and update with::

      mamba update bioconductor-seqcna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqcna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqcna:<tag>

   (see `bioconductor-seqcna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqcna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqcna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqcna
   :alt:   (downloads)
.. |docker_bioconductor-seqcna| image:: https://quay.io/repository/biocontainers/bioconductor-seqcna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqcna
.. _`bioconductor-seqcna/tags`: https://quay.io/repository/biocontainers/bioconductor-seqcna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqcna";
        var versions = ["1.48.0","1.46.0","1.44.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqcna/README.html