.. _`jaffa`:

jaffa
=====

|downloads|

JAFFA is a multi\-step pipeline that takes either raw RNA\-Seq reads\, or pre\-assembled transcripts then searches
for gene fusions.  This package contains the wrappers jaffa\-direct\, jaffa\-assembly\, and jaffa\-hybrid.
You can pass the \"refSeq\" parameter in the environment variables JAFFA\_REF\_BASE. Otherwise\, pass any paramters
to the wrappers as you would to the bpipe JAFFA\_\{method\} call in the manual.


============= ===========
Home          https://github.com/Oshlack/JAFFA
Versions      1.09, 1.08
License       GPLv3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//jaffa/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install jaffa

and update with::

   conda update jaffa



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/jaffa.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/jaffa/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/jaffa/README.html
.. |downloads| image:: https://anaconda.org/bioconda/jaffa/badges/downloads.svg
               :target: https://anaconda.org/bioconda/jaffa
.. |docker| image:: https://quay.io/repository/biocontainers/jaffa/status
                :target: https://quay.io/repository/biocontainers/jaffa

