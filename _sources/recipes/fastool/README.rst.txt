.. title:: Package Recipe 'fastool'
.. highlight: bash


fastool
=======

.. conda:recipe:: fastool
   :replaces_section_title:

   A simple and quick tool to read huge FastQ and FastA files \(both normal and gzipped\) and manipulate them.

   :homepage: https://github.com/fstrozzi/Fastool
   :license: MIT
   :recipe: /`fastool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastool/meta.yaml>`_
   :links: biotools: :biotools:`Fastool`

   


.. conda:package:: fastool

   |downloads_fastool| |docker_fastool|

   :versions: 0.1.4

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_fastool|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastool

   and update with::

      conda update fastool

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastool


.. |required_by_fastool| conda:required_by:: fastool
.. |downloads_fastool| image:: https://img.shields.io/conda/dn/bioconda/fastool.svg?style=flat
   :alt:   (downloads)
.. |docker_fastool| image:: https://quay.io/repository/biocontainers/fastool/status
   :target: https://quay.io/repository/biocontainers/fastool







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastool/README.html

