.. title:: Package Recipe 'soapdenovo2-gapcloser'
.. highlight: bash


soapdenovo2-gapcloser
=====================

.. conda:recipe:: soapdenovo2-gapcloser
   :replaces_section_title:

   a tool named GapCloser for SOAPdenovo.

   :homepage: http://soap.genomics.org.cn/soapdenovo.html
   :license: GNU
   :recipe: /`soapdenovo2-gapcloser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-gapcloser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-gapcloser/meta.yaml>`_

   


.. conda:package:: soapdenovo2-gapcloser

   |downloads_soapdenovo2-gapcloser| |docker_soapdenovo2-gapcloser|

   :versions: 1.12

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_soapdenovo2-gapcloser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soapdenovo2-gapcloser

   and update with::

      conda update soapdenovo2-gapcloser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/soapdenovo2-gapcloser


.. |required_by_soapdenovo2-gapcloser| conda:required_by:: soapdenovo2-gapcloser
.. |downloads_soapdenovo2-gapcloser| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo2-gapcloser.svg?style=flat
   :alt:   (downloads)
.. |docker_soapdenovo2-gapcloser| image:: https://quay.io/repository/biocontainers/soapdenovo2-gapcloser/status
   :target: https://quay.io/repository/biocontainers/soapdenovo2-gapcloser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo2-gapcloser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo2-gapcloser/README.html

