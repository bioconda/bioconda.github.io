:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mqc'
.. highlight: bash

mqc
===

.. conda:recipe:: mqc
   :replaces_section_title:

   qualtiy control tool to assess the mapping quality of a ribosome profiling experiment

   :homepage: https://github.com/Biobix/mQC
   :license: GNU General Public License v3.0
   :recipe: /`mqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mqc/meta.yaml>`_

   


.. conda:package:: mqc

   |downloads_mqc| |docker_mqc|

   :versions: 1.10-1, 1.10-0, 1.9-0, 1.8-0, 1.7-0, 1.6-0, 1.5-0, 1.4-0, 1.3-0, 1.2-3, 1.2-2, 1.2-1, 1.2-0
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends perl: 5.22.0*
   
   :depends perl-app-cpanminus: 
   
   :depends perl-dbd-sqlite: 
   
   :depends perl-dbi: 
   
   :depends perl-parallel-forkmanager: 
   
   :depends plastid: 0.4.7 py27_0
   
   :depends pysam: 0.11*
   
   :depends python: 2.7*
   
   :depends r-base: 3.4.1*
   
   :depends samtools: 
   
   :depends seaborn: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mqc

   and update with::

      conda update mqc

   or use the docker container::

      docker pull quay.io/biocontainers/mqc:<tag>

   (see `mqc/tags`_ for valid values for ``<tag>``)


.. |downloads_mqc| image:: https://img.shields.io/conda/dn/bioconda/mqc.svg?style=flat
   :alt:   (downloads)
.. |docker_mqc| image:: https://quay.io/repository/biocontainers/mqc/status
   :target: https://quay.io/repository/biocontainers/mqc
.. _`mqc/tags`: https://quay.io/repository/biocontainers/mqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mqc/README.html