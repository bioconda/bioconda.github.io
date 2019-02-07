.. title:: Package Recipe 'bioconductor-ndexr'
.. highlight: bash


bioconductor-ndexr
==================

.. conda:recipe:: bioconductor-ndexr
   :replaces_section_title:

   This package offers an interface to NDEx servers\, e.g. the public server at http\:\/\/ndexbio.org\/. It can retrieve and save networks via the API. Networks are offered as RCX object and as igraph representation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ndexr.html
   :license: BSD
   :recipe: /`bioconductor-ndexr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ndexr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ndexr/meta.yaml>`_

   


.. conda:package:: bioconductor-ndexr

   |downloads_bioconductor-ndexr| |docker_bioconductor-ndexr|

   :versions: 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httr`  :conda:package:`r-igraph`  :conda:package:`r-jsonlite`  :conda:package:`r-plyr`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-ndexr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ndexr

   and update with::

      conda update bioconductor-ndexr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ndexr


.. |required_by_bioconductor-ndexr| conda:required_by:: bioconductor-ndexr
.. |downloads_bioconductor-ndexr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ndexr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ndexr| image:: https://quay.io/repository/biocontainers/bioconductor-ndexr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ndexr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ndexr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ndexr/README.html

