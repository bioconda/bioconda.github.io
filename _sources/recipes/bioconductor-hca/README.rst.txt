:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hca'
.. highlight: bash

bioconductor-hca
================

.. conda:recipe:: bioconductor-hca
   :replaces_section_title:
   :noindex:

   Exploring the Human Cell Atlas Data Coordinating Platform

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/hca.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hca/meta.yaml>`_

   This package provides users with the ability to query the Human Cell Atlas data repository for single\-cell experiment data. The \`projects\(\)\`\, \`files\(\)\`\, \`samples\(\)\` and \`bundles\(\)\` functions retrieve summary information on each of these indexes\; corresponding \`\*\_details\(\)\` are available for individual entries of each index. File\-based resources can be downloaded using \`files\_download\(\)\`. Advanced use of the package allows the user to page through large result sets\, and to flexibly query the \'list\-of\-lists\' structure representing query responses.


.. conda:package:: bioconductor-hca

   |downloads_bioconductor-hca| |docker_bioconductor-hca|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-readr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hca

   and update with::

      conda update bioconductor-hca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hca:<tag>

   (see `bioconductor-hca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hca
   :alt:   (downloads)
.. |docker_bioconductor-hca| image:: https://quay.io/repository/biocontainers/bioconductor-hca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hca
.. _`bioconductor-hca/tags`: https://quay.io/repository/biocontainers/bioconductor-hca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hca";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hca/README.html