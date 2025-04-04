:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dupradar'
.. highlight: bash

bioconductor-dupradar
=====================

.. conda:recipe:: bioconductor-dupradar
   :replaces_section_title:
   :noindex:

   Assessment of duplication rates in RNA\-Seq datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dupRadar.html
   :license: GPL-3
   :recipe: /`bioconductor-dupradar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dupradar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dupradar/meta.yaml>`_
   :links: biotools: :biotools:`dupradar`

   Duplication rate quality control for RNA\-Seq datasets.


.. conda:package:: bioconductor-dupradar

   |downloads_bioconductor-dupradar| |docker_bioconductor-dupradar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-2``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rsubread: ``>=2.20.0,<2.21.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-kernsmooth: 
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

      mamba install bioconductor-dupradar

   and update with::

      mamba update bioconductor-dupradar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dupradar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dupradar:<tag>

   (see `bioconductor-dupradar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dupradar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dupradar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dupradar
   :alt:   (downloads)
.. |docker_bioconductor-dupradar| image:: https://quay.io/repository/biocontainers/bioconductor-dupradar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dupradar
.. _`bioconductor-dupradar/tags`: https://quay.io/repository/biocontainers/bioconductor-dupradar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dupradar";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dupradar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dupradar/README.html