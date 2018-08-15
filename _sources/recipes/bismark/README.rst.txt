.. _`bismark`:

bismark
=======

|downloads|

Bismark is a program to map bisulfite treated sequencing reads to a genome of interest and perform methylation calls in a single step. The output can be easily imported into a genome viewer\, such as SeqMonk\, and enables a researcher to analyse the methylation levels of their samples straight away.

============= ===========
Home          https://www.bioinformatics.babraham.ac.uk/projects/bismark/
Versions      0.17.0, 0.18.1, 0.19.0, 0.19.1
License       GNU General Public License v3 (GPLv3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bismark



Links         biotools: :biotools:`bismark`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bismark

and update with::

   conda update bismark



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bismark.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bismark/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bismark/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bismark/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bismark
.. |docker| image:: https://quay.io/repository/biocontainers/bismark/status
                :target: https://quay.io/repository/biocontainers/bismark

