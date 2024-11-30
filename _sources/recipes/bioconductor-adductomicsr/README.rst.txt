:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adductomicsr'
.. highlight: bash

bioconductor-adductomicsr
=========================

.. conda:recipe:: bioconductor-adductomicsr
   :replaces_section_title:
   :noindex:

   Processing of adductomic mass spectral datasets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/adductomicsR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-adductomicsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductomicsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductomicsr/meta.yaml>`_

   Processes MS2 data to identify potentially adducted peptides from spectra that has been corrected for mass drift and retention time drift and quantifies MS1 level mass spectral peaks.


.. conda:package:: bioconductor-adductomicsr

   |downloads_bioconductor-adductomicsr| |docker_bioconductor-adductomicsr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-adductdata: ``>=1.18.0,<1.19.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0``
   :depends r-ade4: ``>=1.7.6``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bootstrap: ``>=2017.2``
   :depends r-data.table: ``>=1.10.4``
   :depends r-dosnow: ``>=1.0.14``
   :depends r-dplyr: ``>=0.7.5``
   :depends r-dt: ``>=0.2``
   :depends r-fastcluster: ``>=1.1.22``
   :depends r-foreach: ``>=1.4.3``
   :depends r-fpc: ``>=2.1.10``
   :depends r-orgmassspecr: ``>=0.4.6``
   :depends r-pastecs: ``>=1.3.18``
   :depends r-pracma: ``>=2.0.4``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-reshape2: ``>=1.4.2``
   :depends r-rvest: ``>=0.3.2``
   :depends r-smoother: ``>=1.1``
   :depends r-zoo: ``>=1.8``
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

      mamba install bioconductor-adductomicsr

   and update with::

      mamba update bioconductor-adductomicsr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adductomicsr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adductomicsr:<tag>

   (see `bioconductor-adductomicsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adductomicsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adductomicsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adductomicsr
   :alt:   (downloads)
.. |docker_bioconductor-adductomicsr| image:: https://quay.io/repository/biocontainers/bioconductor-adductomicsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adductomicsr
.. _`bioconductor-adductomicsr/tags`: https://quay.io/repository/biocontainers/bioconductor-adductomicsr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adductomicsr";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adductomicsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adductomicsr/README.html