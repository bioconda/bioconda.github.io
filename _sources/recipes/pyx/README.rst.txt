:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyx'
.. highlight: bash

pyx
===

.. conda:recipe:: pyx
   :replaces_section_title:
   :noindex:

   Python package for the generation of PostScript\, PDF\, and SVG files

   :homepage: http://pyx.sourceforge.net/
   :license: GNU General Public License (GPL)
   :recipe: /`pyx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyx/meta.yaml>`_

   


.. conda:package:: pyx

   |downloads_pyx| |docker_pyx|

   :versions:
      
      

      ``0.14.1-1``,  ``0.14.1-0``,  ``0.12.1-1``,  ``0.12.1-0``

      

   
   :depends python: ``>=3.6,<3.7.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyx

   and update with::

      conda update pyx

   or use the docker container::

      docker pull quay.io/biocontainers/pyx:<tag>

   (see `pyx/tags`_ for valid values for ``<tag>``)


.. |downloads_pyx| image:: https://img.shields.io/conda/dn/bioconda/pyx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyx
   :alt:   (downloads)
.. |docker_pyx| image:: https://quay.io/repository/biocontainers/pyx/status
   :target: https://quay.io/repository/biocontainers/pyx
.. _`pyx/tags`: https://quay.io/repository/biocontainers/pyx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyx/README.html