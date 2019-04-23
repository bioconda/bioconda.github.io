:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dcmtk'
.. highlight: bash

dcmtk
=====

.. conda:recipe:: dcmtk
   :replaces_section_title:

   DCMTK is a collection of libraries and applications implementing large parts the DICOM standard

   :homepage: http://dicom.offis.de
   :license: BSD
   :recipe: /`dcmtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcmtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcmtk/meta.yaml>`_

   


.. conda:package:: dcmtk

   |downloads_dcmtk| |docker_dcmtk|

   :versions: 3.6.1-6, 3.6.1-5, 3.6.1-4, 3.6.1-3, 3.6.1-2
   
   :depends jpeg: >=9c,<10a
   :depends libpng: >=1.6.34,<1.7.0a0
   :depends libtiff: >=4.0.9,<5.0a0
   :depends libxml2: >=2.9.8,<2.10.0a0
   :depends openssl: >=1.0.2o,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dcmtk

   and update with::

      conda update dcmtk

   or use the docker container::

      docker pull quay.io/biocontainers/dcmtk:<tag>

   (see `dcmtk/tags`_ for valid values for ``<tag>``)


.. |downloads_dcmtk| image:: https://img.shields.io/conda/dn/bioconda/dcmtk.svg?style=flat
   :alt:   (downloads)
.. |docker_dcmtk| image:: https://quay.io/repository/biocontainers/dcmtk/status
   :target: https://quay.io/repository/biocontainers/dcmtk
.. _`dcmtk/tags`: https://quay.io/repository/biocontainers/dcmtk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dcmtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dcmtk/README.html