:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowplots'
.. highlight: bash

bioconductor-flowplots
======================

.. conda:recipe:: bioconductor-flowplots
   :replaces_section_title:
   :noindex:

   flowPlots\: analysis plots and data class for gated flow cytometry data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/flowPlots.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowplots/meta.yaml>`_

   Graphical displays with embedded statistical tests for gated ICS flow cytometry data\, and a data class which stores \"stacked\" data and has methods for computing summary measures on stacked data\, such as marginal and polyfunctional degree data.


.. conda:package:: bioconductor-flowplots

   |downloads_bioconductor-flowplots| |docker_bioconductor-flowplots|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.1-0``

      
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

      mamba install bioconductor-flowplots

   and update with::

      mamba update bioconductor-flowplots

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowplots

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowplots:<tag>

   (see `bioconductor-flowplots/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowplots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowplots.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowplots
   :alt:   (downloads)
.. |docker_bioconductor-flowplots| image:: https://quay.io/repository/biocontainers/bioconductor-flowplots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowplots
.. _`bioconductor-flowplots/tags`: https://quay.io/repository/biocontainers/bioconductor-flowplots?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowplots";
        var versions = ["1.48.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowplots/README.html