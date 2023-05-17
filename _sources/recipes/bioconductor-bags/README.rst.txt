:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bags'
.. highlight: bash

bioconductor-bags
=================

.. conda:recipe:: bioconductor-bags
   :replaces_section_title:
   :noindex:

   A Bayesian Approach for Geneset Selection

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BAGS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bags <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bags>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bags/meta.yaml>`_

   R package providing functions to perform geneset significance analysis over simple cross\-sectional data between 2 and 5 phenotypes of interest.


.. conda:package:: bioconductor-bags

   |downloads_bioconductor-bags| |docker_bioconductor-bags|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.38.0-1</code>,  <code>2.38.0-0</code>,  <code>2.34.0-2</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-2</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  </span></summary>
      

      ``2.38.0-1``,  ``2.38.0-0``,  ``2.34.0-2``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-2``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.24.0-1``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-breastcancervdx: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bags

   and update with::

      conda update bioconductor-bags

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bags:<tag>

   (see `bioconductor-bags/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bags| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bags.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bags
   :alt:   (downloads)
.. |docker_bioconductor-bags| image:: https://quay.io/repository/biocontainers/bioconductor-bags/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bags
.. _`bioconductor-bags/tags`: https://quay.io/repository/biocontainers/bioconductor-bags?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bags";
        var versions = ["2.38.0","2.38.0","2.34.0","2.34.0","2.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bags/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bags/README.html