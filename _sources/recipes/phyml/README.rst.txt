.. _`phyml`:

phyml
=====

|downloads|

Phylogenetic estimation using \(Maximum\) Likelihood

============= ===========
Home          http://www.atgc-montpellier.fr/phyml/
Versions      3.3.20180621, 3.3.20170530, 3.2.0
License       GPLv2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyml


Development   https://github.com/stephaneguindon/phyml/


Links         biotools: :biotools:`phyml`, doi: :doi:`10.1093/sysbio/syq010`

============= ===========

PhyML is a software that estimates maximum likelihood phylogenies from
alignments of nucleotide or amino acid sequences. The main strength of
PhyML lies in the large number of substitution models coupled to various
options to search the space of phylogenetic tree topologies\, going from
very fast and efficient methods to slower but generally more accurate
approaches. PhyML was designed to process moderate to large data sets. In
theory\, alignments with up to 4\,000 sequences 2\,000\,000 character\-long
can be processed. PhyML can process data sets made of multiple genes and
fit sophisticated substitution models with heterogeneous components
across partition elements.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install phyml

and update with::

   conda update phyml



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/phyml.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/phyml/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/phyml/README.html
.. |downloads| image:: https://anaconda.org/bioconda/phyml/badges/downloads.svg
               :target: https://anaconda.org/bioconda/phyml
.. |docker| image:: https://quay.io/repository/biocontainers/phyml/status
                :target: https://quay.io/repository/biocontainers/phyml

