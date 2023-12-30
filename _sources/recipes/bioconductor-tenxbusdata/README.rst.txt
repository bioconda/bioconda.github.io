:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxbusdata'
.. highlight: bash

bioconductor-tenxbusdata
========================

.. conda:recipe:: bioconductor-tenxbusdata
   :replaces_section_title:
   :noindex:

   Single cell dataset from 10x in BUS format

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/TENxBUSData.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-tenxbusdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxbusdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxbusdata/meta.yaml>`_

   Download Barcode\, UMI\, and Set \(BUS\) format of 10x datasets from within R. This package accompanies the package BUSpaRse\, which can load BUS format into R as a sparse matrix\, and which has utility functions related to using the C\+\+ command line package bustools.


.. conda:package:: bioconductor-tenxbusdata

   |downloads_bioconductor-tenxbusdata| |docker_bioconductor-tenxbusdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
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

      mamba install bioconductor-tenxbusdata

   and update with::

      mamba update bioconductor-tenxbusdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tenxbusdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxbusdata:<tag>

   (see `bioconductor-tenxbusdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxbusdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxbusdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxbusdata
   :alt:   (downloads)
.. |docker_bioconductor-tenxbusdata| image:: https://quay.io/repository/biocontainers/bioconductor-tenxbusdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxbusdata
.. _`bioconductor-tenxbusdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxbusdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxbusdata";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxbusdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxbusdata/README.html