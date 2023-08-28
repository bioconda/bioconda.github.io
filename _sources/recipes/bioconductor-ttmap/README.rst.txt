:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ttmap'
.. highlight: bash

bioconductor-ttmap
==================

.. conda:recipe:: bioconductor-ttmap
   :replaces_section_title:
   :noindex:

   Two\-Tier Mapper\: a clustering tool based on topological data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TTMap.html
   :license: GPL-2
   :recipe: /`bioconductor-ttmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ttmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ttmap/meta.yaml>`_

   TTMap is a clustering method that groups together samples with the same deviation in comparison to a control group. It is specially useful when the data is small. It is parameter free.


.. conda:package:: bioconductor-ttmap

   |downloads_bioconductor-ttmap| |docker_bioconductor-ttmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorramps: 
   :depends r-rgl: 
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

      mamba install bioconductor-ttmap

   and update with::

      mamba update bioconductor-ttmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ttmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ttmap:<tag>

   (see `bioconductor-ttmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ttmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ttmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ttmap
   :alt:   (downloads)
.. |docker_bioconductor-ttmap| image:: https://quay.io/repository/biocontainers/bioconductor-ttmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ttmap
.. _`bioconductor-ttmap/tags`: https://quay.io/repository/biocontainers/bioconductor-ttmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ttmap";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ttmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ttmap/README.html