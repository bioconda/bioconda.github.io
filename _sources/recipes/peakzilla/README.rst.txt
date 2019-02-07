.. title:: Package Recipe 'peakzilla'
.. highlight: bash


peakzilla
=========

.. conda:recipe:: peakzilla
   :replaces_section_title:

   Peakzilla identifies sites of enrichment and transcription factor binding sites from transcription factor ChIP\-seq and ChIP\-exo experiments at hight accuracy and resolution.

   :homepage: http://stark.imp.ac.at/data/peakzilla
   :license: GPLv2
   :recipe: /`peakzilla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakzilla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakzilla/meta.yaml>`_
   :links: biotools: :biotools:`peakzilla`, doi: :doi:`10.1093/bioinformatics/btt470`

   


.. conda:package:: peakzilla

   |downloads_peakzilla| |docker_peakzilla|

   :versions: 1.0

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_peakzilla|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peakzilla

   and update with::

      conda update peakzilla

   or use the docker container::

      docker pull quay.io/repository/biocontainers/peakzilla


.. |required_by_peakzilla| conda:required_by:: peakzilla
.. |downloads_peakzilla| image:: https://img.shields.io/conda/dn/bioconda/peakzilla.svg?style=flat
   :alt:   (downloads)
.. |docker_peakzilla| image:: https://quay.io/repository/biocontainers/peakzilla/status
   :target: https://quay.io/repository/biocontainers/peakzilla







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakzilla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakzilla/README.html

