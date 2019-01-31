.. _`htstream`:

htstream
========

|downloads|

HTStream is a fast\, quality control pipeline for Hight Throughput Sequencing data.
The difference between HTStream and other pipelines is that HTStreams uses a tab delimited fastq format which allows for streaming from application to application.
This streaming creates some awesome efficiencies when processing HTS data.


============= ===========
Home          https://ibest.github.io/HTStream
Versions      1.0.0
License       Apache 2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//htstream/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install htstream

and update with::

   conda update htstream



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/htstream.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/htstream/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/htstream/README.html
.. |downloads| image:: https://anaconda.org/bioconda/htstream/badges/downloads.svg
               :target: https://anaconda.org/bioconda/htstream
.. |docker| image:: https://quay.io/repository/biocontainers/htstream/status
                :target: https://quay.io/repository/biocontainers/htstream

