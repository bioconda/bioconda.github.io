:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'karect'
.. highlight: bash

karect
======

.. conda:recipe:: karect
   :replaces_section_title:

   Read error correction tool based on multiple alignment.


   :homepage: https://github.com/aminallam/karect
   :documentation: https://github.com/aminallam/karect/blob/master/karect_manual.pdf
   
   :license: GPL / GPLv2
   :recipe: /`karect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karect/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv415`

   


.. conda:package:: karect

   |downloads_karect| |docker_karect|

   :versions: 1.0-1, 1.0-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install karect

   and update with::

      conda update karect

   or use the docker container::

      docker pull quay.io/biocontainers/karect:<tag>

   (see `karect/tags`_ for valid values for ``<tag>``)


.. |downloads_karect| image:: https://img.shields.io/conda/dn/bioconda/karect.svg?style=flat
   :alt:   (downloads)
.. |docker_karect| image:: https://quay.io/repository/biocontainers/karect/status
   :target: https://quay.io/repository/biocontainers/karect
.. _`karect/tags`: https://quay.io/repository/biocontainers/karect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/karect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/karect/README.html