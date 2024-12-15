:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chemminer'
.. highlight: bash

bioconductor-chemminer
======================

.. conda:recipe:: bioconductor-chemminer
   :replaces_section_title:
   :noindex:

   Cheminformatics Toolkit for R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ChemmineR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chemminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminer/meta.yaml>`_
   :links: biotools: :biotools:`chemminer`

   ChemmineR is a cheminformatics package for analyzing drug\-like small molecule data in R. Its latest version contains functions for efficient processing of large numbers of molecules\, physicochemical\/structural property predictions\, structural similarity searching\, classification and clustering of compound libraries with a wide spectrum of algorithms. In addition\, it offers visualization functions for compound clustering results and chemical structures.


.. conda:package:: bioconductor-chemminer

   |downloads_bioconductor-chemminer| |docker_bioconductor-chemminer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.58.0-0</code>,  <code>3.54.0-1</code>,  <code>3.54.0-0</code>,  <code>3.52.0-0</code>,  <code>3.50.0-1</code>,  <code>3.50.0-0</code>,  <code>3.46.0-2</code>,  <code>3.46.0-1</code>,  <code>3.46.0-0</code>,  </span></summary>
      

      ``3.58.0-0``,  ``3.54.0-1``,  ``3.54.0-0``,  ``3.52.0-0``,  ``3.50.0-1``,  ``3.50.0-0``,  ``3.46.0-2``,  ``3.46.0-1``,  ``3.46.0-0``,  ``3.44.0-0``,  ``3.42.2-0``,  ``3.42.0-0``,  ``3.40.0-0``,  ``3.38.0-0``,  ``3.36.0-1``,  ``3.34.1-0``,  ``3.32.1-0``,  ``2.30.0-0``,  ``2.28.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-base64enc: 
   :depends r-bh: 
   :depends r-dbi: 
   :depends r-digest: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-jsonlite: 
   :depends r-png: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-rcurl: 
   :depends r-rjson: 
   :depends r-rsvg: 
   :depends r-stringi: 
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

      mamba install bioconductor-chemminer

   and update with::

      mamba update bioconductor-chemminer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chemminer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chemminer:<tag>

   (see `bioconductor-chemminer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chemminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chemminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chemminer
   :alt:   (downloads)
.. |docker_bioconductor-chemminer| image:: https://quay.io/repository/biocontainers/bioconductor-chemminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chemminer
.. _`bioconductor-chemminer/tags`: https://quay.io/repository/biocontainers/bioconductor-chemminer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chemminer";
        var versions = ["3.58.0","3.54.0","3.54.0","3.52.0","3.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chemminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chemminer/README.html