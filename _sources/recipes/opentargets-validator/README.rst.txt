:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opentargets-validator'
.. highlight: bash

opentargets-validator
=====================

.. conda:recipe:: opentargets-validator
   :replaces_section_title:
   :noindex:

   Evidence validation at targetvalidation.org

   :homepage: https://github.com/opentargets/validator
   :license: APACHE / Apache, Version 2.0
   :recipe: /`opentargets-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets-validator/meta.yaml>`_

   


.. conda:package:: opentargets-validator

   |downloads_opentargets-validator| |docker_opentargets-validator|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.0-0``

      

   
   :depends future: 
   :depends jsonschema: ``3.0.0a3.*``
   :depends opentargets-urlzsource: 
   :depends pypeln: ``0.1.6.*``
   :depends python: ``3.7.*``
   :depends requests: 
   :depends rfc3987: 
   :depends simplejson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install opentargets-validator

   and update with::

      conda update opentargets-validator

   or use the docker container::

      docker pull quay.io/biocontainers/opentargets-validator:<tag>

   (see `opentargets-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_opentargets-validator| image:: https://img.shields.io/conda/dn/bioconda/opentargets-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/opentargets-validator
   :alt:   (downloads)
.. |docker_opentargets-validator| image:: https://quay.io/repository/biocontainers/opentargets-validator/status
   :target: https://quay.io/repository/biocontainers/opentargets-validator
.. _`opentargets-validator/tags`: https://quay.io/repository/biocontainers/opentargets-validator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opentargets-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opentargets-validator/README.html