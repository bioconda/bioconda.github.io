:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omiccircos'
.. highlight: bash

bioconductor-omiccircos
=======================

.. conda:recipe:: bioconductor-omiccircos
   :replaces_section_title:
   :noindex:

   High\-quality circular visualization of omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/OmicCircos.html
   :license: GPL-2
   :recipe: /`bioconductor-omiccircos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omiccircos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omiccircos/meta.yaml>`_
   :links: biotools: :biotools:`omiccircos`, doi: :doi:`10.4137/cin.s13495`

   OmicCircos is an R application and package for generating high\-quality circular plots for omics data.


.. conda:package:: bioconductor-omiccircos

   |downloads_bioconductor-omiccircos| |docker_bioconductor-omiccircos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
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

      mamba install bioconductor-omiccircos

   and update with::

      mamba update bioconductor-omiccircos

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omiccircos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omiccircos:<tag>

   (see `bioconductor-omiccircos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omiccircos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omiccircos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omiccircos
   :alt:   (downloads)
.. |docker_bioconductor-omiccircos| image:: https://quay.io/repository/biocontainers/bioconductor-omiccircos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omiccircos
.. _`bioconductor-omiccircos/tags`: https://quay.io/repository/biocontainers/bioconductor-omiccircos?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omiccircos";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omiccircos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omiccircos/README.html