:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowbeads'
.. highlight: bash

bioconductor-flowbeads
======================

.. conda:recipe:: bioconductor-flowbeads
   :replaces_section_title:
   :noindex:

   flowBeads\: Analysis of flow bead data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/flowBeads.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowbeads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowbeads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowbeads/meta.yaml>`_
   :links: biotools: :biotools:`flowbeads`, doi: :doi:`10.1038/nmeth.3252`

   This package extends flowCore to provide functionality specific to bead data. One of the goals of this package is to automate analysis of bead data for the purpose of normalisation.


.. conda:package:: bioconductor-flowbeads

   |downloads_bioconductor-flowbeads| |docker_bioconductor-flowbeads|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-knitr: 
   :depends r-rrcov: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowbeads

   and update with::

      conda update bioconductor-flowbeads

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowbeads:<tag>

   (see `bioconductor-flowbeads/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowbeads| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowbeads.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowbeads
   :alt:   (downloads)
.. |docker_bioconductor-flowbeads| image:: https://quay.io/repository/biocontainers/bioconductor-flowbeads/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowbeads
.. _`bioconductor-flowbeads/tags`: https://quay.io/repository/biocontainers/bioconductor-flowbeads?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowbeads";
        var versions = ["1.32.0","1.30.0","1.28.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowbeads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowbeads/README.html