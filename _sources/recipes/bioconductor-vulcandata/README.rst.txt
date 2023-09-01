:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vulcandata'
.. highlight: bash

bioconductor-vulcandata
=======================

.. conda:recipe:: bioconductor-vulcandata
   :replaces_section_title:
   :noindex:

   VirtUaL ChIP\-Seq data Analysis using Networks\, dummy dataset

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/vulcandata.html
   :license: LGPL-3
   :recipe: /`bioconductor-vulcandata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vulcandata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vulcandata/meta.yaml>`_

   This package provides a dummy regulatory network and ChIP\-Seq dataset for running examples in the vulcan package


.. conda:package:: bioconductor-vulcandata

   |downloads_bioconductor-vulcandata| |docker_bioconductor-vulcandata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.19.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.19.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-vulcandata

   and update with::

      mamba update bioconductor-vulcandata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vulcandata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vulcandata:<tag>

   (see `bioconductor-vulcandata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vulcandata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vulcandata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vulcandata
   :alt:   (downloads)
.. |docker_bioconductor-vulcandata| image:: https://quay.io/repository/biocontainers/bioconductor-vulcandata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vulcandata
.. _`bioconductor-vulcandata/tags`: https://quay.io/repository/biocontainers/bioconductor-vulcandata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vulcandata";
        var versions = ["1.22.0","1.19.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vulcandata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vulcandata/README.html