:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diggitdata'
.. highlight: bash

bioconductor-diggitdata
=======================

.. conda:recipe:: bioconductor-diggitdata
   :replaces_section_title:
   :noindex:

   Example data for the diggit package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/diggitdata.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-diggitdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diggitdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diggitdata/meta.yaml>`_

   This package provides expression profile and CNV data for glioblastoma from TCGA\, and transcriptional and post\-translational regulatory networks assembled with the ARACNe and MINDy algorithms\, respectively.


.. conda:package:: bioconductor-diggitdata

   |downloads_bioconductor-diggitdata| |docker_bioconductor-diggitdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-viper: ``>=1.40.0,<1.41.0``
   :depends curl: 
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

      mamba install bioconductor-diggitdata

   and update with::

      mamba update bioconductor-diggitdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-diggitdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diggitdata:<tag>

   (see `bioconductor-diggitdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diggitdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diggitdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diggitdata
   :alt:   (downloads)
.. |docker_bioconductor-diggitdata| image:: https://quay.io/repository/biocontainers/bioconductor-diggitdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diggitdata
.. _`bioconductor-diggitdata/tags`: https://quay.io/repository/biocontainers/bioconductor-diggitdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diggitdata";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diggitdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diggitdata/README.html