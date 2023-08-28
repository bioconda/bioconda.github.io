:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swathxtend'
.. highlight: bash

bioconductor-swathxtend
=======================

.. conda:recipe:: bioconductor-swathxtend
   :replaces_section_title:
   :noindex:

   SWATH extended library generation and statistical data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SwathXtend.html
   :license: GPL-2
   :recipe: /`bioconductor-swathxtend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swathxtend/meta.yaml>`_
   :links: biotools: :biotools:`swathxtend`, doi: :doi:`10.1074/mcp.M115.055558`

   Contains utility functions for integrating spectral libraries for SWATH and statistical data analysis for SWATH generated data.


.. conda:package:: bioconductor-swathxtend

   |downloads_bioconductor-swathxtend| |docker_bioconductor-swathxtend|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-lattice: 
   :depends r-openxlsx: 
   :depends r-venndiagram: 
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

      mamba install bioconductor-swathxtend

   and update with::

      mamba update bioconductor-swathxtend

  To create a new environment, run::

      mamba create --name myenvname bioconductor-swathxtend

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-swathxtend:<tag>

   (see `bioconductor-swathxtend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-swathxtend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swathxtend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swathxtend
   :alt:   (downloads)
.. |docker_bioconductor-swathxtend| image:: https://quay.io/repository/biocontainers/bioconductor-swathxtend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swathxtend
.. _`bioconductor-swathxtend/tags`: https://quay.io/repository/biocontainers/bioconductor-swathxtend?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-swathxtend";
        var versions = ["2.22.0","2.20.0","2.16.0","2.14.0","2.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swathxtend/README.html