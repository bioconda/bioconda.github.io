:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectra-cluster-cli'
.. highlight: bash

spectra-cluster-cli
===================

.. conda:recipe:: spectra-cluster-cli
   :replaces_section_title:

   This is a stand\-alone implementation of the new updated PRIDE Cluster algorithm. It is based on the spectra\-cluster API and uses a highly similar logic as the Hadoop implementation spectra\-cluster\-hadoop used to build the PRIDE Cluster resource.

   :homepage: https://github.com/spectra-cluster/spectra-cluster-cli
   :license: Apache / Apache-2.0
   :recipe: /`spectra-cluster-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectra-cluster-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectra-cluster-cli/meta.yaml>`_

   


.. conda:package:: spectra-cluster-cli

   |downloads_spectra-cluster-cli| |docker_spectra-cluster-cli|

   :versions: 1.1.2-0, 1.0.1-1, 1.0.1-0
   
   :depends openjdk: >=6
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spectra-cluster-cli

   and update with::

      conda update spectra-cluster-cli

   or use the docker container::

      docker pull quay.io/biocontainers/spectra-cluster-cli:<tag>

   (see `spectra-cluster-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_spectra-cluster-cli| image:: https://img.shields.io/conda/dn/bioconda/spectra-cluster-cli.svg?style=flat
   :alt:   (downloads)
.. |docker_spectra-cluster-cli| image:: https://quay.io/repository/biocontainers/spectra-cluster-cli/status
   :target: https://quay.io/repository/biocontainers/spectra-cluster-cli
.. _`spectra-cluster-cli/tags`: https://quay.io/repository/biocontainers/spectra-cluster-cli?tab=tags






Notes
-----
spectra\-cluster\-cli is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"spectra\-cluster\-cli \-Xms512m \-Xmx1g\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectra-cluster-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectra-cluster-cli/README.html