:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fantom3and4cage'
.. highlight: bash

bioconductor-fantom3and4cage
============================

.. conda:recipe:: bioconductor-fantom3and4cage
   :replaces_section_title:
   :noindex:

   CAGE data from FANTOM3 and FANTOM4 projects

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/FANTOM3and4CAGE.html
   :license: GPL-3
   :recipe: /`bioconductor-fantom3and4cage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fantom3and4cage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fantom3and4cage/meta.yaml>`_

   CAGE \(Cap Analysis Gene Expression\) data from FANTOM3 and FANTOM4 projects produced by RIKEN Omics Science Center.


.. conda:package:: bioconductor-fantom3and4cage

   |downloads_bioconductor-fantom3and4cage| |docker_bioconductor-fantom3and4cage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-fantom3and4cage

   and update with::

      mamba update bioconductor-fantom3and4cage

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fantom3and4cage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fantom3and4cage:<tag>

   (see `bioconductor-fantom3and4cage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fantom3and4cage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fantom3and4cage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fantom3and4cage
   :alt:   (downloads)
.. |docker_bioconductor-fantom3and4cage| image:: https://quay.io/repository/biocontainers/bioconductor-fantom3and4cage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fantom3and4cage
.. _`bioconductor-fantom3and4cage/tags`: https://quay.io/repository/biocontainers/bioconductor-fantom3and4cage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fantom3and4cage";
        var versions = ["1.36.0","1.33.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fantom3and4cage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fantom3and4cage/README.html