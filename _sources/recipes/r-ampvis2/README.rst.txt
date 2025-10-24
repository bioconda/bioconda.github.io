:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ampvis2'
.. highlight: bash

r-ampvis2
=========

.. conda:recipe:: r-ampvis2
   :replaces_section_title:
   :noindex:

   Tools for visualising amplicon data

   :homepage: https://github.com/MadsAlbertsen/ampvis2
   :license: AGPL-3.0-only
   :recipe: /`r-ampvis2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis2/meta.yaml>`_

   


.. conda:package:: r-ampvis2

   |downloads_r-ampvis2| |docker_r-ampvis2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.10-0</code>,  <code>2.8.9-1</code>,  <code>2.8.9-0</code>,  <code>2.8.6-0</code>,  <code>2.7.32-2</code>,  <code>2.7.32-1</code>,  <code>2.7.32-0</code>,  <code>2.7.29-1</code>,  <code>2.7.29-0</code>,  </span></summary>
      

      ``2.8.10-0``,  ``2.8.9-1``,  ``2.8.9-0``,  ``2.8.6-0``,  ``2.7.32-2``,  ``2.7.32-1``,  ``2.7.32-0``,  ``2.7.29-1``,  ``2.7.29-0``,  ``2.7.27-0``,  ``2.7.26-0``,  ``2.7.24-0``,  ``2.7.22-0``,  ``2.7.21-0``,  ``2.7.17-1``,  ``2.7.17-0``,  ``2.7.12-1``,  ``2.7.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomformat: 
   :depends parallel: 
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-crayon: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-network: 
   :depends r-patchwork: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-sna: 
   :depends r-stringr: 
   :depends r-svglite: 
   :depends r-tidyr: 
   :depends r-vegan: 
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

      mamba install r-ampvis2

   and update with::

      mamba update r-ampvis2

  To create a new environment, run::

      mamba create --name myenvname r-ampvis2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ampvis2:<tag>

   (see `r-ampvis2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ampvis2| image:: https://img.shields.io/conda/dn/bioconda/r-ampvis2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ampvis2
   :alt:   (downloads)
.. |docker_r-ampvis2| image:: https://quay.io/repository/biocontainers/r-ampvis2/status
   :target: https://quay.io/repository/biocontainers/r-ampvis2
.. _`r-ampvis2/tags`: https://quay.io/repository/biocontainers/r-ampvis2?tab=tags


.. raw:: html

    <script>
        var package = "r-ampvis2";
        var versions = ["2.8.10","2.8.9","2.8.9","2.8.6","2.7.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ampvis2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ampvis2/README.html