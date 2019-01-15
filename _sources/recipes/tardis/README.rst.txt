.. _`tardis`:

tardis
======

|downloads|

Pre\-processor for bioinformatics cluster job submission

============= ===========
Home          https://github.com/AgResearch/tardis
Versions      1.0.19, 0.5.17, 0.5.16, 0.5.13, 0.5.12, 0.5.11, 0.5.10, 0.5.9
License       GPL-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tardis


Development   https://github.com/AgResearch/tardis


============= ===========

Tardis is a pre\-processor which reconditions \(precompiles\) a marked\-up unix
shell command to generate a sequence of conditioned commands which it then
launches on a cluster.  The mark\-up is added by the user to indicate the
input\(s\) and output\(s\) of the command.  Tardis splits input files into
conditioned input chunks and will uncondition \(join together\) the output
chunks to obtain the final outputs\, with the sequence of conditioned commands
referring to conditioned input and output filenames.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install tardis

and update with::

   conda update tardis



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/tardis.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/tardis/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/tardis/README.html
.. |downloads| image:: https://anaconda.org/bioconda/tardis/badges/downloads.svg
               :target: https://anaconda.org/bioconda/tardis
.. |docker| image:: https://quay.io/repository/biocontainers/tardis/status
                :target: https://quay.io/repository/biocontainers/tardis

