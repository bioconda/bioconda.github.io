:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnachisel'
.. highlight: bash

dnachisel
=========

.. conda:recipe:: dnachisel
   :replaces_section_title:
   :noindex:

   Optimize DNA sequences under constraints.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaChisel
   :license: MIT
   :recipe: /`dnachisel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnachisel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnachisel/meta.yaml>`_

   


.. conda:package:: dnachisel

   |downloads_dnachisel| |docker_dnachisel|

   :versions:
      
      

      ``3.2.6-0``

      

   
   :depends biopython: 
   :depends docopt: 
   :depends flametree: 
   :depends numpy: 
   :depends proglog: 
   :depends python: 
   :depends python-codon-tables: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnachisel

   and update with::

      conda update dnachisel

   or use the docker container::

      docker pull quay.io/biocontainers/dnachisel:<tag>

   (see `dnachisel/tags`_ for valid values for ``<tag>``)


.. |downloads_dnachisel| image:: https://img.shields.io/conda/dn/bioconda/dnachisel.svg?style=flat
   :target: https://anaconda.org/bioconda/dnachisel
   :alt:   (downloads)
.. |docker_dnachisel| image:: https://quay.io/repository/biocontainers/dnachisel/status
   :target: https://quay.io/repository/biocontainers/dnachisel
.. _`dnachisel/tags`: https://quay.io/repository/biocontainers/dnachisel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnachisel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnachisel/README.html