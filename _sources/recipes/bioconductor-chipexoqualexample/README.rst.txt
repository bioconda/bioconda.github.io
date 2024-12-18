:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipexoqualexample'
.. highlight: bash

bioconductor-chipexoqualexample
===============================

.. conda:recipe:: bioconductor-chipexoqualexample
   :replaces_section_title:
   :noindex:

   Example data for the ChIPexoQual package\, which implements a quality control pipeline for ChIP\-exo data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/ChIPexoQualExample.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-chipexoqualexample <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipexoqualexample>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipexoqualexample/meta.yaml>`_

   Data for the ChIPexoQual package\, consisting of \(3\) chromosome 1 aligned reads from a ChIP\-exo experiment for FoxA1 in mouse liver cell lines aligned to the mm9 genome.


.. conda:package:: bioconductor-chipexoqualexample

   |downloads_bioconductor-chipexoqualexample| |docker_bioconductor-chipexoqualexample|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.21.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.21.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-chipexoqualexample

   and update with::

      mamba update bioconductor-chipexoqualexample

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chipexoqualexample

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipexoqualexample:<tag>

   (see `bioconductor-chipexoqualexample/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipexoqualexample| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipexoqualexample.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipexoqualexample
   :alt:   (downloads)
.. |docker_bioconductor-chipexoqualexample| image:: https://quay.io/repository/biocontainers/bioconductor-chipexoqualexample/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipexoqualexample
.. _`bioconductor-chipexoqualexample/tags`: https://quay.io/repository/biocontainers/bioconductor-chipexoqualexample?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipexoqualexample";
        var versions = ["1.30.0","1.26.0","1.24.0","1.21.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipexoqualexample/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipexoqualexample/README.html