.. title:: Package Recipe 'blasr_libcpp'
.. highlight: bash


blasr_libcpp
============

.. conda:recipe:: blasr_libcpp
   :replaces_section_title:

   blasr\_libcpp is a support library used by blasr and other PacBio tools

   :homepage: https://github.com/PacificBiosciences/blasr_libcpp
   :license: BSD-3-Clause-Clear
   :recipe: /`blasr_libcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blasr_libcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blasr_libcpp/meta.yaml>`_

   


.. conda:package:: blasr_libcpp

   |downloads_blasr_libcpp| |docker_blasr_libcpp|

   :versions: 5.3.1, 1.1

   :depends: :conda:package:`hdf5` 1.8.17* :conda:package:`libgcc`  :conda:package:`pbbam` >=0.18.0 

   :required~by: |required_by_blasr_libcpp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blasr_libcpp

   and update with::

      conda update blasr_libcpp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blasr_libcpp


.. |required_by_blasr_libcpp| conda:required_by:: blasr_libcpp
.. |downloads_blasr_libcpp| image:: https://img.shields.io/conda/dn/bioconda/blasr_libcpp.svg?style=flat
   :alt:   (downloads)
.. |docker_blasr_libcpp| image:: https://quay.io/repository/biocontainers/blasr_libcpp/status
   :target: https://quay.io/repository/biocontainers/blasr_libcpp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blasr_libcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blasr_libcpp/README.html

