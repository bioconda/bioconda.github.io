:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-normalize450k'
.. highlight: bash

bioconductor-normalize450k
==========================

.. conda:recipe:: bioconductor-normalize450k
   :replaces_section_title:
   :noindex:

   Preprocessing of Illumina Infinium 450K data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/normalize450K.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-normalize450k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalize450k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalize450k/meta.yaml>`_

   Precise measurements are important for epigenome\-wide studies investigating DNA methylation in whole blood samples\, where effect sizes are expected to be small in magnitude. The 450K platform is often affected by batch effects and proper preprocessing is recommended. This package provides functions to read and normalize 450K \'.idat\' files. The normalization corrects for dye bias and biases related to signal intensity and methylation of probes using local regression. No adjustment for probe type bias is performed to avoid the trade\-off of precision for accuracy of beta\-values.


.. conda:package:: bioconductor-normalize450k

   |downloads_bioconductor-normalize450k| |docker_bioconductor-normalize450k|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-illuminaio: ``>=0.48.0,<0.49.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-quadprog: 
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

      mamba install bioconductor-normalize450k

   and update with::

      mamba update bioconductor-normalize450k

  To create a new environment, run::

      mamba create --name myenvname bioconductor-normalize450k

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-normalize450k:<tag>

   (see `bioconductor-normalize450k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-normalize450k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normalize450k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-normalize450k
   :alt:   (downloads)
.. |docker_bioconductor-normalize450k| image:: https://quay.io/repository/biocontainers/bioconductor-normalize450k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normalize450k
.. _`bioconductor-normalize450k/tags`: https://quay.io/repository/biocontainers/bioconductor-normalize450k?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-normalize450k";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normalize450k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normalize450k/README.html