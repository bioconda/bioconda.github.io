:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dfam'
.. highlight: bash

dfam
====

.. conda:recipe:: dfam
   :replaces_section_title:

   The Dfam database is a collection of Repetitive DNA element sequence alignments\, hidden Markov models \(HMMs\) and matches lists for complete Eukaryote genomes

   :homepage: dfam.org
   :license: GPL
   :recipe: /`dfam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfam/meta.yaml>`_

   


.. conda:package:: dfam

   |downloads_dfam| |docker_dfam|

   :versions: 2.0-1, 2.0-0
   
   :depends hmmer: 
   
   :depends perl: 
   
   :depends python: 
   
   :depends python-wget: 
   
   :depends repeatmasker: 
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dfam

   and update with::

      conda update dfam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dfam:<tag>

   (see `dfam/tags`_ for valid values for ``<tag>``)


.. |downloads_dfam| image:: https://img.shields.io/conda/dn/bioconda/dfam.svg?style=flat
   :alt:   (downloads)
.. |docker_dfam| image:: https://quay.io/repository/biocontainers/dfam/status
   :target: https://quay.io/repository/biocontainers/dfam
.. _`dfam/tags`: https://quay.io/repository/biocontainers/dfam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dfam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dfam/README.html