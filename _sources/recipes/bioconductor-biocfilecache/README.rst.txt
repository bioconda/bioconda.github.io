:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocfilecache'
.. highlight: bash

bioconductor-biocfilecache
==========================

.. conda:recipe:: bioconductor-biocfilecache
   :replaces_section_title:
   :noindex:

   Manage Files Across Sessions

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocFileCache.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocfilecache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocfilecache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocfilecache/meta.yaml>`_

   This package creates a persistent on\-disk cache of files that the user can add\, update\, and retrieve. It is useful for managing resources \(such as custom Txdb objects\) that are costly or difficult to create\, web resources\, and data files used across sessions.


.. conda:package:: bioconductor-biocfilecache

   |downloads_bioconductor-biocfilecache| |docker_bioconductor-biocfilecache|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-dbi: 
   :depends r-dbplyr: ``>=1.0.0``
   :depends r-dplyr: 
   :depends r-filelock: 
   :depends r-httr: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocfilecache

   and update with::

      conda update bioconductor-biocfilecache

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocfilecache:<tag>

   (see `bioconductor-biocfilecache/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocfilecache| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocfilecache.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocfilecache
   :alt:   (downloads)
.. |docker_bioconductor-biocfilecache| image:: https://quay.io/repository/biocontainers/bioconductor-biocfilecache/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocfilecache
.. _`bioconductor-biocfilecache/tags`: https://quay.io/repository/biocontainers/bioconductor-biocfilecache?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocfilecache";
        var versions = ["2.8.0","2.6.0","2.2.0","2.0.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocfilecache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocfilecache/README.html