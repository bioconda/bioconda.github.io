:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioccheck'
.. highlight: bash

bioconductor-bioccheck
======================

.. conda:recipe:: bioconductor-bioccheck
   :replaces_section_title:
   :noindex:

   Bioconductor\-specific package checks

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BiocCheck.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioccheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioccheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioccheck/meta.yaml>`_

   BiocCheck guides maintainers through Bioconductor best practicies. It runs Bioconductor\-specific package checks by searching through package code\, examples\, and vignettes. Maintainers are required to address all errors\, warnings\, and most notes produced.


.. conda:package:: bioconductor-bioccheck

   |downloads_bioconductor-bioccheck| |docker_bioconductor-bioccheck|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.1-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.36.1-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocviews: ``>=1.68.0,<1.69.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-codetools: 
   :depends r-httr: 
   :depends r-knitr: 
   :depends r-stringdist: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioccheck

   and update with::

      conda update bioconductor-bioccheck

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioccheck:<tag>

   (see `bioconductor-bioccheck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioccheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioccheck.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioccheck
   :alt:   (downloads)
.. |docker_bioconductor-bioccheck| image:: https://quay.io/repository/biocontainers/bioconductor-bioccheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioccheck
.. _`bioconductor-bioccheck/tags`: https://quay.io/repository/biocontainers/bioconductor-bioccheck?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioccheck";
        var versions = ["1.36.1","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioccheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioccheck/README.html