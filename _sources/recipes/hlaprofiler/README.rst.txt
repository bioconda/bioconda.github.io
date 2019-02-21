:orphan:  .. only available via index, not via toctree

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

   :versions: 1.0.5-1, 1.0.5-0, 1.0.4-0, 1.0.3-0, 1.0.2-0, 1.0.1-0
   
   :depends kraken-ea: 
   
   :depends perl-base: 
   
   :depends perl-class-load: 
   
   :depends perl-file-compare: 
   
   :depends perl-file-slurp: 
   
   :depends perl-parallel-forkmanager: 
   
   :depends perl-statistics-basic: 
   
   :depends perl-test-trap: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hlaprofiler

   and update with::

      conda update hlaprofiler

   or use the docker container::

      docker pull quay.io/biocontainers/hlaprofiler:<tag>

   (see `hlaprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_hlaprofiler| image:: https://img.shields.io/conda/dn/bioconda/hlaprofiler.svg?style=flat
   :alt:   (downloads)
.. |docker_hlaprofiler| image:: https://quay.io/repository/biocontainers/hlaprofiler/status
   :target: https://quay.io/repository/biocontainers/hlaprofiler
.. _`hlaprofiler/tags`: https://quay.io/repository/biocontainers/hlaprofiler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlaprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlaprofiler/README.html