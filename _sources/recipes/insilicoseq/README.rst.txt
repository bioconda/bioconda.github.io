:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'insilicoseq'
.. highlight: bash

insilicoseq
===========

.. conda:recipe:: insilicoseq
   :replaces_section_title:

   🚀 A sequencing simulator.

   :homepage: https://github.com/HadrienG/InSilicoSeq
   :license: MIT / MIT License
   :recipe: /`insilicoseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insilicoseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insilicoseq/meta.yaml>`_

   


.. conda:package:: insilicoseq

   |downloads_insilicoseq| |docker_insilicoseq|

   :versions: 1.3.5-1, 1.3.5-0
   
   :depends biopython: 
   :depends future: 
   :depends joblib: 
   :depends numpy: 1.16.2.*
   :depends pysam: >=0.15.1
   :depends python: 
   :depends requests: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install insilicoseq

   and update with::

      conda update insilicoseq

   or use the docker container::

      docker pull quay.io/biocontainers/insilicoseq:<tag>

   (see `insilicoseq/tags`_ for valid values for ``<tag>``)


.. |downloads_insilicoseq| image:: https://img.shields.io/conda/dn/bioconda/insilicoseq.svg?style=flat
   :target: https://anaconda.org/bioconda/insilicoseq
   :alt:   (downloads)
.. |docker_insilicoseq| image:: https://quay.io/repository/biocontainers/insilicoseq/status
   :target: https://quay.io/repository/biocontainers/insilicoseq
.. _`insilicoseq/tags`: https://quay.io/repository/biocontainers/insilicoseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/insilicoseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/insilicoseq/README.html