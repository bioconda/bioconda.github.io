.. title:: Package Recipe 'hlaprofiler'
.. highlight: bash


hlaprofiler
===========

.. conda:recipe:: hlaprofiler
   :replaces_section_title:

   HLAProfiler uses k\-mer profiles to predict HLA types from paired\-end RNA\-seq data.

   :homepage: https://github.com/ExpressionAnalysis/HLAProfiler
   :license: Custom non-commercial license
   :recipe: /`hlaprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlaprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlaprofiler/meta.yaml>`_

   


.. conda:package:: hlaprofiler

   |downloads_hlaprofiler| |docker_hlaprofiler|

   :versions: 1.0.5, 1.0.4, 1.0.3, 1.0.2, 1.0.1

   :depends: :conda:package:`kraken-ea`  :conda:package:`perl-base`  :conda:package:`perl-class-load`  :conda:package:`perl-file-compare`  :conda:package:`perl-file-slurp`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-statistics-basic`  :conda:package:`perl-test-trap`  

   :required~by: |required_by_hlaprofiler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hlaprofiler

   and update with::

      conda update hlaprofiler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hlaprofiler


.. |required_by_hlaprofiler| conda:required_by:: hlaprofiler
.. |downloads_hlaprofiler| image:: https://img.shields.io/conda/dn/bioconda/hlaprofiler.svg?style=flat
   :alt:   (downloads)
.. |docker_hlaprofiler| image:: https://quay.io/repository/biocontainers/hlaprofiler/status
   :target: https://quay.io/repository/biocontainers/hlaprofiler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlaprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlaprofiler/README.html

