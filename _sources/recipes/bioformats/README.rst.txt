:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioformats'
.. highlight: bash

bioformats
==========

.. conda:recipe:: bioformats
   :replaces_section_title:

   A collection of Python classes to handle bioinformatics data.

   :homepage: https://github.com/gtamazian/bioformats
   :license: MIT
   :recipe: /`bioformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioformats/meta.yaml>`_

   


.. conda:package:: bioformats

   |downloads_bioformats| |docker_bioformats|

   :versions: 0.1.15-1, 0.1.15-0
   
   :depends future: 
   :depends pyfaidx: 
   :depends python: 
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioformats

   and update with::

      conda update bioformats

   or use the docker container::

      docker pull quay.io/biocontainers/bioformats:<tag>

   (see `bioformats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioformats| image:: https://img.shields.io/conda/dn/bioconda/bioformats.svg?style=flat
   :alt:   (downloads)
.. |docker_bioformats| image:: https://quay.io/repository/biocontainers/bioformats/status
   :target: https://quay.io/repository/biocontainers/bioformats
.. _`bioformats/tags`: https://quay.io/repository/biocontainers/bioformats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioformats/README.html