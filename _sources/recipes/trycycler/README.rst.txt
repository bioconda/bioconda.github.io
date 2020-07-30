:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trycycler'
.. highlight: bash

trycycler
=========

.. conda:recipe:: trycycler
   :replaces_section_title:
   :noindex:

   Trycycler is a tool for generating consensus long\-read assemblies for bacterial genomes

   :homepage: https://github.com/rrwick/Trycycler
   :license: GPLv3
   :recipe: /`trycycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trycycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trycycler/meta.yaml>`_

   


.. conda:package:: trycycler

   |downloads_trycycler| |docker_trycycler|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends mash: 
   :depends minimap2: 
   :depends muscle: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends r-ape: 
   :depends r-base: 
   :depends r-phangorn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trycycler

   and update with::

      conda update trycycler

   or use the docker container::

      docker pull quay.io/biocontainers/trycycler:<tag>

   (see `trycycler/tags`_ for valid values for ``<tag>``)


.. |downloads_trycycler| image:: https://img.shields.io/conda/dn/bioconda/trycycler.svg?style=flat
   :target: https://anaconda.org/bioconda/trycycler
   :alt:   (downloads)
.. |docker_trycycler| image:: https://quay.io/repository/biocontainers/trycycler/status
   :target: https://quay.io/repository/biocontainers/trycycler
.. _`trycycler/tags`: https://quay.io/repository/biocontainers/trycycler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trycycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trycycler/README.html