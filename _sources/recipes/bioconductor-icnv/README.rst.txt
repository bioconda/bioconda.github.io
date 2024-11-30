:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icnv'
.. highlight: bash

bioconductor-icnv
=================

.. conda:recipe:: bioconductor-icnv
   :replaces_section_title:
   :noindex:

   Integrated Copy Number Variation detection

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iCNV.html
   :license: GPL-2
   :recipe: /`bioconductor-icnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icnv/meta.yaml>`_

   Integrative copy number variation \(CNV\) detection from multiple platform and experimental design.


.. conda:package:: bioconductor-icnv

   |downloads_bioconductor-icnv| |docker_bioconductor-icnv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-codex: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :depends r-truncnorm: 
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

      mamba install bioconductor-icnv

   and update with::

      mamba update bioconductor-icnv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-icnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icnv:<tag>

   (see `bioconductor-icnv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icnv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icnv
   :alt:   (downloads)
.. |docker_bioconductor-icnv| image:: https://quay.io/repository/biocontainers/bioconductor-icnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icnv
.. _`bioconductor-icnv/tags`: https://quay.io/repository/biocontainers/bioconductor-icnv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-icnv";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icnv/README.html