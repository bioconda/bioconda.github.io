:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gocr'
.. highlight: bash

gocr
====

.. conda:recipe:: gocr/0.50
   :replaces_section_title:
   :noindex:

   GOCR is an OCR \(Optical Character Recognition\) program

   :homepage: http://jocr.sourceforge.net/
   :license: GPL
   :recipe: /`gocr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gocr>`_/`0.50 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gocr/0.50>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gocr/0.50/meta.yaml>`_

   


.. conda:package:: gocr

   |downloads_gocr| |docker_gocr|

   :versions:
      
      

      ``0.50-1``,  ``0.50-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gocr

   and update with::

      conda update gocr

   or use the docker container::

      docker pull quay.io/biocontainers/gocr:<tag>

   (see `gocr/tags`_ for valid values for ``<tag>``)


.. |downloads_gocr| image:: https://img.shields.io/conda/dn/bioconda/gocr.svg?style=flat
   :target: https://anaconda.org/bioconda/gocr
   :alt:   (downloads)
.. |docker_gocr| image:: https://quay.io/repository/biocontainers/gocr/status
   :target: https://quay.io/repository/biocontainers/gocr
.. _`gocr/tags`: https://quay.io/repository/biocontainers/gocr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gocr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gocr/README.html