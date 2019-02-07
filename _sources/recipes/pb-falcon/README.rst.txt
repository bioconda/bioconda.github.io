.. title:: Package Recipe 'pb-falcon'
.. highlight: bash


pb-falcon
=========

.. conda:recipe:: pb-falcon
   :replaces_section_title:

   FALCON\/Unzip tool\-suite \(originally by Jason Chin\)

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-falcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon/meta.yaml>`_

   


.. conda:package:: pb-falcon

   |downloads_pb-falcon| |docker_pb-falcon|

   :versions: 0.2.5, 0.2.4, 0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.0.2, 0.0.1, 0.0.0

   :depends: :conda:package:`future` >=0.16.0 :conda:package:`htslib` 1.7 :conda:package:`libgcc-ng` >=4.9 :conda:package:`networkx` >=1.9.1 :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-edlib`  :conda:package:`python-intervaltree`  :conda:package:`python-msgpack`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_pb-falcon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pb-falcon

   and update with::

      conda update pb-falcon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pb-falcon


.. |required_by_pb-falcon| conda:required_by:: pb-falcon
.. |downloads_pb-falcon| image:: https://img.shields.io/conda/dn/bioconda/pb-falcon.svg?style=flat
   :alt:   (downloads)
.. |docker_pb-falcon| image:: https://quay.io/repository/biocontainers/pb-falcon/status
   :target: https://quay.io/repository/biocontainers/pb-falcon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-falcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-falcon/README.html

