.. title:: Package Recipe 'pytabix'
.. highlight: bash


pytabix
=======

.. conda:recipe:: pytabix
   :replaces_section_title:

   Fast random access to sorted files compressed with bgzip and indexed by tabix.

   :homepage: https://github.com/slowkow/pytabix
   :license: MIT
   :recipe: /`pytabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytabix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytabix/meta.yaml>`_

   


.. conda:package:: pytabix

   |downloads_pytabix| |docker_pytabix|

   :versions: 0.0.2

   :depends: :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_pytabix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytabix

   and update with::

      conda update pytabix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pytabix


.. |required_by_pytabix| conda:required_by:: pytabix
.. |downloads_pytabix| image:: https://img.shields.io/conda/dn/bioconda/pytabix.svg?style=flat
   :alt:   (downloads)
.. |docker_pytabix| image:: https://quay.io/repository/biocontainers/pytabix/status
   :target: https://quay.io/repository/biocontainers/pytabix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytabix/README.html

