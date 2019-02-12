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

   :versions: 3.4.1

   :depends: :conda:package:`cairo` >=1.2 :conda:package:`gdk-pixbuf`  :conda:package:`glib` >=2.16 :conda:package:`jpeg`  :conda:package:`libgcc`  :conda:package:`libpng`  :conda:package:`libtiff` >=4 :conda:package:`libxml2`  :conda:package:`openjpeg` >=2.1 :conda:package:`sqlite` >=3.6.2 :conda:package:`zlib`  

   :required~by: |required_by_openslide|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openslide

   and update with::

      conda update openslide

   or use the docker container::

      docker pull quay.io/repository/biocontainers/openslide


.. |required_by_openslide| conda:required_by:: openslide
.. |downloads_openslide| image:: https://img.shields.io/conda/dn/bioconda/openslide.svg?style=flat
   :alt:   (downloads)
.. |docker_openslide| image:: https://quay.io/repository/biocontainers/openslide/status
   :target: https://quay.io/repository/biocontainers/openslide







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openslide/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openslide/README.html

