:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timescape'
.. highlight: bash

bioconductor-timescape
======================

.. conda:recipe:: bioconductor-timescape
   :replaces_section_title:
   :noindex:

   Patient Clonal Timescapes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/timescape.html
   :license: GPL-3
   :recipe: /`bioconductor-timescape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timescape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timescape/meta.yaml>`_

   TimeScape is an automated tool for navigating temporal clonal evolution data. The key attributes of this implementation involve the enumeration of clones\, their evolutionary relationships and their shifting dynamics over time. TimeScape requires two inputs\: \(i\) the clonal phylogeny and \(ii\) the clonal prevalences. Optionally\, TimeScape accepts a data table of targeted mutations observed in each clone and their allele prevalences over time. The output is the TimeScape plot showing clonal prevalence vertically\, time horizontally\, and the plot height optionally encoding tumour volume during tumour\-shrinking events. At each sampling time point \(denoted by a faint white line\)\, the height of each clone accurately reflects its proportionate prevalence. These prevalences form the anchors for bezier curves that visually represent the dynamic transitions between time points.


.. conda:package:: bioconductor-timescape

   |downloads_bioconductor-timescape| |docker_bioconductor-timescape|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.4.3``
   :depends r-gtools: ``>=3.5.0``
   :depends r-htmlwidgets: ``>=0.5``
   :depends r-jsonlite: ``>=0.9.19``
   :depends r-stringr: ``>=1.0.0``
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

      mamba install bioconductor-timescape

   and update with::

      mamba update bioconductor-timescape

  To create a new environment, run::

      mamba create --name myenvname bioconductor-timescape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timescape:<tag>

   (see `bioconductor-timescape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timescape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timescape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timescape
   :alt:   (downloads)
.. |docker_bioconductor-timescape| image:: https://quay.io/repository/biocontainers/bioconductor-timescape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timescape
.. _`bioconductor-timescape/tags`: https://quay.io/repository/biocontainers/bioconductor-timescape?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-timescape";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timescape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timescape/README.html