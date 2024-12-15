:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-olingui'
.. highlight: bash

bioconductor-olingui
====================

.. conda:recipe:: bioconductor-olingui
   :replaces_section_title:
   :noindex:

   Graphical user interface for OLIN

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/OLINgui.html
   :license: GPL-2
   :recipe: /`bioconductor-olingui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-olingui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-olingui/meta.yaml>`_

   Graphical user interface for the OLIN package


.. conda:package:: bioconductor-olingui

   |downloads_bioconductor-olingui| |docker_bioconductor-olingui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-marray: ``>=1.84.0,<1.85.0``
   :depends bioconductor-olin: ``>=1.84.0,<1.85.0``
   :depends bioconductor-tkwidgets: ``>=1.84.0,<1.85.0``
   :depends bioconductor-widgettools: ``>=1.84.0,<1.85.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-olingui

   and update with::

      mamba update bioconductor-olingui

  To create a new environment, run::

      mamba create --name myenvname bioconductor-olingui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-olingui:<tag>

   (see `bioconductor-olingui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-olingui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-olingui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-olingui
   :alt:   (downloads)
.. |docker_bioconductor-olingui| image:: https://quay.io/repository/biocontainers/bioconductor-olingui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-olingui
.. _`bioconductor-olingui/tags`: https://quay.io/repository/biocontainers/bioconductor-olingui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-olingui";
        var versions = ["1.80.0","1.76.0","1.74.0","1.72.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-olingui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-olingui/README.html