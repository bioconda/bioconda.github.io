:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gaggle'
.. highlight: bash

bioconductor-gaggle
===================

.. conda:recipe:: bioconductor-gaggle
   :replaces_section_title:
   :noindex:

   Broadcast data between R and Gaggle

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gaggle.html
   :license: GPL version 2 or newer
   :recipe: /`bioconductor-gaggle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaggle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaggle/meta.yaml>`_

   This package contains functions enabling data exchange between R and Gaggle enabled bioinformatics software\, including Cytoscape\, Firegoose and Gaggle Genome Browser.


.. conda:package:: bioconductor-gaggle

   |downloads_bioconductor-gaggle| |docker_bioconductor-gaggle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rjava: ``>=0.4``
   :depends r-runit: ``>=0.4.17``
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

      mamba install bioconductor-gaggle

   and update with::

      mamba update bioconductor-gaggle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gaggle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gaggle:<tag>

   (see `bioconductor-gaggle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gaggle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gaggle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gaggle
   :alt:   (downloads)
.. |docker_bioconductor-gaggle| image:: https://quay.io/repository/biocontainers/bioconductor-gaggle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gaggle
.. _`bioconductor-gaggle/tags`: https://quay.io/repository/biocontainers/bioconductor-gaggle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gaggle";
        var versions = ["1.70.0","1.68.0","1.66.0","1.62.0","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gaggle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gaggle/README.html