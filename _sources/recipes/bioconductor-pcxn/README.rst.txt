:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcxn'
.. highlight: bash

bioconductor-pcxn
=================

.. conda:recipe:: bioconductor-pcxn
   :replaces_section_title:
   :noindex:

   Exploring\, analyzing and visualizing functions utilizing the pcxnData package

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pcxn.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pcxn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxn/meta.yaml>`_

   Discover the correlated pathways\/gene sets of a single pathway\/gene set or discover correlation relationships among multiple pathways\/gene sets. Draw a heatmap or create a network of your query and extract members of each pathway\/gene set found in the available collections \(MSigDB H hallmark\, MSigDB C2 Canonical pathways\, MSigDB C5 GO BP and Pathprint\).


.. conda:package:: bioconductor-pcxn

   |downloads_bioconductor-pcxn| |docker_bioconductor-pcxn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-2</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-2``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-pcxndata: ``>=2.24.0,<2.25.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-pheatmap: 
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

      mamba install bioconductor-pcxn

   and update with::

      mamba update bioconductor-pcxn

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pcxn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcxn:<tag>

   (see `bioconductor-pcxn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcxn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcxn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcxn
   :alt:   (downloads)
.. |docker_bioconductor-pcxn| image:: https://quay.io/repository/biocontainers/bioconductor-pcxn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcxn
.. _`bioconductor-pcxn/tags`: https://quay.io/repository/biocontainers/bioconductor-pcxn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pcxn";
        var versions = ["2.24.0","2.22.0","2.20.0","2.16.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcxn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcxn/README.html