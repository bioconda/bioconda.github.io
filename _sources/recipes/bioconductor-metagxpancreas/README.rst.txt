:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagxpancreas'
.. highlight: bash

bioconductor-metagxpancreas
===========================

.. conda:recipe:: bioconductor-metagxpancreas
   :replaces_section_title:
   :noindex:

   Transcriptomic Pancreatic Cancer Datasets

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MetaGxPancreas.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagxpancreas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxpancreas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxpancreas/meta.yaml>`_

   A collection of pancreatic Cancer transcriptomic datasets that are part of the MetaGxData package compendium. This package contains multiple pancreas cancer datasets that have been downloaded from various resources and turned into SummarizedExperiment objects. The details of how the authors normalized the data can be found in the experiment data section of the objects. Additionally\, the location the data was obtained from can be found in the url variables of the experiment data portion of each SE.


.. conda:package:: bioconductor-metagxpancreas

   |downloads_bioconductor-metagxpancreas| |docker_bioconductor-metagxpancreas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-metagxpancreas

   and update with::

      mamba update bioconductor-metagxpancreas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metagxpancreas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagxpancreas:<tag>

   (see `bioconductor-metagxpancreas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagxpancreas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagxpancreas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagxpancreas
   :alt:   (downloads)
.. |docker_bioconductor-metagxpancreas| image:: https://quay.io/repository/biocontainers/bioconductor-metagxpancreas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagxpancreas
.. _`bioconductor-metagxpancreas/tags`: https://quay.io/repository/biocontainers/bioconductor-metagxpancreas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagxpancreas";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagxpancreas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagxpancreas/README.html