:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbimeta'
.. highlight: bash

ncbimeta
========

.. conda:recipe:: ncbimeta
   :replaces_section_title:

   Efficient and comprehensive metadata acquisition from the NCBI databases \(includes SRA\).

   :homepage: https://github.com/ktmeaton/NCBImeta
   :license: MIT
   :recipe: /`ncbimeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbimeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbimeta/meta.yaml>`_

   


.. conda:package:: ncbimeta

   |downloads_ncbimeta| |docker_ncbimeta|

   :versions: 0.6.1-0
   
   :depends biopython: >=1.74
   :depends lxml: >=4.4.2
   :depends numpy: >=1.16.4
   :depends python: >3
   :depends pyyaml: >=5.1.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbimeta

   and update with::

      conda update ncbimeta

   or use the docker container::

      docker pull quay.io/biocontainers/ncbimeta:<tag>

   (see `ncbimeta/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbimeta| image:: https://img.shields.io/conda/dn/bioconda/ncbimeta.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbimeta
   :alt:   (downloads)
.. |docker_ncbimeta| image:: https://quay.io/repository/biocontainers/ncbimeta/status
   :target: https://quay.io/repository/biocontainers/ncbimeta
.. _`ncbimeta/tags`: https://quay.io/repository/biocontainers/ncbimeta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbimeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbimeta/README.html