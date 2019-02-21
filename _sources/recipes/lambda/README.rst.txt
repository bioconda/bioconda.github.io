:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lambda'
.. highlight: bash

lambda
======

.. conda:recipe:: lambda
   :replaces_section_title:

   Lambda is a local aligner optimized for many query sequences and searches in protein space

   :homepage: http://seqan.github.io/lambda/
   :license: AGPLv3
   :recipe: /`lambda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lambda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lambda/meta.yaml>`_

   


.. conda:package:: lambda

   |downloads_lambda| |docker_lambda|

   :versions: 1.0.3-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lambda

   and update with::

      conda update lambda

   or use the docker container::

      docker pull quay.io/biocontainers/lambda:<tag>

   (see `lambda/tags`_ for valid values for ``<tag>``)


.. |downloads_lambda| image:: https://img.shields.io/conda/dn/bioconda/lambda.svg?style=flat
   :alt:   (downloads)
.. |docker_lambda| image:: https://quay.io/repository/biocontainers/lambda/status
   :target: https://quay.io/repository/biocontainers/lambda
.. _`lambda/tags`: https://quay.io/repository/biocontainers/lambda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lambda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lambda/README.html