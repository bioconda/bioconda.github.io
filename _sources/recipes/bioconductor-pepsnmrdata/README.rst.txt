:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepsnmrdata'
.. highlight: bash

bioconductor-pepsnmrdata
========================

.. conda:recipe:: bioconductor-pepsnmrdata
   :replaces_section_title:
   :noindex:

   Datasets for the PepsNMR package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/PepsNMRData.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-pepsnmrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmrdata/meta.yaml>`_

   This package contains all the datasets used in the PepsNMR package.


.. conda:package:: bioconductor-pepsnmrdata

   |downloads_bioconductor-pepsnmrdata| |docker_bioconductor-pepsnmrdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.15.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.15.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-pepsnmrdata

   and update with::

      mamba update bioconductor-pepsnmrdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pepsnmrdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pepsnmrdata:<tag>

   (see `bioconductor-pepsnmrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepsnmrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepsnmrdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepsnmrdata
   :alt:   (downloads)
.. |docker_bioconductor-pepsnmrdata| image:: https://quay.io/repository/biocontainers/bioconductor-pepsnmrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepsnmrdata
.. _`bioconductor-pepsnmrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-pepsnmrdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pepsnmrdata";
        var versions = ["1.20.0","1.18.0","1.15.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepsnmrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepsnmrdata/README.html