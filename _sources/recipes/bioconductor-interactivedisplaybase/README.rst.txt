:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interactivedisplaybase'
.. highlight: bash

bioconductor-interactivedisplaybase
===================================

.. conda:recipe:: bioconductor-interactivedisplaybase
   :replaces_section_title:
   :noindex:

   Base package for enabling powerful shiny web displays of Bioconductor objects

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/interactiveDisplayBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-interactivedisplaybase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplaybase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplaybase/meta.yaml>`_
   :links: biotools: :biotools:`interactivedisplaybase`, doi: :doi:`10.1038/nmeth.3252`

   The interactiveDisplayBase package contains the the basic methods needed to generate interactive Shiny based display methods for Bioconductor objects.


.. conda:package:: bioconductor-interactivedisplaybase

   |downloads_bioconductor-interactivedisplaybase| |docker_bioconductor-interactivedisplaybase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interactivedisplaybase

   and update with::

      conda update bioconductor-interactivedisplaybase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interactivedisplaybase:<tag>

   (see `bioconductor-interactivedisplaybase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interactivedisplaybase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivedisplaybase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interactivedisplaybase
   :alt:   (downloads)
.. |docker_bioconductor-interactivedisplaybase| image:: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase
.. _`bioconductor-interactivedisplaybase/tags`: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interactivedisplaybase";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivedisplaybase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivedisplaybase/README.html