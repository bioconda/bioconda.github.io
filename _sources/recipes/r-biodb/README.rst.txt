:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-biodb'
.. highlight: bash

r-biodb
=======

.. conda:recipe:: r-biodb
   :replaces_section_title:

   An R package for connecting to chemical and biological databases.

   :homepage: https://github.com/pkrog/biodb
   :license: AGPL-3.0
   :recipe: /`r-biodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biodb/meta.yaml>`_

   


.. conda:package:: r-biodb

   |downloads_r-biodb| |docker_r-biodb|

   :versions: 1.2.2-0, 1.2.1-0, 1.2.0-1, 1.2.0rc2-1, 1.2.0rc2-0, 1.2.0a-0, 1.1.0-1, 1.1.0-0, 1.0.2-1, 1.0.2-0
   
   :depends libstdcxx-ng: >=4.9
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bitops: 
   :depends r-digest: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-stringr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-biodb

   and update with::

      conda update r-biodb

   or use the docker container::

      docker pull quay.io/biocontainers/r-biodb:<tag>

   (see `r-biodb/tags`_ for valid values for ``<tag>``)


.. |downloads_r-biodb| image:: https://img.shields.io/conda/dn/bioconda/r-biodb.svg?style=flat
   :alt:   (downloads)
.. |docker_r-biodb| image:: https://quay.io/repository/biocontainers/r-biodb/status
   :target: https://quay.io/repository/biocontainers/r-biodb
.. _`r-biodb/tags`: https://quay.io/repository/biocontainers/r-biodb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biodb/README.html