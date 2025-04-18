:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gopro'
.. highlight: bash

bioconductor-gopro
==================

.. conda:recipe:: bioconductor-gopro
   :replaces_section_title:
   :noindex:

   Find the most characteristic gene ontology terms for groups of human genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GOpro.html
   :license: GPL-3
   :recipe: /`bioconductor-gopro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gopro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gopro/meta.yaml>`_

   Find the most characteristic gene ontology terms for groups of human genes. This package was created as a part of the thesis which was developed under the auspices of MI\^2 Group \(http\:\/\/mi2.mini.pw.edu.pl\/\, https\:\/\/github.com\/geneticsMiNIng\).


.. conda:package:: bioconductor-gopro

   |downloads_bioconductor-gopro| |docker_bioconductor-gopro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-dendextend: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-rcpp: 
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

      mamba install bioconductor-gopro

   and update with::

      mamba update bioconductor-gopro

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gopro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gopro:<tag>

   (see `bioconductor-gopro/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gopro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gopro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gopro
   :alt:   (downloads)
.. |docker_bioconductor-gopro| image:: https://quay.io/repository/biocontainers/bioconductor-gopro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gopro
.. _`bioconductor-gopro/tags`: https://quay.io/repository/biocontainers/bioconductor-gopro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gopro";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gopro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gopro/README.html