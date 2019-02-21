:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spotyping'
.. highlight: bash

spotyping
=========

.. conda:recipe:: spotyping
   :replaces_section_title:

   SpoTyping\: fast and accurate in silico Mycobacterium spoligotyping from sequence reads

   :homepage: https://github.com/xiaeryu/SpoTyping
   :license: GPL / GPL-3
   :recipe: /`spotyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping/meta.yaml>`_
   :links: DOI: :DOI:`10.1186/s13073-016-0270-7`

   


.. conda:package:: spotyping

   |downloads_spotyping| |docker_spotyping|

   :versions: 2.1-2, 2.1-1, 2.1-0
   
   :depends blast: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends r-gdata: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spotyping

   and update with::

      conda update spotyping

   or use the docker container::

      docker pull quay.io/biocontainers/spotyping:<tag>

   (see `spotyping/tags`_ for valid values for ``<tag>``)


.. |downloads_spotyping| image:: https://img.shields.io/conda/dn/bioconda/spotyping.svg?style=flat
   :alt:   (downloads)
.. |docker_spotyping| image:: https://quay.io/repository/biocontainers/spotyping/status
   :target: https://quay.io/repository/biocontainers/spotyping
.. _`spotyping/tags`: https://quay.io/repository/biocontainers/spotyping?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spotyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spotyping/README.html