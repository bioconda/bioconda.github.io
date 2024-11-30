:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-openprimerui'
.. highlight: bash

bioconductor-openprimerui
=========================

.. conda:recipe:: bioconductor-openprimerui
   :replaces_section_title:
   :noindex:

   Shiny Application for Multiplex PCR Primer Design and Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/openPrimeRui.html
   :license: GPL-2
   :recipe: /`bioconductor-openprimerui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimerui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimerui/meta.yaml>`_

   A Shiny application providing methods for designing\, evaluating\, and comparing primer sets for multiplex polymerase chain reaction. Primers are designed by solving a set cover problem such that the number of covered template sequences is maximized with the smallest possible set of primers. To guarantee that high\-quality primers are generated\, only primers fulfilling constraints on their physicochemical properties are selected.


.. conda:package:: bioconductor-openprimerui

   |downloads_bioconductor-openprimerui| |docker_bioconductor-openprimerui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-openprimer: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: ``>=0.2``
   :depends r-rmarkdown: ``>=1.0``
   :depends r-shiny: ``>=1.0.2``
   :depends r-shinybs: ``>=0.61``
   :depends r-shinyjs: ``>=0.9``
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

      mamba install bioconductor-openprimerui

   and update with::

      mamba update bioconductor-openprimerui

  To create a new environment, run::

      mamba create --name myenvname bioconductor-openprimerui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-openprimerui:<tag>

   (see `bioconductor-openprimerui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-openprimerui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-openprimerui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-openprimerui
   :alt:   (downloads)
.. |docker_bioconductor-openprimerui| image:: https://quay.io/repository/biocontainers/bioconductor-openprimerui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-openprimerui
.. _`bioconductor-openprimerui/tags`: https://quay.io/repository/biocontainers/bioconductor-openprimerui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-openprimerui";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-openprimerui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-openprimerui/README.html