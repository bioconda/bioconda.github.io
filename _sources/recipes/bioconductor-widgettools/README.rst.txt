:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-widgettools'
.. highlight: bash

bioconductor-widgettools
========================

.. conda:recipe:: bioconductor-widgettools
   :replaces_section_title:
   :noindex:

   Creates an interactive tcltk widget

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/widgetTools.html
   :license: LGPL
   :recipe: /`bioconductor-widgettools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-widgettools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-widgettools/meta.yaml>`_

   This packages contains tools to support the construction of tcltk widgets


.. conda:package:: bioconductor-widgettools

   |downloads_bioconductor-widgettools| |docker_bioconductor-widgettools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-widgettools

   and update with::

      mamba update bioconductor-widgettools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-widgettools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-widgettools:<tag>

   (see `bioconductor-widgettools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-widgettools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-widgettools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-widgettools
   :alt:   (downloads)
.. |docker_bioconductor-widgettools| image:: https://quay.io/repository/biocontainers/bioconductor-widgettools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-widgettools
.. _`bioconductor-widgettools/tags`: https://quay.io/repository/biocontainers/bioconductor-widgettools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-widgettools";
        var versions = ["1.78.0","1.76.0","1.72.0","1.70.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-widgettools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-widgettools/README.html