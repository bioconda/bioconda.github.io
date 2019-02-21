:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgt'
.. highlight: bash

rgt
===

.. conda:recipe:: rgt
   :replaces_section_title:

   Toolkit to perform regulatory genomics data analysis

   :homepage: http://www.regulatory-genomics.org
   :documentation: http://www.regulatory-genomics.org/rgt/tutorial/
   
   :developer docs: https://github.com/CostaLab/reg-gen
   :license: GPL / GPL
   :recipe: /`rgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgt/meta.yaml>`_

   


.. conda:package:: rgt

   |downloads_rgt| |docker_rgt|

   :versions: 0.11.4-1, 0.11.4-0
   
   :depends biopython: >=1.64
   
   :depends configparser: 
   
   :depends cython: 
   
   :depends fisher: >=0.1.5
   
   :depends hmmlearn: >=0.2
   
   :depends htseq: 
   
   :depends matplotlib: >=1.1.0
   
   :depends matplotlib-venn: 
   
   :depends moods: 
   
   :depends mpmath: 
   
   :depends natsort: 
   
   :depends numpy: 1.11.*
   
   :depends numpy-base: 
   
   :depends pybigwig: 
   
   :depends pysam: >=0.12.0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pyvcf: 
   
   :depends pyx: 
   
   :depends scikit-learn: >=0.19.0,<0.20.0
   
   :depends scipy: >=1.0.0
   
   :depends ucsc-bedgraphtobigwig: 
   
   :depends ucsc-bedtobigbed: 
   
   :depends ucsc-bigbedtobed: 
   
   :depends ucsc-bigwigmerge: 
   
   :depends ucsc-wigtobigwig: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rgt

   and update with::

      conda update rgt

   or use the docker container::

      docker pull quay.io/biocontainers/rgt:<tag>

   (see `rgt/tags`_ for valid values for ``<tag>``)


.. |downloads_rgt| image:: https://img.shields.io/conda/dn/bioconda/rgt.svg?style=flat
   :alt:   (downloads)
.. |docker_rgt| image:: https://quay.io/repository/biocontainers/rgt/status
   :target: https://quay.io/repository/biocontainers/rgt
.. _`rgt/tags`: https://quay.io/repository/biocontainers/rgt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgt/README.html