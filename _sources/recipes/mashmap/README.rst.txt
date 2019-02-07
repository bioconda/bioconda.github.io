.. title:: Package Recipe 'mashmap'
.. highlight: bash


mashmap
=======

.. conda:recipe:: mashmap
   :replaces_section_title:

   A fast approximate aligner for long DNA sequences

   :homepage: https://github.com/marbl/MashMap
   :license: Custom
   :recipe: /`mashmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashmap/meta.yaml>`_

   


.. conda:package:: mashmap

   |downloads_mashmap| |docker_mashmap|

   :versions: 2.0, 1.0

   :depends: :conda:package:`gsl` 1.16* :conda:package:`libgcc`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_mashmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mashmap

   and update with::

      conda update mashmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mashmap


.. |required_by_mashmap| conda:required_by:: mashmap
.. |downloads_mashmap| image:: https://img.shields.io/conda/dn/bioconda/mashmap.svg?style=flat
   :alt:   (downloads)
.. |docker_mashmap| image:: https://quay.io/repository/biocontainers/mashmap/status
   :target: https://quay.io/repository/biocontainers/mashmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mashmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mashmap/README.html

