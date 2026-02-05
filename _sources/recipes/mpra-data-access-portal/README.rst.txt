:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpra-data-access-portal'
.. highlight: bash

mpra-data-access-portal
=======================

.. conda:recipe:: mpra-data-access-portal
   :replaces_section_title:
   :noindex:

   Saturation mutagenesis MPRA data access portal.

   :homepage: https://mpra.gs.washington.edu/satMutMPRA
   :license: MIT
   :recipe: /`mpra-data-access-portal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpra-data-access-portal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpra-data-access-portal/meta.yaml>`_

   


.. conda:package:: mpra-data-access-portal

   |downloads_mpra-data-access-portal| |docker_mpra-data-access-portal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.11-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-3</code>,  <code>0.1.8-2</code>,  <code>0.1.8-1</code>,  <code>0.1.8-0</code>,  <code>0.1.7-2</code>,  <code>0.1.7-1</code>,  </span></summary>
      

      ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-3``,  ``0.1.8-2``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-markdown: 
   :depends r-plotly: 
   :depends r-readr: 
   :depends r-shiny: 
   :depends r-shinyvalidate: 
   :depends r-stringr: 
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

      mamba install mpra-data-access-portal

   and update with::

      mamba update mpra-data-access-portal

  To create a new environment, run::

      mamba create --name myenvname mpra-data-access-portal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mpra-data-access-portal:<tag>

   (see `mpra-data-access-portal/tags`_ for valid values for ``<tag>``)


.. |downloads_mpra-data-access-portal| image:: https://img.shields.io/conda/dn/bioconda/mpra-data-access-portal.svg?style=flat
   :target: https://anaconda.org/bioconda/mpra-data-access-portal
   :alt:   (downloads)
.. |docker_mpra-data-access-portal| image:: https://quay.io/repository/biocontainers/mpra-data-access-portal/status
   :target: https://quay.io/repository/biocontainers/mpra-data-access-portal
.. _`mpra-data-access-portal/tags`: https://quay.io/repository/biocontainers/mpra-data-access-portal?tab=tags


.. raw:: html

    <script>
        var package = "mpra-data-access-portal";
        var versions = ["0.1.11","0.1.10","0.1.9","0.1.8","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpra-data-access-portal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpra-data-access-portal/README.html