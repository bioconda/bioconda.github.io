:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnftools'
.. highlight: bash

rnftools
========

.. conda:recipe:: rnftools
   :replaces_section_title:

   RNF framework for NGS\: simulation of reads\, evaluation of mappers\, conversion of RNF\-compliant data.

   :homepage: http://karel-brinda.github.io/rnftools
   :license: MIT
   :recipe: /`rnftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnftools/meta.yaml>`_

   


.. conda:package:: rnftools

   |downloads_rnftools| |docker_rnftools|

   :versions: 0.3.1.3-0, 0.3.1.2-2, 0.3.1.2-1, 0.3.1.1-2, 0.3.1.1-1, 0.3.1.0-2, 0.3.1.0-1, 0.3.0.2-2, 0.3.0.2-1, 0.3.0.2-0
   
   :depends art: 
   
   :depends beautifulsoup4: 
   
   :depends bwa: 
   
   :depends curesim: 
   
   :depends dwgsim: 
   
   :depends gnuplot: >=5.0
   
   :depends mason: 
   
   :depends pyfaidx: 
   
   :depends pysam: 
   
   :depends python: >=3.6,<3.7.0a0
   
   :depends reportlab: 3.3.0
   
   :depends samtools: 
   
   :depends snakemake-minimal: 
   
   :depends svg42pdf: >=0.2.2
   
   :depends wgsim: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnftools

   and update with::

      conda update rnftools

   or use the docker container::

      docker pull quay.io/biocontainers/rnftools:<tag>

   (see `rnftools/tags`_ for valid values for ``<tag>``)


.. |downloads_rnftools| image:: https://img.shields.io/conda/dn/bioconda/rnftools.svg?style=flat
   :alt:   (downloads)
.. |docker_rnftools| image:: https://quay.io/repository/biocontainers/rnftools/status
   :target: https://quay.io/repository/biocontainers/rnftools
.. _`rnftools/tags`: https://quay.io/repository/biocontainers/rnftools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnftools/README.html