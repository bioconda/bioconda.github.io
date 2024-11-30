:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alpinedata'
.. highlight: bash

bioconductor-alpinedata
=======================

.. conda:recipe:: bioconductor-alpinedata
   :replaces_section_title:
   :noindex:

   Data for the alpine package vignette

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/alpineData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-alpinedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpinedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpinedata/meta.yaml>`_

   A small subset of paired\-end RNA\-seq reads from four samples of the GEUVADIS project.


.. conda:package:: bioconductor-alpinedata

   |downloads_bioconductor-alpinedata| |docker_bioconductor-alpinedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-alpinedata

   and update with::

      mamba update bioconductor-alpinedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alpinedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alpinedata:<tag>

   (see `bioconductor-alpinedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alpinedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alpinedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alpinedata
   :alt:   (downloads)
.. |docker_bioconductor-alpinedata| image:: https://quay.io/repository/biocontainers/bioconductor-alpinedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alpinedata
.. _`bioconductor-alpinedata/tags`: https://quay.io/repository/biocontainers/bioconductor-alpinedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alpinedata";
        var versions = ["1.26.0","1.24.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alpinedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alpinedata/README.html