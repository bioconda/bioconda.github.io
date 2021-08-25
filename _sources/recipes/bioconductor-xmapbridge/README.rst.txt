:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xmapbridge'
.. highlight: bash

bioconductor-xmapbridge
=======================

.. conda:recipe:: bioconductor-xmapbridge
   :replaces_section_title:
   :noindex:

   Export plotting files to the xmapBridge for visualisation in X\:Map

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/xmapbridge.html
   :license: LGPL-3
   :recipe: /`bioconductor-xmapbridge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xmapbridge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xmapbridge/meta.yaml>`_
   :links: biotools: :biotools:`xmapbridge`

   xmapBridge can plot graphs in the X\:Map genome browser. This package exports plotting files in a suitable format.


.. conda:package:: bioconductor-xmapbridge

   |downloads_bioconductor-xmapbridge| |docker_bioconductor-xmapbridge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xmapbridge

   and update with::

      conda update bioconductor-xmapbridge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xmapbridge:<tag>

   (see `bioconductor-xmapbridge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xmapbridge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xmapbridge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xmapbridge
   :alt:   (downloads)
.. |docker_bioconductor-xmapbridge| image:: https://quay.io/repository/biocontainers/bioconductor-xmapbridge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xmapbridge
.. _`bioconductor-xmapbridge/tags`: https://quay.io/repository/biocontainers/bioconductor-xmapbridge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xmapbridge";
        var versions = ["1.50.0","1.48.0","1.48.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xmapbridge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xmapbridge/README.html