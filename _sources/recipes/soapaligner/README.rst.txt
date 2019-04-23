:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapaligner'
.. highlight: bash

soapaligner
===========

.. conda:recipe:: soapaligner
   :replaces_section_title:

   SOAPaligner\/soap2 is an updated version of SOAP software for short oligonucleotide alignment.

   :homepage: http://soap.genomics.org.cn/soapaligner.html
   :license: GPL
   :recipe: /`soapaligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapaligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapaligner/meta.yaml>`_

   


.. conda:package:: soapaligner

   |downloads_soapaligner| |docker_soapaligner|

   :versions: 2.21-0
   
   :depends zlib: 1.2.11*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soapaligner

   and update with::

      conda update soapaligner

   or use the docker container::

      docker pull quay.io/biocontainers/soapaligner:<tag>

   (see `soapaligner/tags`_ for valid values for ``<tag>``)


.. |downloads_soapaligner| image:: https://img.shields.io/conda/dn/bioconda/soapaligner.svg?style=flat
   :alt:   (downloads)
.. |docker_soapaligner| image:: https://quay.io/repository/biocontainers/soapaligner/status
   :target: https://quay.io/repository/biocontainers/soapaligner
.. _`soapaligner/tags`: https://quay.io/repository/biocontainers/soapaligner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapaligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapaligner/README.html