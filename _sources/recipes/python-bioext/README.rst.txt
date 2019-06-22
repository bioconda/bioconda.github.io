:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-bioext'
.. highlight: bash

python-bioext
=============

.. conda:recipe:: python-bioext
   :replaces_section_title:

   A few handy bioinformatics tools not already in BioPython

   :homepage: https://github.com/veg/BioExt.git
   :license: GPL-3
   :recipe: /`python-bioext <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioext>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioext/meta.yaml>`_

   


.. conda:package:: python-bioext

   |downloads_python-bioext| |docker_python-bioext|

   :versions: 0.18.6-2, 0.18.6-1, 0.18.6-0, 0.17.4-0
   
   :depends biopython: 
   :depends freetype: >=2.8.1,<2.9.0a0
   :depends libgcc-ng: >=4.9
   :depends numpy: >=1.14.0
   :depends pysam: <=0.13
   :depends python: >=3.5,<3.6.0a0
   :depends python-consensuscore: 
   :depends scipy: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-bioext

   and update with::

      conda update python-bioext

   or use the docker container::

      docker pull quay.io/biocontainers/python-bioext:<tag>

   (see `python-bioext/tags`_ for valid values for ``<tag>``)


.. |downloads_python-bioext| image:: https://img.shields.io/conda/dn/bioconda/python-bioext.svg?style=flat
   :target: https://anaconda.org/bioconda/python-bioext
   :alt:   (downloads)
.. |docker_python-bioext| image:: https://quay.io/repository/biocontainers/python-bioext/status
   :target: https://quay.io/repository/biocontainers/python-bioext
.. _`python-bioext/tags`: https://quay.io/repository/biocontainers/python-bioext?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-bioext/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-bioext/README.html