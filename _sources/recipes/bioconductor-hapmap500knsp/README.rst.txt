:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapmap500knsp'
.. highlight: bash

bioconductor-hapmap500knsp
==========================

.. conda:recipe:: bioconductor-hapmap500knsp
   :replaces_section_title:
   :noindex:

   Sample data \- Hapmap 500K NSP Affymetrix

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/hapmap500knsp.html
   :license: GPL
   :recipe: /`bioconductor-hapmap500knsp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmap500knsp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmap500knsp/meta.yaml>`_

   Sample dataset obtained from http\:\/\/www.hapmap.org


.. conda:package:: bioconductor-hapmap500knsp

   |downloads_bioconductor-hapmap500knsp| |docker_bioconductor-hapmap500knsp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.39.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.31.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.39.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-hapmap500knsp

   and update with::

      mamba update bioconductor-hapmap500knsp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hapmap500knsp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hapmap500knsp:<tag>

   (see `bioconductor-hapmap500knsp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hapmap500knsp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapmap500knsp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hapmap500knsp
   :alt:   (downloads)
.. |docker_bioconductor-hapmap500knsp| image:: https://quay.io/repository/biocontainers/bioconductor-hapmap500knsp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapmap500knsp
.. _`bioconductor-hapmap500knsp/tags`: https://quay.io/repository/biocontainers/bioconductor-hapmap500knsp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hapmap500knsp";
        var versions = ["1.44.0","1.42.0","1.39.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapmap500knsp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapmap500knsp/README.html