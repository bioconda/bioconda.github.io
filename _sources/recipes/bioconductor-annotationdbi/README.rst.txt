:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationdbi'
.. highlight: bash

bioconductor-annotationdbi
==========================

.. conda:recipe:: bioconductor-annotationdbi
   :replaces_section_title:
   :noindex:

   Manipulation of SQLite\-based annotations in Bioconductor

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/AnnotationDbi.html
   :license: Artitic-2.0
   :recipe: /`bioconductor-annotationdbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationdbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationdbi/meta.yaml>`_
   :links: biotools: :biotools:`annotationdbi`, doi: :doi:`10.1038/nmeth.3252`

   Implements a user\-friendly interface for querying SQLite\-based annotation data packages.


.. conda:package:: bioconductor-annotationdbi

   |downloads_bioconductor-annotationdbi| |docker_bioconductor-annotationdbi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.1-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.1-0</code>,  </span></summary>
      

      ``1.56.1-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.1-0``,  ``1.40.0-0``,  ``1.38.2-0``,  ``1.38.0-0``,  ``1.36.2-0``,  ``1.36.0-1``,  ``1.34.4-1``,  ``1.34.4-0``,  ``1.32.3-0``,  ``1.32.2-0``,  ``1.32.0-0``,  ``1.30.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-keggrest: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationdbi

   and update with::

      conda update bioconductor-annotationdbi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationdbi:<tag>

   (see `bioconductor-annotationdbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationdbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationdbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationdbi
   :alt:   (downloads)
.. |docker_bioconductor-annotationdbi| image:: https://quay.io/repository/biocontainers/bioconductor-annotationdbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationdbi
.. _`bioconductor-annotationdbi/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationdbi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotationdbi";
        var versions = ["1.56.1","1.54.0","1.52.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationdbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationdbi/README.html