:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peptide-shaker'
.. highlight: bash

peptide-shaker
==============

.. conda:recipe:: peptide-shaker
   :replaces_section_title:

   PeptideShaker is a search engine independent platform for interpretation of proteomics identification results from multiple search engines\,
   currently supporting X\!Tandem\, MS\-GF\+\, MS Amanda\, OMSSA\, MyriMatch\, Comet\, Tide\, Mascot\, Andromeda and mzIdentML.
   By combining the results from multiple search engines\, while re\-calculating PTM localization scores and redoing the protein inference\,
   PeptideShaker attempts to give you the best possible understanding of your proteomics data\!


   :homepage: https://github.com/compomics/peptide-shaker
   :license: Apache License, Version 2.0
   :recipe: /`peptide-shaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptide-shaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptide-shaker/meta.yaml>`_
   :links: biotools: :biotools:`peptide-shaker`, doi: :doi:`10.1038/nbt.3109`

   


.. conda:package:: peptide-shaker

   |downloads_peptide-shaker| |docker_peptide-shaker|

   :versions: 1.16.40-0, 1.16.36-0, 1.16.35-1, 1.16.35-0, 1.16.32-1, 1.16.31-1, 1.16.30-1, 1.16.29-1, 1.16.26-1, 1.16.23-0, 1.16.22-0, 1.16.20-0, 1.16.17-0, 1.16.16-1, 1.16.16-0, 1.16.15-1, 1.16.15-0, 1.16.14-0, 1.16.13-1, 1.16.13-0, 1.16.4-1, 1.16.4-0, 1.16.3-1, 1.16.3-0, 1.16.0-1, 1.16.0-0, 1.15.1-0, 1.15.0-0, 1.14.6-0, 1.14.4-0, 1.13.6-1, 1.13.6-0, 1.13.3-1, 1.13.3-0, 1.11.0-1, 1.11.0-0, 1.1.3-3, 1.1.3-2, 1.1.3-1
   
   :depends openjdk: >=6
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peptide-shaker

   and update with::

      conda update peptide-shaker

   or use the docker container::

      docker pull quay.io/biocontainers/peptide-shaker:<tag>

   (see `peptide-shaker/tags`_ for valid values for ``<tag>``)


.. |downloads_peptide-shaker| image:: https://img.shields.io/conda/dn/bioconda/peptide-shaker.svg?style=flat
   :target: https://anaconda.org/bioconda/peptide-shaker
   :alt:   (downloads)
.. |docker_peptide-shaker| image:: https://quay.io/repository/biocontainers/peptide-shaker/status
   :target: https://quay.io/repository/biocontainers/peptide-shaker
.. _`peptide-shaker/tags`: https://quay.io/repository/biocontainers/peptide-shaker?tab=tags






Notes
-----
PeptideShaker is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"peptide\-shaker \-Xms512m \-Xmx1g\"



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peptide-shaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peptide-shaker/README.html