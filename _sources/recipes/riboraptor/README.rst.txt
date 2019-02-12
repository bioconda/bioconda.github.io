:orphan:  .. only available via index, not via toctree

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

   :versions: 0.2.2-1, 0.2.2-0
   
   :depends biopython: >=1.70
   
   :depends click: >=6.0
   
   :depends click-help-colors: >=0.3
   
   :depends fastqc: 
   
   :depends htseq: >=0.9.1
   
   :depends matplotlib: >=2.1.0
   
   :depends numpy: >=1.11.0
   
   :depends pandas: >=0.20.3
   
   :depends pybedtools: >=0.7.10
   
   :depends pybigwig: >=0.2.8
   
   :depends pyfaidx: >=0.5.0
   
   :depends pysam: >=0.11.2.2
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends scipy: >=0.19.1
   
   :depends seaborn: >=0.8.1
   
   :depends six: >=1.11.0
   
   :depends snakemake: 
   
   :depends sra-tools: 
   
   :depends star: 
   
   :depends statsmodels: >=0.8.0
   
   :depends trim-galore: 
   
   :depends ucsc-bedgraphtobigwig: 
   
   :depends ucsc-bedsort: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riboraptor

   and update with::

      conda update riboraptor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/riboraptor:<tag>

   (see `riboraptor/tags`_ for valid values for ``<tag>``)


.. |downloads_riboraptor| image:: https://img.shields.io/conda/dn/bioconda/riboraptor.svg?style=flat
   :alt:   (downloads)
.. |docker_riboraptor| image:: https://quay.io/repository/biocontainers/riboraptor/status
   :target: https://quay.io/repository/biocontainers/riboraptor
.. _`riboraptor/tags`: https://quay.io/repository/biocontainers/riboraptor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboraptor/README.html