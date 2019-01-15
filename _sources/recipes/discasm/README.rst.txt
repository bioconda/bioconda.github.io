.. _`discasm`:

discasm
=======

|downloads|

DISCASM aims to extract reads that map to reference genomes in a discordant fashion and optionally include reads that do not map to the genome at all\, and perform a de novo transcriptome assembly of these reads. DISCASM relies on the output from STAR \(as run via STAR\-Fusion\)\, and supports de novo transcriptome assembly using Trinity or Oases. \- https\:\/\/github.com\/DISCASM\/DISCASM\/wiki

============= ===========
Home          https://github.com/DISCASM/DISCASM
Versions      0.1.3, 0.1.2
License       BSD-3-Clause
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discasm



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install discasm

and update with::

   conda update discasm



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/discasm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/discasm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/discasm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/discasm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/discasm
.. |docker| image:: https://quay.io/repository/biocontainers/discasm/status
                :target: https://quay.io/repository/biocontainers/discasm

