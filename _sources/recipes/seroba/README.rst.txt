.. title:: Package Recipe 'seroba'
.. highlight: bash


seroba
======

.. conda:recipe:: seroba
   :replaces_section_title:

   SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references.

   :homepage: https://github.com/sanger-pathogens/seroba
   :license: GPL / GPL3.0
   :recipe: /`seroba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba/meta.yaml>`_

   SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references. 
   You can use SeroBA to download references from \(https\:\/\/github.com\/phe\-bioinformatics\/PneumoCaT\) 
   to do identify the capsular type of Streptococcus pneumoniae.



.. conda:package:: seroba

   |downloads_seroba| |docker_seroba|

   :versions: 1.0.0

   :depends: :conda:package:`ariba` >=2.9.1 :conda:package:`biopython` >=1.68 :conda:package:`bowtie2`  :conda:package:`cd-hit`  :conda:package:`kmc` >=3.0 :conda:package:`mummer`  :conda:package:`pyfastaq` >=3.14.0 :conda:package:`pymummer` >=0.10.2 :conda:package:`python` 3.5* :conda:package:`pyyaml` >=3.12 :conda:package:`setuptools`  

   :required~by: |required_by_seroba|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seroba

   and update with::

      conda update seroba

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seroba


.. |required_by_seroba| conda:required_by:: seroba
.. |downloads_seroba| image:: https://img.shields.io/conda/dn/bioconda/seroba.svg?style=flat
   :alt:   (downloads)
.. |docker_seroba| image:: https://quay.io/repository/biocontainers/seroba/status
   :target: https://quay.io/repository/biocontainers/seroba







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seroba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seroba/README.html

