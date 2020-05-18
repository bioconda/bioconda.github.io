:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ndexr'
.. highlight: bash

bioconductor-ndexr
==================

.. conda:recipe:: bioconductor-ndexr
   :replaces_section_title:

   NDEx R client library

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ndexr.html
   :license: BSD
   :recipe: /`bioconductor-ndexr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ndexr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ndexr/meta.yaml>`_

   This package offers an interface to NDEx servers\, e.g. the public server at http\:\/\/ndexbio.org\/. It can retrieve and save networks via the API. Networks are offered as RCX object and as igraph representation.


.. conda:package:: bioconductor-ndexr

   |downloads_bioconductor-ndexr| |docker_bioconductor-ndexr|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-1, 1.6.0-0, 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ndexr

   and update with::

      conda update bioconductor-ndexr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ndexr:<tag>

   (see `bioconductor-ndexr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ndexr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ndexr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ndexr
   :alt:   (downloads)
.. |docker_bioconductor-ndexr| image:: https://quay.io/repository/biocontainers/bioconductor-ndexr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ndexr
.. _`bioconductor-ndexr/tags`: https://quay.io/repository/biocontainers/bioconductor-ndexr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ndexr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ndexr/README.html