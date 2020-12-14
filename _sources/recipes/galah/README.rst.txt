:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galah'
.. highlight: bash

galah
=====

.. conda:recipe:: galah
   :replaces_section_title:
   :noindex:

   Galah aims to be a more scalable metagenome assembled genome \(MAG\) dereplication method.

   :homepage: https://github.com/wwood/galah
   :license: GPL3
   :recipe: /`galah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galah>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galah/meta.yaml>`_

   


.. conda:package:: galah

   |downloads_galah| |docker_galah|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends dashing: 
   :depends fastani: 
   :depends libgcc-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galah

   and update with::

      conda update galah

   or use the docker container::

      docker pull quay.io/biocontainers/galah:<tag>

   (see `galah/tags`_ for valid values for ``<tag>``)


.. |downloads_galah| image:: https://img.shields.io/conda/dn/bioconda/galah.svg?style=flat
   :target: https://anaconda.org/bioconda/galah
   :alt:   (downloads)
.. |docker_galah| image:: https://quay.io/repository/biocontainers/galah/status
   :target: https://quay.io/repository/biocontainers/galah
.. _`galah/tags`: https://quay.io/repository/biocontainers/galah?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galah/README.html