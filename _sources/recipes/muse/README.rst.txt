.. title:: Package Recipe 'muse'
.. highlight: bash


muse
====

.. conda:recipe:: muse
   :replaces_section_title:

   Somatic point mutation caller

   :homepage: http://bioinformatics.mdanderson.org/main/MuSE
   :license: https://github.com/danielfan/MuSE/blob/master/LICENSE
   :recipe: /`muse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muse/meta.yaml>`_

   


.. conda:package:: muse

   |downloads_muse| |docker_muse|

   :versions: 1.0.rc

   :depends: :conda:package:`libgcc`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_muse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install muse

   and update with::

      conda update muse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/muse


.. |required_by_muse| conda:required_by:: muse
.. |downloads_muse| image:: https://img.shields.io/conda/dn/bioconda/muse.svg?style=flat
   :alt:   (downloads)
.. |docker_muse| image:: https://quay.io/repository/biocontainers/muse/status
   :target: https://quay.io/repository/biocontainers/muse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/muse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/muse/README.html

