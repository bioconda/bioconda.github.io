.. title:: Package Recipe 'scanpy-scripts'
.. highlight: bash


scanpy-scripts
==============

.. conda:recipe:: scanpy-scripts
   :replaces_section_title:

   A set of wrappers for individual components of the scanpy package. Functions in python packages are hard to call when building workflows outside of python\, so this package adds a set of simple wrappers with robust argument parsing.

   :homepage: https://github.com/ebi-gene-expression-group/scanpy-scripts
   :license: GPL / GPL-3
   :recipe: /`scanpy-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts/meta.yaml>`_

   


.. conda:package:: scanpy-scripts

   |downloads_scanpy-scripts| |docker_scanpy-scripts|

   :versions: 0.0.4, 0.0.3, 0.0.2

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libffi` >=3.2.1,<3.3.0a0 :conda:package:`matplotlib` >=3.0.0 :conda:package:`openssl` >=1.0.2p,<1.0.3a :conda:package:`pandas` >=0.21 :conda:package:`python` >=3.6 :conda:package:`readline` >=7.0,<8.0a0 :conda:package:`scanpy` 1.3.2 :conda:package:`sqlite` >=3.26.0,<4.0a0 :conda:package:`tk` >=8.6.9,<8.7.0a0 :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_scanpy-scripts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scanpy-scripts

   and update with::

      conda update scanpy-scripts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scanpy-scripts


.. |required_by_scanpy-scripts| conda:required_by:: scanpy-scripts
.. |downloads_scanpy-scripts| image:: https://img.shields.io/conda/dn/bioconda/scanpy-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_scanpy-scripts| image:: https://quay.io/repository/biocontainers/scanpy-scripts/status
   :target: https://quay.io/repository/biocontainers/scanpy-scripts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy-scripts/README.html

