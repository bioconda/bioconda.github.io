:orphan:  .. only available via index, not via toctree

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

   :versions: 1.0.3-1, 1.0.3-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install famseq

   and update with::

      conda update famseq

   or use the docker container::

      docker pull quay.io/biocontainers/famseq:<tag>

   (see `famseq/tags`_ for valid values for ``<tag>``)


.. |downloads_famseq| image:: https://img.shields.io/conda/dn/bioconda/famseq.svg?style=flat
   :target: https://anaconda.org/bioconda/famseq
   :alt:   (downloads)
.. |docker_famseq| image:: https://quay.io/repository/biocontainers/famseq/status
   :target: https://quay.io/repository/biocontainers/famseq
.. _`famseq/tags`: https://quay.io/repository/biocontainers/famseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/famseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/famseq/README.html