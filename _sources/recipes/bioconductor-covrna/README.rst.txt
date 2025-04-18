:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-covrna'
.. highlight: bash

bioconductor-covrna
===================

.. conda:recipe:: bioconductor-covrna
   :replaces_section_title:
   :noindex:

   Multivariate Analysis of Transcriptomic Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/covRNA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-covrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-covrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-covrna/meta.yaml>`_
   :links: biotools: :biotools:`covrna`, doi: :doi:`10.1038/nmeth.3252`

   This package provides the analysis methods fourthcorner and RLQ analysis for large\-scale transcriptomic data.


.. conda:package:: bioconductor-covrna

   |downloads_bioconductor-covrna| |docker_bioconductor-covrna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genefilter: ``>=1.88.0,<1.89.0``
   :depends r-ade4: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-covrna

   and update with::

      mamba update bioconductor-covrna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-covrna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-covrna:<tag>

   (see `bioconductor-covrna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-covrna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-covrna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-covrna
   :alt:   (downloads)
.. |docker_bioconductor-covrna| image:: https://quay.io/repository/biocontainers/bioconductor-covrna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-covrna
.. _`bioconductor-covrna/tags`: https://quay.io/repository/biocontainers/bioconductor-covrna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-covrna";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-covrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-covrna/README.html