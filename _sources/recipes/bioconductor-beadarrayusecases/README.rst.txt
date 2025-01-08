:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarrayusecases'
.. highlight: bash

bioconductor-beadarrayusecases
==============================

.. conda:recipe:: bioconductor-beadarrayusecases
   :replaces_section_title:
   :noindex:

   Analysing Illumina BeadArray expression data using Bioconductor

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/BeadArrayUseCases.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarrayusecases <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayusecases>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayusecases/meta.yaml>`_

   Example data files and use cases for processing Illumina BeadArray expression data using Bioconductor


.. conda:package:: bioconductor-beadarrayusecases

   |downloads_bioconductor-beadarrayusecases| |docker_bioconductor-beadarrayusecases|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beadarray: ``>=2.52.0,<2.53.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
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

      mamba install bioconductor-beadarrayusecases

   and update with::

      mamba update bioconductor-beadarrayusecases

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beadarrayusecases

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadarrayusecases:<tag>

   (see `bioconductor-beadarrayusecases/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarrayusecases| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarrayusecases.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadarrayusecases
   :alt:   (downloads)
.. |docker_bioconductor-beadarrayusecases| image:: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases
.. _`bioconductor-beadarrayusecases/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beadarrayusecases";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarrayusecases/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarrayusecases/README.html