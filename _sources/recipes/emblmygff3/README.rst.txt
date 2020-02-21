:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emblmygff3'
.. highlight: bash

emblmygff3
==========

.. conda:recipe:: emblmygff3
   :replaces_section_title:

   An efficient way to convert gff3 annotation files into EMBL format ready to submit.

   :homepage: https://github.com/NBISweden/EMBLmyGFF3
   :license: GPL / GPLv3
   :recipe: /`emblmygff3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emblmygff3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emblmygff3/meta.yaml>`_

   


.. conda:package:: emblmygff3

   |downloads_emblmygff3| |docker_emblmygff3|

   :versions: 2-0, 1.3-0
   
   :depends bcbio-gff: >=0.6.4
   :depends biopython: >=1.67
   :depends numpy: <1.16.5
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install emblmygff3

   and update with::

      conda update emblmygff3

   or use the docker container::

      docker pull quay.io/biocontainers/emblmygff3:<tag>

   (see `emblmygff3/tags`_ for valid values for ``<tag>``)


.. |downloads_emblmygff3| image:: https://img.shields.io/conda/dn/bioconda/emblmygff3.svg?style=flat
   :target: https://anaconda.org/bioconda/emblmygff3
   :alt:   (downloads)
.. |docker_emblmygff3| image:: https://quay.io/repository/biocontainers/emblmygff3/status
   :target: https://quay.io/repository/biocontainers/emblmygff3
.. _`emblmygff3/tags`: https://quay.io/repository/biocontainers/emblmygff3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emblmygff3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emblmygff3/README.html