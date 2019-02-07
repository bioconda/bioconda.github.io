.. title:: Package Recipe 'grabix'
.. highlight: bash


grabix
======

.. conda:recipe:: grabix
   :replaces_section_title:

   a wee tool for random access into BGZF files.

   :homepage: https://github.com/arq5x/grabix
   :license: MIT
   :recipe: /`grabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grabix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grabix/meta.yaml>`_

   


.. conda:package:: grabix

   |downloads_grabix| |docker_grabix|

   :versions: 0.1.8, 0.1.7, 0.1.6, 0.1.3

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_grabix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install grabix

   and update with::

      conda update grabix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/grabix


.. |required_by_grabix| conda:required_by:: grabix
.. |downloads_grabix| image:: https://img.shields.io/conda/dn/bioconda/grabix.svg?style=flat
   :alt:   (downloads)
.. |docker_grabix| image:: https://quay.io/repository/biocontainers/grabix/status
   :target: https://quay.io/repository/biocontainers/grabix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grabix/README.html

