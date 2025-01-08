:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cardinalworkflows'
.. highlight: bash

bioconductor-cardinalworkflows
==============================

.. conda:recipe:: bioconductor-cardinalworkflows
   :replaces_section_title:
   :noindex:

   Datasets and workflows for the Cardinal MSI

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/CardinalWorkflows.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cardinalworkflows <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinalworkflows>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinalworkflows/meta.yaml>`_

   Datasets and workflows for Cardinal\: DESI and MALDI examples including pig fetus\, cardinal painting\, and human RCC.


.. conda:package:: bioconductor-cardinalworkflows

   |downloads_bioconductor-cardinalworkflows| |docker_bioconductor-cardinalworkflows|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.29.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.29.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cardinal: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-cardinalworkflows

   and update with::

      mamba update bioconductor-cardinalworkflows

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cardinalworkflows

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cardinalworkflows:<tag>

   (see `bioconductor-cardinalworkflows/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cardinalworkflows| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cardinalworkflows.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cardinalworkflows
   :alt:   (downloads)
.. |docker_bioconductor-cardinalworkflows| image:: https://quay.io/repository/biocontainers/bioconductor-cardinalworkflows/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cardinalworkflows
.. _`bioconductor-cardinalworkflows/tags`: https://quay.io/repository/biocontainers/bioconductor-cardinalworkflows?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cardinalworkflows";
        var versions = ["1.38.0","1.34.0","1.32.0","1.29.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cardinalworkflows/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cardinalworkflows/README.html