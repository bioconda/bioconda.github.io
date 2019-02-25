:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrappie'
.. highlight: bash

scrappie
========

.. conda:recipe:: scrappie
   :replaces_section_title:

   Scrappie is a technology demonstrator for the Oxford Nanopore Research Algorithms group

   :homepage: https://github.com/nanoporetech/scrappie
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`scrappie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrappie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrappie/meta.yaml>`_

   


.. conda:package:: scrappie

   |downloads_scrappie| |docker_scrappie|

   :versions: 1.4.1-0, 1.3.2-2, 1.3.2-0
   
   :depends cffi: >=1.0.0
   
   :depends cunit: 
   
   :depends hdf5: >=1.10.4,<1.10.5.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends numpy: 
   
   :depends openblas: >=0.3.3,<0.3.4.0a0
   
   :depends python: >=3.6,<3.7.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scrappie

   and update with::

      conda update scrappie

   or use the docker container::

      docker pull quay.io/biocontainers/scrappie:<tag>

   (see `scrappie/tags`_ for valid values for ``<tag>``)


.. |downloads_scrappie| image:: https://img.shields.io/conda/dn/bioconda/scrappie.svg?style=flat
   :alt:   (downloads)
.. |docker_scrappie| image:: https://quay.io/repository/biocontainers/scrappie/status
   :target: https://quay.io/repository/biocontainers/scrappie
.. _`scrappie/tags`: https://quay.io/repository/biocontainers/scrappie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrappie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrappie/README.html