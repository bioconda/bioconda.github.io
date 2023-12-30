:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapmap100kxba'
.. highlight: bash

bioconductor-hapmap100kxba
==========================

.. conda:recipe:: bioconductor-hapmap100kxba
   :replaces_section_title:
   :noindex:

   Sample data \- Hapmap 100K XBA Affymetrix

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/hapmap100kxba.html
   :license: GPL
   :recipe: /`bioconductor-hapmap100kxba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmap100kxba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmap100kxba/meta.yaml>`_

   Sample dataset obtained from http\:\/\/www.hapmap.org


.. conda:package:: bioconductor-hapmap100kxba

   |downloads_bioconductor-hapmap100kxba| |docker_bioconductor-hapmap100kxba|

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

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hapmap100kxba

   and update with::

      mamba update bioconductor-hapmap100kxba

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hapmap100kxba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hapmap100kxba:<tag>

   (see `bioconductor-hapmap100kxba/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hapmap100kxba| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapmap100kxba.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hapmap100kxba
   :alt:   (downloads)
.. |docker_bioconductor-hapmap100kxba| image:: https://quay.io/repository/biocontainers/bioconductor-hapmap100kxba/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapmap100kxba
.. _`bioconductor-hapmap100kxba/tags`: https://quay.io/repository/biocontainers/bioconductor-hapmap100kxba?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hapmap100kxba";
        var versions = ["1.44.0","1.42.0","1.39.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapmap100kxba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapmap100kxba/README.html