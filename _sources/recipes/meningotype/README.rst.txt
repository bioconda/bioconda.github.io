:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meningotype'
.. highlight: bash

meningotype
===========

.. conda:recipe:: meningotype
   :replaces_section_title:
   :noindex:

   In silico serotyping and finetyping \(porA and fetA\) of Neisseria meningitidis

   :homepage: https://github.com/MDU-PHL/meningotype
   :license: GPL-3.0
   :recipe: /`meningotype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meningotype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meningotype/meta.yaml>`_

   


.. conda:package:: meningotype

   |downloads_meningotype| |docker_meningotype|

   :versions:
      
      

      ``0.8.4-0``

      

   
   :depends argparse: 
   :depends biopython: 
   :depends blast: 
   :depends ispcr: 
   :depends mlst: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meningotype

   and update with::

      conda update meningotype

   or use the docker container::

      docker pull quay.io/biocontainers/meningotype:<tag>

   (see `meningotype/tags`_ for valid values for ``<tag>``)


.. |downloads_meningotype| image:: https://img.shields.io/conda/dn/bioconda/meningotype.svg?style=flat
   :target: https://anaconda.org/bioconda/meningotype
   :alt:   (downloads)
.. |docker_meningotype| image:: https://quay.io/repository/biocontainers/meningotype/status
   :target: https://quay.io/repository/biocontainers/meningotype
.. _`meningotype/tags`: https://quay.io/repository/biocontainers/meningotype?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meningotype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meningotype/README.html