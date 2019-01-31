.. _`tpp`:

tpp
===

|downloads|

The Trans\-Proteomic Pipeline \(TPP\) is a collection of integrated tools for MS\/MS proteomics developed at the Seattle Proteome Center. The Bioconda package includes the command\-line versions of the TPP toolset. These programs include tools for validation \(PeptideProphet\, iProphet\, ProteinProphet\, Mayu\) and quantification \(XPRESS\, ASAPRatio\, Libra\) as well as a number of parsers and converters \(Out2XML\, Mascot2XML\, Tandem2XML\, etc\).


============= ===========
Home          http://tools.proteomecenter.org/wiki/index.php?title=Software:TPP
Versions      5.0.0
License       GPL v. 2.0 and LGPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//tpp/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install tpp

and update with::

   conda update tpp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/tpp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/tpp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/tpp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/tpp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/tpp
.. |docker| image:: https://quay.io/repository/biocontainers/tpp/status
                :target: https://quay.io/repository/biocontainers/tpp

