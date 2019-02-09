.. title:: Package Recipe 'pbh5tools'
.. highlight: bash


pbh5tools
=========

.. conda:recipe:: pbh5tools
   :replaces_section_title:

   A swiss\-army knife for interrogating PacBio® HDF5 files \(cmp.h5\, bas.h5\).

   :homepage: https://github.com/PacificBiosciences/pbh5tools
   :license: BSD-3-Clause
   :recipe: /`pbh5tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbh5tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbh5tools/meta.yaml>`_

   


.. conda:package:: pbh5tools

   |downloads_pbh5tools| |docker_pbh5tools|

   :versions: 0.8.0

   :depends: :conda:package:`h5py` >=1.3.0 :conda:package:`numpy` >=1.6.0 :conda:package:`pbcore` >=0.8.0 :conda:package:`python` 2.7* 

   :required~by: |required_by_pbh5tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbh5tools

   and update with::

      conda update pbh5tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbh5tools


.. |required_by_pbh5tools| conda:required_by:: pbh5tools
.. |downloads_pbh5tools| image:: https://img.shields.io/conda/dn/bioconda/pbh5tools.svg?style=flat
   :alt:   (downloads)
.. |docker_pbh5tools| image:: https://quay.io/repository/biocontainers/pbh5tools/status
   :target: https://quay.io/repository/biocontainers/pbh5tools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbh5tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbh5tools/README.html

