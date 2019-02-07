.. title:: Package Recipe 'detonate'
.. highlight: bash


detonate
========

.. conda:recipe:: detonate
   :replaces_section_title:

   DETONATE \(DE novo TranscriptOme rNa\-seq Assembly with or without the Truth Evaluation\) consists of two component packages\, RSEM\-EVAL and REF\-EVAL.

   :homepage: http://deweylab.biostat.wisc.edu/detonate/
   :license: GPL
   :recipe: /`detonate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/detonate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/detonate/meta.yaml>`_

   


.. conda:package:: detonate

   |downloads_detonate| |docker_detonate|

   :versions: 1.11

   :depends: :conda:package:`boost` 1.60* :conda:package:`libgcc`  :conda:package:`ncurses`  :conda:package:`perl-threaded`  :conda:package:`samtools` 0.1.18 :conda:package:`zlib`  

   :required~by: |required_by_detonate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install detonate

   and update with::

      conda update detonate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/detonate


.. |required_by_detonate| conda:required_by:: detonate
.. |downloads_detonate| image:: https://img.shields.io/conda/dn/bioconda/detonate.svg?style=flat
   :alt:   (downloads)
.. |docker_detonate| image:: https://quay.io/repository/biocontainers/detonate/status
   :target: https://quay.io/repository/biocontainers/detonate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/detonate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/detonate/README.html

