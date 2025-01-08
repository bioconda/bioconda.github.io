:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mvoutdata'
.. highlight: bash

bioconductor-mvoutdata
======================

.. conda:recipe:: bioconductor-mvoutdata
   :replaces_section_title:
   :noindex:

   affy and illumina raw data for assessing outlier detector performance

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/mvoutData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mvoutdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvoutdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvoutdata/meta.yaml>`_

   affy and illumina raw data for assessing outlier detector performance


.. conda:package:: bioconductor-mvoutdata

   |downloads_bioconductor-mvoutdata| |docker_bioconductor-mvoutdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20250101``
   :depends bioconductor-lumi: ``>=2.58.0,<2.59.0``
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

      mamba install bioconductor-mvoutdata

   and update with::

      mamba update bioconductor-mvoutdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mvoutdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mvoutdata:<tag>

   (see `bioconductor-mvoutdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mvoutdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mvoutdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mvoutdata
   :alt:   (downloads)
.. |docker_bioconductor-mvoutdata| image:: https://quay.io/repository/biocontainers/bioconductor-mvoutdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mvoutdata
.. _`bioconductor-mvoutdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mvoutdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mvoutdata";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mvoutdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mvoutdata/README.html