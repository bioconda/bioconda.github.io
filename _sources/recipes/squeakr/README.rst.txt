.. title:: Package Recipe 'squeakr'
.. highlight: bash


squeakr
=======

.. conda:recipe:: squeakr
   :replaces_section_title:

   An Exact and Approximate k\-mer Counting System

   :homepage: https://github.com/splatlab/squeakr
   :license: BSD / BSD-3-Clause
   :recipe: /`squeakr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeakr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeakr/meta.yaml>`_

   


.. conda:package:: squeakr

   |downloads_squeakr| |docker_squeakr|

   :versions: 0.5

   :depends: :conda:package:`boost` 1.64* :conda:package:`bzip2`  :conda:package:`openssl`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_squeakr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install squeakr

   and update with::

      conda update squeakr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/squeakr


.. |required_by_squeakr| conda:required_by:: squeakr
.. |downloads_squeakr| image:: https://img.shields.io/conda/dn/bioconda/squeakr.svg?style=flat
   :alt:   (downloads)
.. |docker_squeakr| image:: https://quay.io/repository/biocontainers/squeakr/status
   :target: https://quay.io/repository/biocontainers/squeakr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squeakr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squeakr/README.html

