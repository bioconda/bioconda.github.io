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

   :versions: 3.6.1

   :depends: :conda:package:`jpeg`  :conda:package:`libgcc`  :conda:package:`libpng`  :conda:package:`libtiff`  :conda:package:`libxml2`  :conda:package:`openssl`  :conda:package:`zlib`  

   :required~by: |required_by_dcmtk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dcmtk

   and update with::

      conda update dcmtk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dcmtk


.. |required_by_dcmtk| conda:required_by:: dcmtk
.. |downloads_dcmtk| image:: https://img.shields.io/conda/dn/bioconda/dcmtk.svg?style=flat
   :alt:   (downloads)
.. |docker_dcmtk| image:: https://quay.io/repository/biocontainers/dcmtk/status
   :target: https://quay.io/repository/biocontainers/dcmtk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dcmtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dcmtk/README.html

