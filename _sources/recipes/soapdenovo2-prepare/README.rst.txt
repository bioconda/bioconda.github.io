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

   :versions: 2.0

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_soapdenovo2-prepare|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soapdenovo2-prepare

   and update with::

      conda update soapdenovo2-prepare

   or use the docker container::

      docker pull quay.io/repository/biocontainers/soapdenovo2-prepare


.. |required_by_soapdenovo2-prepare| conda:required_by:: soapdenovo2-prepare
.. |downloads_soapdenovo2-prepare| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo2-prepare.svg?style=flat
   :alt:   (downloads)
.. |docker_soapdenovo2-prepare| image:: https://quay.io/repository/biocontainers/soapdenovo2-prepare/status
   :target: https://quay.io/repository/biocontainers/soapdenovo2-prepare







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo2-prepare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo2-prepare/README.html

