:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'validators'
.. highlight: bash

validators
==========

.. conda:recipe:: validators
   :replaces_section_title:

   Python Data Validation for Humans.

   :homepage: https://github.com/kvesteri/validators
   :license: BSD / BSD License
   :recipe: /`validators <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/validators>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/validators/meta.yaml>`_

   


.. conda:package:: validators

   |downloads_validators| |docker_validators|

   :versions: 0.12.4-0, 0.12.3-0, 0.12.2-0, 0.12.1-2, 0.12.1-0, 0.10-0
   
   :depends decorator: >=3.4.0
   
   :depends python: 
   
   :depends six: >=1.4.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install validators

   and update with::

      conda update validators

   or use the docker container::

      docker pull quay.io/repository/biocontainers/validators:<tag>

   (see `validators/tags`_ for valid values for ``<tag>``)


.. |downloads_validators| image:: https://img.shields.io/conda/dn/bioconda/validators.svg?style=flat
   :alt:   (downloads)
.. |docker_validators| image:: https://quay.io/repository/biocontainers/validators/status
   :target: https://quay.io/repository/biocontainers/validators
.. _`validators/tags`: https://quay.io/repository/biocontainers/validators?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/validators/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/validators/README.html