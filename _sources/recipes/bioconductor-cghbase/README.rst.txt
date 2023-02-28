:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghbase'
.. highlight: bash

bioconductor-cghbase
====================

.. conda:recipe:: bioconductor-cghbase
   :replaces_section_title:
   :noindex:

   CGHbase\: Base functions and classes for arrayCGH data analysis.

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/CGHbase.html
   :license: GPL
   :recipe: /`bioconductor-cghbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghbase/meta.yaml>`_
   :links: biotools: :biotools:`cghbase`, doi: :doi:`10.1016/j.ejmg.2005.10.046`

   Contains functions and classes that are needed by arrayCGH packages.


.. conda:package:: bioconductor-cghbase

   |downloads_bioconductor-cghbase| |docker_bioconductor-cghbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-marray: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cghbase

   and update with::

      conda update bioconductor-cghbase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghbase:<tag>

   (see `bioconductor-cghbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghbase
   :alt:   (downloads)
.. |docker_bioconductor-cghbase| image:: https://quay.io/repository/biocontainers/bioconductor-cghbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghbase
.. _`bioconductor-cghbase/tags`: https://quay.io/repository/biocontainers/bioconductor-cghbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cghbase";
        var versions = ["1.58.0","1.54.0","1.52.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghbase/README.html