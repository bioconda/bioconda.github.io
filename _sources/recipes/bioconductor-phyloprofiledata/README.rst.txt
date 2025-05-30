:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phyloprofiledata'
.. highlight: bash

bioconductor-phyloprofiledata
=============================

.. conda:recipe:: bioconductor-phyloprofiledata
   :replaces_section_title:
   :noindex:

   Data package for phylogenetic profile analysis using PhyloProfile tool

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/PhyloProfileData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-phyloprofiledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloprofiledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloprofiledata/meta.yaml>`_

   Two experimental datasets to illustrate running and analysing phylogenetic profiles with PhyloProfile package.


.. conda:package:: bioconductor-phyloprofiledata

   |downloads_bioconductor-phyloprofiledata| |docker_bioconductor-phyloprofiledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
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

      mamba install bioconductor-phyloprofiledata

   and update with::

      mamba update bioconductor-phyloprofiledata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phyloprofiledata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phyloprofiledata:<tag>

   (see `bioconductor-phyloprofiledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phyloprofiledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phyloprofiledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phyloprofiledata
   :alt:   (downloads)
.. |docker_bioconductor-phyloprofiledata| image:: https://quay.io/repository/biocontainers/bioconductor-phyloprofiledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phyloprofiledata
.. _`bioconductor-phyloprofiledata/tags`: https://quay.io/repository/biocontainers/bioconductor-phyloprofiledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phyloprofiledata";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phyloprofiledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phyloprofiledata/README.html