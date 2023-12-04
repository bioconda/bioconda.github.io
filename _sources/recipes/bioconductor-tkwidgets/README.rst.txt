:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tkwidgets'
.. highlight: bash

bioconductor-tkwidgets
======================

.. conda:recipe:: bioconductor-tkwidgets
   :replaces_section_title:
   :noindex:

   R based tk widgets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tkWidgets.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tkwidgets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tkwidgets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tkwidgets/meta.yaml>`_

   Widgets to provide user interfaces. tcltk should have been installed for the widgets to run.


.. conda:package:: bioconductor-tkwidgets

   |downloads_bioconductor-tkwidgets| |docker_bioconductor-tkwidgets|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dyndoc: ``>=1.80.0,<1.81.0``
   :depends bioconductor-widgettools: ``>=1.80.0,<1.81.0``
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

      mamba install bioconductor-tkwidgets

   and update with::

      mamba update bioconductor-tkwidgets

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tkwidgets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tkwidgets:<tag>

   (see `bioconductor-tkwidgets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tkwidgets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tkwidgets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tkwidgets
   :alt:   (downloads)
.. |docker_bioconductor-tkwidgets| image:: https://quay.io/repository/biocontainers/bioconductor-tkwidgets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tkwidgets
.. _`bioconductor-tkwidgets/tags`: https://quay.io/repository/biocontainers/bioconductor-tkwidgets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tkwidgets";
        var versions = ["1.80.0","1.78.0","1.76.0","1.72.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tkwidgets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tkwidgets/README.html