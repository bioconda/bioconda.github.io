:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-otubase'
.. highlight: bash

bioconductor-otubase
====================

.. conda:recipe:: bioconductor-otubase
   :replaces_section_title:
   :noindex:

   Provides structure and functions for the analysis of OTU data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/OTUbase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-otubase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-otubase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-otubase/meta.yaml>`_
   :links: biotools: :biotools:`otubase`, doi: :doi:`10.1093/bioinformatics/btr196`

   Provides a platform for Operational Taxonomic Unit based analysis


.. conda:package:: bioconductor-otubase

   |downloads_bioconductor-otubase| |docker_bioconductor-otubase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-shortread: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-otubase

   and update with::

      conda update bioconductor-otubase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-otubase:<tag>

   (see `bioconductor-otubase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-otubase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-otubase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-otubase
   :alt:   (downloads)
.. |docker_bioconductor-otubase| image:: https://quay.io/repository/biocontainers/bioconductor-otubase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-otubase
.. _`bioconductor-otubase/tags`: https://quay.io/repository/biocontainers/bioconductor-otubase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-otubase";
        var versions = ["1.44.0","1.42.0","1.40.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-otubase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-otubase/README.html