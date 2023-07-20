:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-squadd'
.. highlight: bash

bioconductor-squadd
===================

.. conda:recipe:: bioconductor-squadd
   :replaces_section_title:
   :noindex:

   Add\-on of the SQUAD Software

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SQUADD.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-squadd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-squadd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-squadd/meta.yaml>`_
   :links: biotools: :biotools:`squadd`, doi: :doi:`10.1038/nmeth.3252`

   This package SQUADD is a SQUAD add\-on. It permits to generate SQUAD simulation matrix\, prediction Heat\-Map and Correlation Circle from PCA analysis.


.. conda:package:: bioconductor-squadd

   |downloads_bioconductor-squadd| |docker_bioconductor-squadd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-squadd

   and update with::

      conda update bioconductor-squadd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-squadd:<tag>

   (see `bioconductor-squadd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-squadd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-squadd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-squadd
   :alt:   (downloads)
.. |docker_bioconductor-squadd| image:: https://quay.io/repository/biocontainers/bioconductor-squadd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-squadd
.. _`bioconductor-squadd/tags`: https://quay.io/repository/biocontainers/bioconductor-squadd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-squadd";
        var versions = ["1.50.0","1.48.0","1.44.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-squadd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-squadd/README.html