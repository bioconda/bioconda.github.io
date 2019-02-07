.. title:: Package Recipe 'moods'
.. highlight: bash


moods
=====

.. conda:recipe:: moods
   :replaces_section_title:

   MOODS\, Motif Occurrence Detection Suite

   :homepage: https://github.com/jhkorhonen/MOODS
   :license: GPL-3.0
   :recipe: /`moods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moods/meta.yaml>`_
   :links: biotools: :biotools:`MOODS`, doi: :doi:`10.1109/TCBB.2009.35`

   


.. conda:package:: moods

   |downloads_moods| |docker_moods|

   :versions: 1.9.3, 1.9.0

   :depends: :conda:package:`libgcc`  :conda:package:`python` 2.7* 

   :required~by: |required_by_moods|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moods

   and update with::

      conda update moods

   or use the docker container::

      docker pull quay.io/repository/biocontainers/moods


.. |required_by_moods| conda:required_by:: moods
.. |downloads_moods| image:: https://img.shields.io/conda/dn/bioconda/moods.svg?style=flat
   :alt:   (downloads)
.. |docker_moods| image:: https://quay.io/repository/biocontainers/moods/status
   :target: https://quay.io/repository/biocontainers/moods







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moods/README.html

