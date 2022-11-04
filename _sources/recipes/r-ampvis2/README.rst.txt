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

         <details><summary><span class="truncated-version-list"><code>2.7.29-1</code>,  <code>2.7.29-0</code>,  <code>2.7.27-0</code>,  <code>2.7.26-0</code>,  <code>2.7.24-0</code>,  <code>2.7.22-0</code>,  <code>2.7.21-0</code>,  <code>2.7.17-1</code>,  <code>2.7.17-0</code>,  </span></summary>
      

      ``2.7.29-1``,  ``2.7.29-0``,  ``2.7.27-0``,  ``2.7.26-0``,  ``2.7.24-0``,  ``2.7.22-0``,  ``2.7.21-0``,  ``2.7.17-1``,  ``2.7.17-0``,  ``2.7.12-1``,  ``2.7.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomformat: 
   :depends parallel: 
   :depends r-ape: 
   :depends r-base: ``>=4.2,<4.3.0a0``
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

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ampvis2

   and update with::

      conda update r-ampvis2

   or use the docker container::

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
        var versions = ["2.7.29","2.7.29","2.7.27","2.7.26","2.7.24"];
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