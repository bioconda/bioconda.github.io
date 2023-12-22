:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gispa'
.. highlight: bash

bioconductor-gispa
==================

.. conda:recipe:: bioconductor-gispa
   :replaces_section_title:
   :noindex:

   GISPA\: Method for Gene Integrated Set Profile Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GISPA.html
   :license: GPL-2
   :recipe: /`bioconductor-gispa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gispa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gispa/meta.yaml>`_

   GISPA is a method intended for the researchers who are interested in defining gene sets with similar\, a priori specified molecular profile. GISPA method has been previously published in Nucleic Acid Research \(Kowalski et al.\, 2016\; PMID\: 26826710\).


.. conda:package:: bioconductor-gispa

   |downloads_bioconductor-gispa| |docker_bioconductor-gispa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-changepoint: 
   :depends r-data.table: 
   :depends r-hh: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-plyr: 
   :depends r-scatterplot3d: 
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

      mamba install bioconductor-gispa

   and update with::

      mamba update bioconductor-gispa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gispa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gispa:<tag>

   (see `bioconductor-gispa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gispa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gispa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gispa
   :alt:   (downloads)
.. |docker_bioconductor-gispa| image:: https://quay.io/repository/biocontainers/bioconductor-gispa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gispa
.. _`bioconductor-gispa/tags`: https://quay.io/repository/biocontainers/bioconductor-gispa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gispa";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gispa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gispa/README.html