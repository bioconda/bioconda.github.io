.. title:: Package Recipe 'famseq'
.. highlight: bash


famseq
======

.. conda:recipe:: famseq
   :replaces_section_title:

   Peng G\, Fan Y\, Palculict TB\, Shen P\, Ruteshouser EC\, Chi A\, Davis RW\, Huff V\, Scharfe C\, Wang W. Rare variant detection using family\-based sequencing analysis. Proceedings of the National Academy of Sciences. 2013 Mar 5\;110\(10\)\:3985\-90

   :homepage: http://bioinformatics.mdanderson.org/main/FamSeq
   :license: GPL-3
   :recipe: /`famseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famseq/meta.yaml>`_

   


.. conda:package:: famseq

   |downloads_famseq| |docker_famseq|

   :versions: 1.0.3

   :depends: 

   :required~by: |required_by_famseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install famseq

   and update with::

      conda update famseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/famseq


.. |required_by_famseq| conda:required_by:: famseq
.. |downloads_famseq| image:: https://img.shields.io/conda/dn/bioconda/famseq.svg?style=flat
   :alt:   (downloads)
.. |docker_famseq| image:: https://quay.io/repository/biocontainers/famseq/status
   :target: https://quay.io/repository/biocontainers/famseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/famseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/famseq/README.html

