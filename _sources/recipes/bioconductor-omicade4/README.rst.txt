:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicade4'
.. highlight: bash

bioconductor-omicade4
=====================

.. conda:recipe:: bioconductor-omicade4
   :replaces_section_title:
   :noindex:

   Multiple co\-inertia analysis of omics datasets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/omicade4.html
   :license: GPL-2
   :recipe: /`bioconductor-omicade4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicade4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicade4/meta.yaml>`_
   :links: biotools: :biotools:`omicade4`

   This package performes multiple co\-inertia analysis of omics datasets.


.. conda:package:: bioconductor-omicade4

   |downloads_bioconductor-omicade4| |docker_bioconductor-omicade4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-made4: ``>=1.76.0,<1.77.0``
   :depends r-ade4: 
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

      mamba install bioconductor-omicade4

   and update with::

      mamba update bioconductor-omicade4

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omicade4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicade4:<tag>

   (see `bioconductor-omicade4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicade4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicade4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicade4
   :alt:   (downloads)
.. |docker_bioconductor-omicade4| image:: https://quay.io/repository/biocontainers/bioconductor-omicade4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicade4
.. _`bioconductor-omicade4/tags`: https://quay.io/repository/biocontainers/bioconductor-omicade4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicade4";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicade4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicade4/README.html