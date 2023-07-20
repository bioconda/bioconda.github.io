:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcrma'
.. highlight: bash

bioconductor-gcrma
==================

.. conda:recipe:: bioconductor-gcrma
   :replaces_section_title:
   :noindex:

   Background Adjustment Using Sequence Information

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/gcrma.html
   :license: LGPL
   :recipe: /`bioconductor-gcrma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrma/meta.yaml>`_
   :links: biotools: :biotools:`gcrma`, doi: :doi:`10.1186/1471-2105-9-452`

   Background adjustment using sequence information


.. conda:package:: bioconductor-gcrma

   |downloads_bioconductor-gcrma| |docker_bioconductor-gcrma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.72.0-0</code>,  <code>2.70.0-1</code>,  <code>2.70.0-0</code>,  <code>2.66.0-2</code>,  <code>2.66.0-1</code>,  <code>2.66.0-0</code>,  <code>2.64.0-0</code>,  <code>2.62.0-1</code>,  <code>2.62.0-0</code>,  </span></summary>
      

      ``2.72.0-0``,  ``2.70.0-1``,  ``2.70.0-0``,  ``2.66.0-2``,  ``2.66.0-1``,  ``2.66.0-0``,  ``2.64.0-0``,  ``2.62.0-1``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-affyio: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-xvector: ``>=0.40.0,<0.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcrma

   and update with::

      conda update bioconductor-gcrma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcrma:<tag>

   (see `bioconductor-gcrma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcrma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcrma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcrma
   :alt:   (downloads)
.. |docker_bioconductor-gcrma| image:: https://quay.io/repository/biocontainers/bioconductor-gcrma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcrma
.. _`bioconductor-gcrma/tags`: https://quay.io/repository/biocontainers/bioconductor-gcrma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gcrma";
        var versions = ["2.72.0","2.70.0","2.70.0","2.66.0","2.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcrma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcrma/README.html