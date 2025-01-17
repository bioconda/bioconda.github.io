:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-restfulsedata'
.. highlight: bash

bioconductor-restfulsedata
==========================

.. conda:recipe:: bioconductor-restfulsedata
   :replaces_section_title:
   :noindex:

   Example metadata for the \"restfulSE\" R package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/restfulSEData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-restfulsedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulsedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulsedata/meta.yaml>`_

   Metadata RangedSummarizedExperiment shell for use with restfulSE.


.. conda:package:: bioconductor-restfulsedata

   |downloads_bioconductor-restfulsedata| |docker_bioconductor-restfulsedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
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

      mamba install bioconductor-restfulsedata

   and update with::

      mamba update bioconductor-restfulsedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-restfulsedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-restfulsedata:<tag>

   (see `bioconductor-restfulsedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-restfulsedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-restfulsedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-restfulsedata
   :alt:   (downloads)
.. |docker_bioconductor-restfulsedata| image:: https://quay.io/repository/biocontainers/bioconductor-restfulsedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-restfulsedata
.. _`bioconductor-restfulsedata/tags`: https://quay.io/repository/biocontainers/bioconductor-restfulsedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-restfulsedata";
        var versions = ["1.24.0","1.22.1","1.20.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-restfulsedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-restfulsedata/README.html