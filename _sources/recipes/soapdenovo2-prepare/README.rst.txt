:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapdenovo2-prepare'
.. highlight: bash

soapdenovo2-prepare
===================

.. conda:recipe:: soapdenovo2-prepare
   :replaces_section_title:

   SoapDenovo2 data prepare module using assembled contig to do scaffold assembly.

   :homepage: https://github.com/aquaskyline/SOAPdenovo2
   :license: GPL / GPL-3.0
   :recipe: /`soapdenovo2-prepare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-prepare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-prepare/meta.yaml>`_

   


.. conda:package:: soapdenovo2-prepare

   |downloads_soapdenovo2-prepare| |docker_soapdenovo2-prepare|

   :versions: 2.0-3, 2.0-1, 2.0-0
   
   :depends libgcc-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soapdenovo2-prepare

   and update with::

      conda update soapdenovo2-prepare

   or use the docker container::

      docker pull quay.io/biocontainers/soapdenovo2-prepare:<tag>

   (see `soapdenovo2-prepare/tags`_ for valid values for ``<tag>``)


.. |downloads_soapdenovo2-prepare| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo2-prepare.svg?style=flat
   :target: https://anaconda.org/bioconda/soapdenovo2-prepare
   :alt:   (downloads)
.. |docker_soapdenovo2-prepare| image:: https://quay.io/repository/biocontainers/soapdenovo2-prepare/status
   :target: https://quay.io/repository/biocontainers/soapdenovo2-prepare
.. _`soapdenovo2-prepare/tags`: https://quay.io/repository/biocontainers/soapdenovo2-prepare?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo2-prepare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo2-prepare/README.html