:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seroba'
.. highlight: bash

seroba
======

.. conda:recipe:: seroba
   :replaces_section_title:

   SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references.

   :homepage: https://github.com/sanger-pathogens/seroba
   :license: GPL / GPL3.0
   :recipe: /`seroba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba/meta.yaml>`_

   SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references. 
   You can use SeroBA to download references from \(https\:\/\/github.com\/phe\-bioinformatics\/PneumoCaT\) 
   to do identify the capsular type of Streptococcus pneumoniae.



.. conda:package:: seroba

   |downloads_seroba| |docker_seroba|

   :versions: 1.0.0-1, 1.0.0-0
   
   :depends ariba: >=2.9.1
   :depends biopython: >=1.68
   :depends bowtie2: 
   :depends cd-hit: 
   :depends kmc: >=3.0
   :depends mummer: 
   :depends pyfastaq: >=3.14.0
   :depends pymummer: >=0.10.2
   :depends python: >=3.5,<3.6.0a0
   :depends pyyaml: >=3.12
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seroba

   and update with::

      conda update seroba

   or use the docker container::

      docker pull quay.io/biocontainers/seroba:<tag>

   (see `seroba/tags`_ for valid values for ``<tag>``)


.. |downloads_seroba| image:: https://img.shields.io/conda/dn/bioconda/seroba.svg?style=flat
   :target: https://anaconda.org/bioconda/seroba
   :alt:   (downloads)
.. |docker_seroba| image:: https://quay.io/repository/biocontainers/seroba/status
   :target: https://quay.io/repository/biocontainers/seroba
.. _`seroba/tags`: https://quay.io/repository/biocontainers/seroba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seroba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seroba/README.html