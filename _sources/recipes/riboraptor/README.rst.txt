.. title:: Package Recipe 'riboraptor'
.. highlight: bash


riboraptor
==========

.. conda:recipe:: riboraptor
   :replaces_section_title:

   Python package to analyse ribosome profiling data

   :homepage: https://github.com/saketkc/riboraptor
   :documentation: https://saketkc.github.io/riboraptor
   
   :license: BSD / BSD License
   :recipe: /`riboraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboraptor/meta.yaml>`_

   


.. conda:package:: riboraptor

   |downloads_riboraptor| |docker_riboraptor|

   :versions: 0.2.2

   :depends: :conda:package:`biopython` >=1.70 :conda:package:`click` >=6.0 :conda:package:`click-help-colors` >=0.3 :conda:package:`fastqc`  :conda:package:`htseq`  :conda:package:`htseq` >=0.9.1 :conda:package:`matplotlib` >=2.1.0 :conda:package:`numpy` >=1.11.0 :conda:package:`pandas` >=0.20.3 :conda:package:`pybedtools` >=0.7.10 :conda:package:`pybigwig` >=0.2.8 :conda:package:`pyfaidx` >=0.5.0 :conda:package:`pysam` >=0.11.2.2 :conda:package:`python` 3.5* :conda:package:`scipy` >=0.19.1 :conda:package:`seaborn` >=0.8.1 :conda:package:`six` >=1.11.0 :conda:package:`snakemake`  :conda:package:`sra-tools`  :conda:package:`star`  :conda:package:`statsmodels` >=0.8.0 :conda:package:`trim-galore`  :conda:package:`ucsc-bedgraphtobigwig`  :conda:package:`ucsc-bedsort`  

   :required~by: |required_by_riboraptor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riboraptor

   and update with::

      conda update riboraptor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/riboraptor


.. |required_by_riboraptor| conda:required_by:: riboraptor
.. |downloads_riboraptor| image:: https://img.shields.io/conda/dn/bioconda/riboraptor.svg?style=flat
   :alt:   (downloads)
.. |docker_riboraptor| image:: https://quay.io/repository/biocontainers/riboraptor/status
   :target: https://quay.io/repository/biocontainers/riboraptor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboraptor/README.html

