:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zfpkm'
.. highlight: bash

bioconductor-zfpkm
==================

.. conda:recipe:: bioconductor-zfpkm
   :replaces_section_title:
   :noindex:

   A suite of functions to facilitate zFPKM transformations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/zFPKM.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-zfpkm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zfpkm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zfpkm/meta.yaml>`_

   Perform the zFPKM transform on RNA\-seq FPKM data. This algorithm is based on the publication by Hart et al.\, 2013 \(Pubmed ID 24215113\). Reference recommends using zFPKM \> \-3 to select expressed genes. Validated with encode open\/closed chromosome data. Works well for gene level data using FPKM or TPM. Does not appear to calibrate well for transcript level data.


.. conda:package:: bioconductor-zfpkm

   |downloads_bioconductor-zfpkm| |docker_bioconductor-zfpkm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-tidyr: 
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

      mamba install bioconductor-zfpkm

   and update with::

      mamba update bioconductor-zfpkm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-zfpkm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zfpkm:<tag>

   (see `bioconductor-zfpkm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zfpkm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zfpkm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zfpkm
   :alt:   (downloads)
.. |docker_bioconductor-zfpkm| image:: https://quay.io/repository/biocontainers/bioconductor-zfpkm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zfpkm
.. _`bioconductor-zfpkm/tags`: https://quay.io/repository/biocontainers/bioconductor-zfpkm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zfpkm";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zfpkm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zfpkm/README.html