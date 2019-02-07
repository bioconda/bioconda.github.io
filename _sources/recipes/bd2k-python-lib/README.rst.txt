.. title:: Package Recipe 'bd2k-python-lib'
.. highlight: bash


bd2k-python-lib
===============

.. conda:recipe:: bd2k-python-lib
   :replaces_section_title:

   The BD2K Python module kitchen sink

   :homepage: https://github.com/BD2KGenomics/bd2k-python-lib
   :license: Apache 2.0
   :recipe: /`bd2k-python-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bd2k-python-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bd2k-python-lib/meta.yaml>`_

   


.. conda:package:: bd2k-python-lib

   |downloads_bd2k-python-lib| |docker_bd2k-python-lib|

   :versions: 1.14a1.dev37, 1.14a1.dev33, 1.14a1.dev29, 1.14a1.dev28, 1.13.dev14

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_bd2k-python-lib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bd2k-python-lib

   and update with::

      conda update bd2k-python-lib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bd2k-python-lib


.. |required_by_bd2k-python-lib| conda:required_by:: bd2k-python-lib
.. |downloads_bd2k-python-lib| image:: https://img.shields.io/conda/dn/bioconda/bd2k-python-lib.svg?style=flat
   :alt:   (downloads)
.. |docker_bd2k-python-lib| image:: https://quay.io/repository/biocontainers/bd2k-python-lib/status
   :target: https://quay.io/repository/biocontainers/bd2k-python-lib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bd2k-python-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bd2k-python-lib/README.html

