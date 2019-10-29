:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feelnc'
.. highlight: bash

feelnc
======

.. conda:recipe:: feelnc
   :replaces_section_title:

   FlExible Extraction of LncRNA

   :homepage: https://github.com/tderrien/FEELnc
   :license: GNU General Public License v3.0
   :recipe: /`feelnc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feelnc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feelnc/meta.yaml>`_

   


.. conda:package:: feelnc

   |downloads_feelnc| |docker_feelnc|

   :versions: 0.1.1-5, 0.1.1-4, 0.1.1-3, 0.1.1-2, 0.1.1-1, 0.1.1-0
   
   :depends fasta_ushuffle: 
   :depends kmerinshort: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bio-featureio: 
   :depends perl-bioperl: 
   :depends perl-db-file: 
   :depends perl-parallel-forkmanager: 
   :depends r-base: 
   :depends r-randomforest: 
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install feelnc

   and update with::

      conda update feelnc

   or use the docker container::

      docker pull quay.io/biocontainers/feelnc:<tag>

   (see `feelnc/tags`_ for valid values for ``<tag>``)


.. |downloads_feelnc| image:: https://img.shields.io/conda/dn/bioconda/feelnc.svg?style=flat
   :target: https://anaconda.org/bioconda/feelnc
   :alt:   (downloads)
.. |docker_feelnc| image:: https://quay.io/repository/biocontainers/feelnc/status
   :target: https://quay.io/repository/biocontainers/feelnc
.. _`feelnc/tags`: https://quay.io/repository/biocontainers/feelnc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feelnc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feelnc/README.html