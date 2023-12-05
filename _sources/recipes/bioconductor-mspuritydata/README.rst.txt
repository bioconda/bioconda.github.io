:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mspuritydata'
.. highlight: bash

bioconductor-mspuritydata
=========================

.. conda:recipe:: bioconductor-mspuritydata
   :replaces_section_title:
   :noindex:

   Fragmentation spectral libraries and data to test the msPurity package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/msPurityData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mspuritydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspuritydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspuritydata/meta.yaml>`_

   Fragmentation spectral libraries and data to test the msPurity package


.. conda:package:: bioconductor-mspuritydata

   |downloads_bioconductor-mspuritydata| |docker_bioconductor-mspuritydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``

      
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

      mamba install bioconductor-mspuritydata

   and update with::

      mamba update bioconductor-mspuritydata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mspuritydata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mspuritydata:<tag>

   (see `bioconductor-mspuritydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mspuritydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mspuritydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mspuritydata
   :alt:   (downloads)
.. |docker_bioconductor-mspuritydata| image:: https://quay.io/repository/biocontainers/bioconductor-mspuritydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mspuritydata
.. _`bioconductor-mspuritydata/tags`: https://quay.io/repository/biocontainers/bioconductor-mspuritydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mspuritydata";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mspuritydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mspuritydata/README.html