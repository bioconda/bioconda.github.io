.. _`behst`:

behst
=====

|downloads|

BEHST reads an input dataset of chromosome regions\, and intersects them with the chromatin interactions available in the Hi\-C dataset. Of these chromosome regions\, BEHST selects those that are presentthe regulatory regions of genes of APPRIS\, a dataset of principal isoform annotations. We defined these cis\-regulatory regions upon the position of their nearest transcription start site of the APPRIS genes\' principal transcripts \(obtained through GENCODE\)\, plus an upstream and downstream extension. Afterwards\, BEHST takes the genes of the resulting partner loci found in gene regulatory regions\, and performs a gene set enrichment analysis on them through g\:Profiler. BEHST\, finally\, outputs the list of the most significant Gene Ontology terms detected by g\:Profiler. Citation\: Davide Chicco\, Haixin Sarah Bi\, Juri Reimand\, and Michael M. Hoffman\, \'BEHST\: Genomic set enrichment analysis enhanced through integration of chromatin long\-range interactions\'\, 2018. In preparation. Website\: http\:\/\/behst.hoffmanlab.org\/ 

============= ===========
Home          https://bitbucket.org/hoffmanlab/behst/overview
Versions      3.7, 3.6, 3.5, 3.0, 2.9, 2.8, 2.7, 2.6, 2.5, 1.9, 1.8, 1.7, 1.6, 1.4, 0.9, 0.8
License       GPLv2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/behst



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install behst

and update with::

   conda update behst



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/behst.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/behst/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/behst/README.html
.. |downloads| image:: https://anaconda.org/bioconda/behst/badges/downloads.svg
               :target: https://anaconda.org/bioconda/behst
.. |docker| image:: https://quay.io/repository/biocontainers/behst/status
                :target: https://quay.io/repository/biocontainers/behst

