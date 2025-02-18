:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rankprod'
.. highlight: bash

bioconductor-rankprod
=====================

.. conda:recipe:: bioconductor-rankprod
   :replaces_section_title:
   :noindex:

   Rank Product method for identifying differentially expressed genes with application in meta\-analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RankProd.html
   :license: file LICENSE
   :recipe: /`bioconductor-rankprod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rankprod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rankprod/meta.yaml>`_
   :links: biotools: :biotools:`rankprod`, doi: :doi:`10.1093/bioinformatics/btl476`

   Non\-parametric method for identifying differentially expressed \(up\- or down\- regulated\) genes based on the estimated percentage of false predictions \(pfp\). The method can combine data sets from different origins \(meta\-analysis\) to increase the power of the identification.


.. conda:package:: bioconductor-rankprod

   |downloads_bioconductor-rankprod| |docker_bioconductor-rankprod|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.32.0-0</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-1</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  </span></summary>
      

      ``3.32.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gmp: 
   :depends r-rmpfr: 
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

      mamba install bioconductor-rankprod

   and update with::

      mamba update bioconductor-rankprod

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rankprod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rankprod:<tag>

   (see `bioconductor-rankprod/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rankprod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rankprod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rankprod
   :alt:   (downloads)
.. |docker_bioconductor-rankprod| image:: https://quay.io/repository/biocontainers/bioconductor-rankprod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rankprod
.. _`bioconductor-rankprod/tags`: https://quay.io/repository/biocontainers/bioconductor-rankprod?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rankprod";
        var versions = ["3.32.0","3.28.0","3.26.0","3.24.0","3.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rankprod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rankprod/README.html