:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-migsadata'
.. highlight: bash

bioconductor-migsadata
======================

.. conda:recipe:: bioconductor-migsadata
   :replaces_section_title:
   :noindex:

   MIGSA vignette data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/MIGSAdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-migsadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-migsadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-migsadata/meta.yaml>`_

   MIGSA vignette data. The MIGSAdata package provides several data objects needed by MIGSA package to correctly generate its vignette\, and follow it step by step.


.. conda:package:: bioconductor-migsadata

   |downloads_bioconductor-migsadata| |docker_bioconductor-migsadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.21.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.21.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-migsadata

   and update with::

      mamba update bioconductor-migsadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-migsadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-migsadata:<tag>

   (see `bioconductor-migsadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-migsadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-migsadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-migsadata
   :alt:   (downloads)
.. |docker_bioconductor-migsadata| image:: https://quay.io/repository/biocontainers/bioconductor-migsadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-migsadata
.. _`bioconductor-migsadata/tags`: https://quay.io/repository/biocontainers/bioconductor-migsadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-migsadata";
        var versions = ["1.24.0","1.21.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-migsadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-migsadata/README.html