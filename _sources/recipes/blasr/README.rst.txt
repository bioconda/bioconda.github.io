.. title:: Package Recipe 'blasr'
.. highlight: bash


blasr
=====

.. conda:recipe:: blasr
   :replaces_section_title:

   BLASR \- The PacBio long read aligner

   :homepage: https://github.com/PacificBiosciences/blasr
   :license: BSD-3-Clause-Clear
   :recipe: /`blasr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blasr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blasr/meta.yaml>`_

   


.. conda:package:: blasr

   |downloads_blasr| |docker_blasr|

   :versions: 5.3.2, 5.3.1, 5.2p1

   :depends: :conda:package:`blasr_libcpp` >=5.3.1 :conda:package:`hdf5` 1.8.17* :conda:package:`libgcc`  :conda:package:`pbbam` >=0.18.0 

   :required~by: |required_by_blasr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blasr

   and update with::

      conda update blasr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blasr


.. |required_by_blasr| conda:required_by:: blasr
.. |downloads_blasr| image:: https://img.shields.io/conda/dn/bioconda/blasr.svg?style=flat
   :alt:   (downloads)
.. |docker_blasr| image:: https://quay.io/repository/biocontainers/blasr/status
   :target: https://quay.io/repository/biocontainers/blasr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blasr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blasr/README.html

