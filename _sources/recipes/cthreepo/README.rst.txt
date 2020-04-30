:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cthreepo'
.. highlight: bash

cthreepo
========

.. conda:recipe:: cthreepo
   :replaces_section_title:

   A python script to interconvert seq\-ids in gff3\, gtf\, bed and other files.

   :homepage: https://github.com/vkkodali/cthreepo
   :license: MIT / MIT
   :recipe: /`cthreepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cthreepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cthreepo/meta.yaml>`_

   


.. conda:package:: cthreepo

   |downloads_cthreepo| |docker_cthreepo|

   :versions: 0.1-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cthreepo

   and update with::

      conda update cthreepo

   or use the docker container::

      docker pull quay.io/biocontainers/cthreepo:<tag>

   (see `cthreepo/tags`_ for valid values for ``<tag>``)


.. |downloads_cthreepo| image:: https://img.shields.io/conda/dn/bioconda/cthreepo.svg?style=flat
   :target: https://anaconda.org/bioconda/cthreepo
   :alt:   (downloads)
.. |docker_cthreepo| image:: https://quay.io/repository/biocontainers/cthreepo/status
   :target: https://quay.io/repository/biocontainers/cthreepo
.. _`cthreepo/tags`: https://quay.io/repository/biocontainers/cthreepo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cthreepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cthreepo/README.html