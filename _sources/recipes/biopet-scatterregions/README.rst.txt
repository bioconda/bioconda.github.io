:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-scatterregions'
.. highlight: bash

biopet-scatterregions
=====================

.. conda:recipe:: biopet-scatterregions
   :replaces_section_title:
   :noindex:

   This tool breaks a reference or bed file into smaller scatter regions of equal size.

   :homepage: https://github.com/biopet/scatterregions
   :license: MIT
   :recipe: /`biopet-scatterregions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-scatterregions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-scatterregions/meta.yaml>`_

   This tool breaks a reference or bed file into smaller scatter regions of equal size. This can be used for processing inside a pipeline.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/scatterregions



.. conda:package:: biopet-scatterregions

   |downloads_biopet-scatterregions| |docker_biopet-scatterregions|

   :versions:
      
      

      ``0.2-0``,  ``0.1-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet-scatterregions

   and update with::

      conda update biopet-scatterregions

   or use the docker container::

      docker pull quay.io/biocontainers/biopet-scatterregions:<tag>

   (see `biopet-scatterregions/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-scatterregions| image:: https://img.shields.io/conda/dn/bioconda/biopet-scatterregions.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-scatterregions
   :alt:   (downloads)
.. |docker_biopet-scatterregions| image:: https://quay.io/repository/biocontainers/biopet-scatterregions/status
   :target: https://quay.io/repository/biocontainers/biopet-scatterregions
.. _`biopet-scatterregions/tags`: https://quay.io/repository/biocontainers/biopet-scatterregions?tab=tags






Notes
-----
biopet\-scatterregions is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-scatterregions\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-scatterregions \-Xms512m \-Xmx1g\'.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-scatterregions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-scatterregions/README.html