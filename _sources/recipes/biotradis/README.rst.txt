.. title:: Package Recipe 'biotradis'
.. highlight: bash


biotradis
=========

.. conda:recipe:: biotradis
   :replaces_section_title:

   A set of tools to analyse the output from TraDIS analyses

   :homepage: https://github.com/sanger-pathogens/Bio-Tradis
   :license: GPLv3
   :recipe: /`biotradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotradis/meta.yaml>`_

   


.. conda:package:: biotradis

   |downloads_biotradis| |docker_biotradis|

   :versions: 1.4.1

   :depends: :conda:package:`bioconductor-edger`  :conda:package:`perl-app-cpanminus`  :conda:package:`perl-moose`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-pathtools`  :conda:package:`perl-scalar-util-numeric`  :conda:package:`r-getopt`  :conda:package:`r-mass`  :conda:package:`samtools`  :conda:package:`smalt`  

   :required~by: |required_by_biotradis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biotradis

   and update with::

      conda update biotradis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biotradis


.. |required_by_biotradis| conda:required_by:: biotradis
.. |downloads_biotradis| image:: https://img.shields.io/conda/dn/bioconda/biotradis.svg?style=flat
   :alt:   (downloads)
.. |docker_biotradis| image:: https://quay.io/repository/biocontainers/biotradis/status
   :target: https://quay.io/repository/biocontainers/biotradis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotradis/README.html

