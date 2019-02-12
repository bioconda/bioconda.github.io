.. title:: Package Recipe 'ucsc-genepredfilter'
.. highlight: bash


ucsc-genepredfilter
===================

.. conda:recipe:: ucsc-genepredfilter
   :replaces_section_title:

   filter a genePred file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredfilter/meta.yaml>`_

   


.. conda:package:: ucsc-genepredfilter

   |downloads_ucsc-genepredfilter| |docker_ucsc-genepredfilter|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-genepredfilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredfilter

   and update with::

      conda update ucsc-genepredfilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-genepredfilter


.. |required_by_ucsc-genepredfilter| conda:required_by:: ucsc-genepredfilter
.. |downloads_ucsc-genepredfilter| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredfilter.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-genepredfilter| image:: https://quay.io/repository/biocontainers/ucsc-genepredfilter/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredfilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredfilter/README.html

