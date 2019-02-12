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

   :versions: 1.2.2, 1.2.1, 1.2.0, 1.2.0rc2, 1.2.0a, 1.1.0, 1.0.2

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bitops`  :conda:package:`r-digest`  :conda:package:`r-jsonlite`  :conda:package:`r-plyr`  :conda:package:`r-r.utils`  :conda:package:`r-rcpp`  :conda:package:`r-rcurl`  :conda:package:`r-stringr`  :conda:package:`r-xml`  

   :required~by: |required_by_r-biodb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-biodb

   and update with::

      conda update r-biodb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-biodb


.. |required_by_r-biodb| conda:required_by:: r-biodb
.. |downloads_r-biodb| image:: https://img.shields.io/conda/dn/bioconda/r-biodb.svg?style=flat
   :alt:   (downloads)
.. |docker_r-biodb| image:: https://quay.io/repository/biocontainers/r-biodb/status
   :target: https://quay.io/repository/biocontainers/r-biodb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biodb/README.html

