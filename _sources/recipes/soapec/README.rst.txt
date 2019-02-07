.. title:: Package Recipe 'soapec'
.. highlight: bash


soapec
======

.. conda:recipe:: soapec
   :replaces_section_title:

   a correction tool for SOAPdenovo

   :homepage: http://soap.genomics.org.cn/soapdenovo.html
   :license: GNU
   :recipe: /`soapec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapec/meta.yaml>`_

   


.. conda:package:: soapec

   |downloads_soapec| |docker_soapec|

   :versions: 2.03

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_soapec|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soapec

   and update with::

      conda update soapec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/soapec


.. |required_by_soapec| conda:required_by:: soapec
.. |downloads_soapec| image:: https://img.shields.io/conda/dn/bioconda/soapec.svg?style=flat
   :alt:   (downloads)
.. |docker_soapec| image:: https://quay.io/repository/biocontainers/soapec/status
   :target: https://quay.io/repository/biocontainers/soapec







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapec/README.html

