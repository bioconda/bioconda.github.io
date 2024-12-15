:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beclear'
.. highlight: bash

bioconductor-beclear
====================

.. conda:recipe:: bioconductor-beclear
   :replaces_section_title:
   :noindex:

   Correction of batch effects in DNA methylation data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BEclear.html
   :license: GPL-3.0-only
   :recipe: /`bioconductor-beclear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beclear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beclear/meta.yaml>`_
   :links: biotools: :biotools:`beclear`, doi: :doi:`10.1371/journal.pone.0159921`

   Provides functions to detect and correct for batch effects in DNA methylation data. The core function is based on latent factor models and can also be used to predict missing values in any other matrix containing real numbers.


.. conda:package:: bioconductor-beclear

   |downloads_bioconductor-beclear| |docker_bioconductor-beclear|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.10.0-2</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-dixontest: 
   :depends r-futile.logger: 
   :depends r-ids: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rdpack: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-beclear

   and update with::

      mamba update bioconductor-beclear

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beclear

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beclear:<tag>

   (see `bioconductor-beclear/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beclear| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beclear.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beclear
   :alt:   (downloads)
.. |docker_bioconductor-beclear| image:: https://quay.io/repository/biocontainers/bioconductor-beclear/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beclear
.. _`bioconductor-beclear/tags`: https://quay.io/repository/biocontainers/bioconductor-beclear?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beclear";
        var versions = ["2.22.0","2.18.0","2.18.0","2.16.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beclear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beclear/README.html