:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lissero'
.. highlight: bash

lissero
=======

.. conda:recipe:: lissero
   :replaces_section_title:
   :noindex:

   In silico serotyping of Listeria monocytogenes

   :homepage: https://github.com/MDU-PHL/lissero
   :documentation: https://github.com/MDU-PHL/LisSero/blob/master/README.md
   
   :license: GPL / GPL-3.0
   :recipe: /`lissero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lissero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lissero/meta.yaml>`_

   


.. conda:package:: lissero

   |downloads_lissero| |docker_lissero|

   :versions:
      
      

      ``0.4.8-0``,  ``0.4.5-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.10``
   :depends click: 
   :depends ispcr: 
   :depends loguru: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lissero

   and update with::

      conda update lissero

   or use the docker container::

      docker pull quay.io/biocontainers/lissero:<tag>

   (see `lissero/tags`_ for valid values for ``<tag>``)


.. |downloads_lissero| image:: https://img.shields.io/conda/dn/bioconda/lissero.svg?style=flat
   :target: https://anaconda.org/bioconda/lissero
   :alt:   (downloads)
.. |docker_lissero| image:: https://quay.io/repository/biocontainers/lissero/status
   :target: https://quay.io/repository/biocontainers/lissero
.. _`lissero/tags`: https://quay.io/repository/biocontainers/lissero?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lissero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lissero/README.html