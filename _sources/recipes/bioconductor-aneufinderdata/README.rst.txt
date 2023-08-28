:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aneufinderdata'
.. highlight: bash

bioconductor-aneufinderdata
===========================

.. conda:recipe:: bioconductor-aneufinderdata
   :replaces_section_title:
   :noindex:

   WGSCS Data for Demonstration Purposes

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/AneuFinderData.html
   :license: file LICENSE
   :recipe: /`bioconductor-aneufinderdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aneufinderdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aneufinderdata/meta.yaml>`_

   Whole\-genome single cell sequencing data for demonstration purposes in the AneuFinder package.


.. conda:package:: bioconductor-aneufinderdata

   |downloads_bioconductor-aneufinderdata| |docker_bioconductor-aneufinderdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-aneufinderdata

   and update with::

      mamba update bioconductor-aneufinderdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-aneufinderdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aneufinderdata:<tag>

   (see `bioconductor-aneufinderdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aneufinderdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aneufinderdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aneufinderdata
   :alt:   (downloads)
.. |docker_bioconductor-aneufinderdata| image:: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata
.. _`bioconductor-aneufinderdata/tags`: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aneufinderdata";
        var versions = ["1.28.0","1.26.0","1.25.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aneufinderdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aneufinderdata/README.html