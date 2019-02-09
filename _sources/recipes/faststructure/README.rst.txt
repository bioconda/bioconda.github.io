.. title:: Package Recipe 'faststructure'
.. highlight: bash


faststructure
=============

.. conda:recipe:: faststructure
   :replaces_section_title:

   A variational framework for inferring population structure from SNP genotype data.

   :homepage: https://github.com/rajanil/fastStructure
   :license: MIT / MIT
   :recipe: /`faststructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faststructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faststructure/meta.yaml>`_

   


.. conda:package:: faststructure

   |downloads_faststructure| |docker_faststructure|

   :versions: 1.0

   :depends: :conda:package:`cython` <0.28 :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  

   :required~by: |required_by_faststructure|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install faststructure

   and update with::

      conda update faststructure

   or use the docker container::

      docker pull quay.io/repository/biocontainers/faststructure


.. |required_by_faststructure| conda:required_by:: faststructure
.. |downloads_faststructure| image:: https://img.shields.io/conda/dn/bioconda/faststructure.svg?style=flat
   :alt:   (downloads)
.. |docker_faststructure| image:: https://quay.io/repository/biocontainers/faststructure/status
   :target: https://quay.io/repository/biocontainers/faststructure







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/faststructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/faststructure/README.html

