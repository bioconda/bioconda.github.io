.. title:: Package Recipe 'ecopcr'
.. highlight: bash


ecopcr
======

.. conda:recipe:: ecopcr
   :replaces_section_title:

   ecoPCR is an electronic PCR software that helps you estimate Barcode primers quality.

   :homepage: https://git.metabarcoding.org/obitools/ecopcr/wikis/home
   :license: CeCill v2
   :recipe: /`ecopcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecopcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecopcr/meta.yaml>`_

   


.. conda:package:: ecopcr

   |downloads_ecopcr| |docker_ecopcr|

   :versions: 0.5.0

   :depends: :conda:package:`libgcc`  :conda:package:`python` 2.7* :conda:package:`reportlab`  :conda:package:`zlib`  

   :required~by: |required_by_ecopcr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ecopcr

   and update with::

      conda update ecopcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ecopcr


.. |required_by_ecopcr| conda:required_by:: ecopcr
.. |downloads_ecopcr| image:: https://img.shields.io/conda/dn/bioconda/ecopcr.svg?style=flat
   :alt:   (downloads)
.. |docker_ecopcr| image:: https://quay.io/repository/biocontainers/ecopcr/status
   :target: https://quay.io/repository/biocontainers/ecopcr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ecopcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ecopcr/README.html

