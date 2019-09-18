:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'encyclopedia'
.. highlight: bash

encyclopedia
============

.. conda:recipe:: encyclopedia
   :replaces_section_title:

   EncyclopeDIA is library search engine comprised of several algorithms for DIA data analysis

   :homepage: https://bitbucket.org/searleb/encyclopedia/wiki/Home
   :license: APACHE / Apache License 2.0
   :recipe: /`encyclopedia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encyclopedia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encyclopedia/meta.yaml>`_
   :links: biotools: :biotools:`encyclopedia`, doi: :doi:`10.1038/s41467-018-07454-w`

   EncyclopeDIA is library search engine comprised of several algorithms for DIA data analysis
   and can search for peptides using either DDA\-based spectrum libraries or
   DIA\-based chromatogram libraries.
   Check out our manuscript describing EncyclopeDIA at Nature Communications \(Searle et al\, 2018\)
   for more information. EncyclopeDIA contains Walnut\, an implementation of 
   the PECAN \(Ting et al\, 2017\) scoring system\, to enable chromatogram library generation
   from FASTA protein sequence databases when spectrum libraries are unavailable.



.. conda:package:: encyclopedia

   |downloads_encyclopedia| |docker_encyclopedia|

   :versions: 0.9.0-0
   
   :depends openjdk: >=8
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install encyclopedia

   and update with::

      conda update encyclopedia

   or use the docker container::

      docker pull quay.io/biocontainers/encyclopedia:<tag>

   (see `encyclopedia/tags`_ for valid values for ``<tag>``)


.. |downloads_encyclopedia| image:: https://img.shields.io/conda/dn/bioconda/encyclopedia.svg?style=flat
   :target: https://anaconda.org/bioconda/encyclopedia
   :alt:   (downloads)
.. |docker_encyclopedia| image:: https://quay.io/repository/biocontainers/encyclopedia/status
   :target: https://quay.io/repository/biocontainers/encyclopedia
.. _`encyclopedia/tags`: https://quay.io/repository/biocontainers/encyclopedia?tab=tags






Notes
-----
EncyclopeDIA is Java program that comes with a custom wrapper python shell script.
This shell wrapper is called \"EncyclopeDIA\" and is on \$PATH by default. By default
\"\-Xms1g \-Xmx8g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"EncyclopeDIA \-Xms512m \-Xmx16g\"



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/encyclopedia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/encyclopedia/README.html