:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-benchmarkfdrdata2019'
.. highlight: bash

bioconductor-benchmarkfdrdata2019
=================================

.. conda:recipe:: bioconductor-benchmarkfdrdata2019
   :replaces_section_title:
   :noindex:

   Data and Benchmarking Results from Korthauer and Kimes et al. \(2019\)

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/benchmarkfdrData2019.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-benchmarkfdrdata2019 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-benchmarkfdrdata2019>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-benchmarkfdrdata2019/meta.yaml>`_

   Benchmarking results for experimental and simulated data sets used in Korthauer and Kimes et al. \(2019\) to compare methods for controlling the false discovery rate.


.. conda:package:: bioconductor-benchmarkfdrdata2019

   |downloads_bioconductor-benchmarkfdrdata2019| |docker_bioconductor-benchmarkfdrdata2019|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
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

      mamba install bioconductor-benchmarkfdrdata2019

   and update with::

      mamba update bioconductor-benchmarkfdrdata2019

  To create a new environment, run::

      mamba create --name myenvname bioconductor-benchmarkfdrdata2019

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-benchmarkfdrdata2019:<tag>

   (see `bioconductor-benchmarkfdrdata2019/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-benchmarkfdrdata2019| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-benchmarkfdrdata2019.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-benchmarkfdrdata2019
   :alt:   (downloads)
.. |docker_bioconductor-benchmarkfdrdata2019| image:: https://quay.io/repository/biocontainers/bioconductor-benchmarkfdrdata2019/status
   :target: https://quay.io/repository/biocontainers/bioconductor-benchmarkfdrdata2019
.. _`bioconductor-benchmarkfdrdata2019/tags`: https://quay.io/repository/biocontainers/bioconductor-benchmarkfdrdata2019?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-benchmarkfdrdata2019";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-benchmarkfdrdata2019/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-benchmarkfdrdata2019/README.html