:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spotyping3'
.. highlight: bash

spotyping3
==========

.. conda:recipe:: spotyping3
   :replaces_section_title:

   SpoTyping3\: fast and accurate in silico Mycobacterium spoligotyping from sequence reads\, compatible with Python3

   :homepage: https://github.com/matnguyen/SpoTyping
   :license: GPL / GPL-3
   :recipe: /`spotyping3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping3/meta.yaml>`_
   :links: DOI: :DOI:`10.1186/s13073-016-0270-7`

   


.. conda:package:: spotyping3

   |downloads_spotyping3| |docker_spotyping3|

   :versions: 3.0-0
   
   :depends blast: 
   :depends python: >=3.5
   :depends r-gdata: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spotyping3

   and update with::

      conda update spotyping3

   or use the docker container::

      docker pull quay.io/biocontainers/spotyping3:<tag>

   (see `spotyping3/tags`_ for valid values for ``<tag>``)


.. |downloads_spotyping3| image:: https://img.shields.io/conda/dn/bioconda/spotyping3.svg?style=flat
   :target: https://anaconda.org/bioconda/spotyping3
   :alt:   (downloads)
.. |docker_spotyping3| image:: https://quay.io/repository/biocontainers/spotyping3/status
   :target: https://quay.io/repository/biocontainers/spotyping3
.. _`spotyping3/tags`: https://quay.io/repository/biocontainers/spotyping3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spotyping3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spotyping3/README.html