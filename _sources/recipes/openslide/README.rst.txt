:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openslide'
.. highlight: bash

openslide
=========

.. conda:recipe:: openslide
   :replaces_section_title:

   OpenSlide is a C library that provides a simple interface to read whole\-slide images \(also known as virtual slides\).

   :homepage: http://openslide.org/
   :license: GNU LGPL 2.1
   :recipe: /`openslide <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openslide>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openslide/meta.yaml>`_

   


.. conda:package:: openslide

   |downloads_openslide| |docker_openslide|

   :versions: 3.4.1-2, 3.4.1-1, 3.4.1-0
   
   :depends cairo: >=1.2
   
   :depends gdk-pixbuf: 
   
   :depends glib: >=2.48.0
   
   :depends jpeg: 
   
   :depends libgcc: 
   
   :depends libpng: 
   
   :depends libtiff: >=4
   
   :depends libxml2: 
   
   :depends openjpeg: >=2.1
   
   :depends sqlite: >=3.6.2
   
   :depends zlib: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openslide

   and update with::

      conda update openslide

   or use the docker container::

      docker pull quay.io/biocontainers/openslide:<tag>

   (see `openslide/tags`_ for valid values for ``<tag>``)


.. |downloads_openslide| image:: https://img.shields.io/conda/dn/bioconda/openslide.svg?style=flat
   :alt:   (downloads)
.. |docker_openslide| image:: https://quay.io/repository/biocontainers/openslide/status
   :target: https://quay.io/repository/biocontainers/openslide
.. _`openslide/tags`: https://quay.io/repository/biocontainers/openslide?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openslide/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openslide/README.html