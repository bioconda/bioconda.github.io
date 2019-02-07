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

   :versions: 0.11.4

   :depends: :conda:package:`biopython` >=1.64 :conda:package:`configparser`  :conda:package:`cython`  :conda:package:`fisher` >=0.1.5 :conda:package:`hmmlearn` >=0.2 :conda:package:`htseq`  :conda:package:`matplotlib` >=1.1.0 :conda:package:`matplotlib-venn`  :conda:package:`moods`  :conda:package:`mpmath`  :conda:package:`natsort`  :conda:package:`numpy` >=1.4.0,<=1.11 :conda:package:`numpy-base`  :conda:package:`pybigwig`  :conda:package:`pysam` >=0.12.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pyvcf`  :conda:package:`pyx`  :conda:package:`scikit-learn` >=0.19.0,<0.20.0 :conda:package:`scipy` >=1.0.0 :conda:package:`ucsc-bedgraphtobigwig`  :conda:package:`ucsc-bedtobigbed`  :conda:package:`ucsc-bigbedtobed`  :conda:package:`ucsc-bigwigmerge`  :conda:package:`ucsc-wigtobigwig`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_rgt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rgt

   and update with::

      conda update rgt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rgt


.. |required_by_rgt| conda:required_by:: rgt
.. |downloads_rgt| image:: https://img.shields.io/conda/dn/bioconda/rgt.svg?style=flat
   :alt:   (downloads)
.. |docker_rgt| image:: https://quay.io/repository/biocontainers/rgt/status
   :target: https://quay.io/repository/biocontainers/rgt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgt/README.html

