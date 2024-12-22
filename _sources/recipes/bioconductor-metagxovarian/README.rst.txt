:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagxovarian'
.. highlight: bash

bioconductor-metagxovarian
==========================

.. conda:recipe:: bioconductor-metagxovarian
   :replaces_section_title:
   :noindex:

   Transcriptomic Ovarian Cancer Datasets

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MetaGxOvarian.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagxovarian <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxovarian>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxovarian/meta.yaml>`_

   A collection of Ovarian Cancer Transcriptomic Datasets that are part of the MetaGxData package compendium.


.. conda:package:: bioconductor-metagxovarian

   |downloads_bioconductor-metagxovarian| |docker_bioconductor-metagxovarian|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-lattice: 
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

      mamba install bioconductor-metagxovarian

   and update with::

      mamba update bioconductor-metagxovarian

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metagxovarian

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagxovarian:<tag>

   (see `bioconductor-metagxovarian/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagxovarian| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagxovarian.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagxovarian
   :alt:   (downloads)
.. |docker_bioconductor-metagxovarian| image:: https://quay.io/repository/biocontainers/bioconductor-metagxovarian/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagxovarian
.. _`bioconductor-metagxovarian/tags`: https://quay.io/repository/biocontainers/bioconductor-metagxovarian?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagxovarian";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagxovarian/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagxovarian/README.html