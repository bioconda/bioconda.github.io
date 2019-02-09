.. title:: Package Recipe 'bioconductor-rhdf5lib'
.. highlight: bash


bioconductor-rhdf5lib
=====================

.. conda:recipe:: bioconductor-rhdf5lib
   :replaces_section_title:

   Provides C and C\+\+ hdf5 libraries.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rhdf5lib.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5lib/meta.yaml>`_

   


.. conda:package:: bioconductor-rhdf5lib

   |downloads_bioconductor-rhdf5lib| |docker_bioconductor-rhdf5lib|

   :versions: 1.4.2, 1.2.1, 1.0.0

   :depends: :conda:package:`libgfortran` >=3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_bioconductor-rhdf5lib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhdf5lib

   and update with::

      conda update bioconductor-rhdf5lib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rhdf5lib


.. |required_by_bioconductor-rhdf5lib| conda:required_by:: bioconductor-rhdf5lib
.. |downloads_bioconductor-rhdf5lib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5lib.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5lib| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5lib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5lib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5lib/README.html

