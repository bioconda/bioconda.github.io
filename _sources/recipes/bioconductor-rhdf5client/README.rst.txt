.. title:: Package Recipe 'bioconductor-rhdf5client'
.. highlight: bash


bioconductor-rhdf5client
========================

.. conda:recipe:: bioconductor-rhdf5client
   :replaces_section_title:

   Provides functionality for reading data from h5serv server from within R.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rhdf5client.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5client/meta.yaml>`_

   


.. conda:package:: bioconductor-rhdf5client

   |downloads_bioconductor-rhdf5client| |docker_bioconductor-rhdf5client|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-delayedarray` >=0.8.0,<0.9.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httr`  :conda:package:`r-r6`  :conda:package:`r-rjson`  

   :required~by: |required_by_bioconductor-rhdf5client|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhdf5client

   and update with::

      conda update bioconductor-rhdf5client

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rhdf5client


.. |required_by_bioconductor-rhdf5client| conda:required_by:: bioconductor-rhdf5client
.. |downloads_bioconductor-rhdf5client| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5client.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5client| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5client/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5client







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5client/README.html

