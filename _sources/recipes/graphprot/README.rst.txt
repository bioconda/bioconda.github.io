.. title:: Package Recipe 'graphprot'
.. highlight: bash


graphprot
=========

.. conda:recipe:: graphprot
   :replaces_section_title:

   GraphProt is a tool for modelling binding preferences of RNA\-binding proteins from high\-throughput experiments such as CLIP\-seq and RNAcompete.

   :homepage: https://github.com/dmaticzka/graphprot
   :license: MIT
   :recipe: /`graphprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphprot/meta.yaml>`_

   


.. conda:package:: graphprot

   |downloads_graphprot| |docker_graphprot|

   :versions: 1.1.7, 1.1.6

   :depends: :conda:package:`coreutils`  :conda:package:`curl`  :conda:package:`gawk`  :conda:package:`libgcc`  :conda:package:`libsvm`  :conda:package:`make`  :conda:package:`openmp`  :conda:package:`perl-getopt-long`  :conda:package:`r-plyr`  :conda:package:`r-prroc`  :conda:package:`rnashapes` <3 :conda:package:`weblogo` >=3 :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_graphprot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphprot

   and update with::

      conda update graphprot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/graphprot


.. |required_by_graphprot| conda:required_by:: graphprot
.. |downloads_graphprot| image:: https://img.shields.io/conda/dn/bioconda/graphprot.svg?style=flat
   :alt:   (downloads)
.. |docker_graphprot| image:: https://quay.io/repository/biocontainers/graphprot/status
   :target: https://quay.io/repository/biocontainers/graphprot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphprot/README.html

