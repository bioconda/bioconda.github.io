.. title:: Package Recipe 'ushuffle'
.. highlight: bash


ushuffle
========

.. conda:recipe:: ushuffle
   :replaces_section_title:

   uShuffle\-\-\-a useful tool for shuffling biological sequences while preserving the k\-let counts

   :homepage: http://digital.cs.usu.edu/~mjiang/ushuffle/
   :license: custom
   :recipe: /`ushuffle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ushuffle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ushuffle/meta.yaml>`_

   


.. conda:package:: ushuffle

   |downloads_ushuffle| |docker_ushuffle|

   :versions: 1.2.2, 1.2.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_ushuffle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ushuffle

   and update with::

      conda update ushuffle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ushuffle


.. |required_by_ushuffle| conda:required_by:: ushuffle
.. |downloads_ushuffle| image:: https://img.shields.io/conda/dn/bioconda/ushuffle.svg?style=flat
   :alt:   (downloads)
.. |docker_ushuffle| image:: https://quay.io/repository/biocontainers/ushuffle/status
   :target: https://quay.io/repository/biocontainers/ushuffle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ushuffle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ushuffle/README.html

