.. title:: Package Recipe 'damasker'
.. highlight: bash


damasker
========

.. conda:recipe:: damasker
   :replaces_section_title:

   DAMASKER\: Module to determine where repeats are and make soft\-masks of said

   :homepage: https://github.com/thegenemyers/DAMASKER
   :license: Custom
   :recipe: /`damasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damasker/meta.yaml>`_

   


.. conda:package:: damasker

   |downloads_damasker| |docker_damasker|

   :versions: 1.0p1

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_damasker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install damasker

   and update with::

      conda update damasker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/damasker


.. |required_by_damasker| conda:required_by:: damasker
.. |downloads_damasker| image:: https://img.shields.io/conda/dn/bioconda/damasker.svg?style=flat
   :alt:   (downloads)
.. |docker_damasker| image:: https://quay.io/repository/biocontainers/damasker/status
   :target: https://quay.io/repository/biocontainers/damasker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/damasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/damasker/README.html

