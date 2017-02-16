.. _`spectra-cluster-cli`:

spectra-cluster-cli
===================

|downloads|

This is a stand-alone implementation of the new updated PRIDE Cluster algorithm. It is based on the spectra-cluster API and uses a highly similar logic as the Hadoop implementation spectra-cluster-hadoop used to build the PRIDE Cluster resource.

======== ===========
Home     https://github.com/spectra-cluster/spectra-cluster-cli
Versions 1.0.1
License  Apache License, Version 2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectra-cluster-cli
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install spectra-cluster-cli

and update with::

   conda update spectra-cluster-cli

Notes
-----

spectra-cluster-cli is Java program that comes with a custom wrapper shell script.
This shell wrapper is called "opsin" and is on $PATH by default. By default
"-Xms512m -Xmx1g" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have _JAVA_OPTIONS
set globally this will take precedence.
For example run it with "spectra-cluster-cli -Xms512m -Xmx1g"


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/spectra-cluster-cli.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/spectra-cluster-cli/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/spectra-cluster-cli/README.html
.. |downloads| image:: https://anaconda.org/bioconda/spectra-cluster-cli/badges/downloads.svg
               :target: https://anaconda.org/bioconda/spectra-cluster-cli
.. |docker| image:: https://quay.io/repository/biocontainers/spectra-cluster-cli/status
                :target: https://quay.io/repository/biocontainers/spectra-cluster-cli


