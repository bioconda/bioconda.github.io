:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'submission-tool-validator'
.. highlight: bash

submission-tool-validator
=========================

.. conda:recipe:: submission-tool-validator
   :replaces_section_title:
   :noindex:

   This tool helps user to validate submissions in the client side before submitting to PRIDE.

   :homepage: https://github.com/bigbio/submission-tool-validator
   :license: Apache / Apache-2.0
   :recipe: /`submission-tool-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-tool-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-tool-validator/meta.yaml>`_

   


.. conda:package:: submission-tool-validator

   |downloads_submission-tool-validator| |docker_submission-tool-validator|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install submission-tool-validator

   and update with::

      conda update submission-tool-validator

   or use the docker container::

      docker pull quay.io/biocontainers/submission-tool-validator:<tag>

   (see `submission-tool-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_submission-tool-validator| image:: https://img.shields.io/conda/dn/bioconda/submission-tool-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/submission-tool-validator
   :alt:   (downloads)
.. |docker_submission-tool-validator| image:: https://quay.io/repository/biocontainers/submission-tool-validator/status
   :target: https://quay.io/repository/biocontainers/submission-tool-validator
.. _`submission-tool-validator/tags`: https://quay.io/repository/biocontainers/submission-tool-validator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/submission-tool-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/submission-tool-validator/README.html