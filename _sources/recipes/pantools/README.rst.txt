:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pantools'
.. highlight: bash

pantools
========

.. conda:recipe:: pantools
   :replaces_section_title:
   :noindex:

   PanTools is a pangenomic toolkit for comparative analysis of large number of genomes.

   :homepage: https://git.wur.nl/bioinformatics/pantools
   :license: GPL3 / GNU GPL version 3
   :recipe: /`pantools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantools/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1093/bioinformatics/btw455`, doi: :doi:`https://doi.org/10.1186/s12859-018-2362-4`

   PanTools is a pangenomic toolkit for comparative analysis of large number
   of genomes. It is developed in the Bioinformatics Group of Wageningen
   University\, the Netherlands. Please cite the relevant publication\(s\) from
   the list of publications if you use PanTools in your research.



.. conda:package:: pantools

   |downloads_pantools| |docker_pantools|

   :versions:
      
      

      ``2.0.0-0``,  ``1.2-1``,  ``1.2-0``,  ``1.0-0``

      

   
   :depends kmc: 
   :depends mcl: 
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pantools

   and update with::

      conda update pantools

   or use the docker container::

      docker pull quay.io/biocontainers/pantools:<tag>

   (see `pantools/tags`_ for valid values for ``<tag>``)


.. |downloads_pantools| image:: https://img.shields.io/conda/dn/bioconda/pantools.svg?style=flat
   :target: https://anaconda.org/bioconda/pantools
   :alt:   (downloads)
.. |docker_pantools| image:: https://quay.io/repository/biocontainers/pantools/status
   :target: https://quay.io/repository/biocontainers/pantools
.. _`pantools/tags`: https://quay.io/repository/biocontainers/pantools?tab=tags






Notes
-----
PanTools is Java program that comes with a custom wrapper Python script.
This wrapper is called \"pantools\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"pantools \-Xms512m \-Xmx1g\"



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pantools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pantools/README.html