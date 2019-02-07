.. title:: Package Recipe 'bioconductor-biocfilecache'
.. highlight: bash


bioconductor-biocfilecache
==========================

.. conda:recipe:: bioconductor-biocfilecache
   :replaces_section_title:

   This package creates a persistent on\-disk cache of files that the user can add\, update\, and retrieve. It is useful for managing resources \(such as custom Txdb objects\) that are costly or difficult to create\, web resources\, and data files used across sessions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocFileCache.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocfilecache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocfilecache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocfilecache/meta.yaml>`_

   


.. conda:package:: bioconductor-biocfilecache

   |downloads_bioconductor-biocfilecache| |docker_bioconductor-biocfilecache|

   :versions: 1.6.0, 1.4.0, 1.2.3

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-curl`  :conda:package:`r-dbi`  :conda:package:`r-dbplyr` >=1.0.0 :conda:package:`r-dplyr`  :conda:package:`r-httr`  :conda:package:`r-rappdirs`  :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-biocfilecache|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocfilecache

   and update with::

      conda update bioconductor-biocfilecache

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biocfilecache


.. |required_by_bioconductor-biocfilecache| conda:required_by:: bioconductor-biocfilecache
.. |downloads_bioconductor-biocfilecache| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocfilecache.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocfilecache| image:: https://quay.io/repository/biocontainers/bioconductor-biocfilecache/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocfilecache







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocfilecache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocfilecache/README.html

