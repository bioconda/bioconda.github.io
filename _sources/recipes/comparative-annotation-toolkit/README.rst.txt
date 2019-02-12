:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comparative-annotation-toolkit'
.. highlight: bash

comparative-annotation-toolkit
==============================

.. conda:recipe:: comparative-annotation-toolkit
   :replaces_section_title:

   A straightforward end\-to\-end pipeline that takes as input a HAL\-format multiple whole genome alignment as well as a GFF3 file representing annotations on one high quality assembly in the HAL alignment\, and produces a output GFF3 annotation on all target genomes chosen

   :homepage: https://github.com/ComparativeGenomicsToolkit/Comparative-Annotation-Toolkit
   :license: APACHE / Apache 2.0
   :recipe: /`comparative-annotation-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparative-annotation-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparative-annotation-toolkit/meta.yaml>`_
   :links: doi: :doi:`10.1101/231118`

   


.. conda:package:: comparative-annotation-toolkit

   |downloads_comparative-annotation-toolkit| |docker_comparative-annotation-toolkit|

   :versions: 0.1-1, 0.1-0
   
   :depends augustus: >=3.3
   
   :depends bamtools: >=2.4.1,<2.4.2.0a0
   
   :depends bx-python: >=0.7.1
   
   :depends configobj: >=5.0
   
   :depends ete3: 
   
   :depends frozendict: 
   
   :depends luigi: >=2.5
   
   :depends numpy: >=1.10
   
   :depends pandas: >=0.18
   
   :depends pyfasta: >=0.5.2
   
   :depends pysam: >=0.10
   
   :depends python: 2.7.*
   
   :depends samtools: >=1.3
   
   :depends scipy: >=0.18.1
   
   :depends seaborn: >=0.7
   
   :depends sqlalchemy: >=1.0
   
   :depends toil: >=3.5
   
   :depends ucsc-axtchain: 
   
   :depends ucsc-bamtopsl: 
   
   :depends ucsc-bedsort: 
   
   :depends ucsc-bedtobigbed: 
   
   :depends ucsc-blat: 
   
   :depends ucsc-chainmergesort: 
   
   :depends ucsc-clustergenes: 
   
   :depends ucsc-fatotwobit: 
   
   :depends ucsc-genepredtobed: 
   
   :depends ucsc-genepredtofakepsl: 
   
   :depends ucsc-genepredtogtf: 
   
   :depends ucsc-gff3togenepred: 
   
   :depends ucsc-gtftogenepred: 
   
   :depends ucsc-pslcdnafilter: 
   
   :depends ucsc-pslcheck: 
   
   :depends ucsc-pslmap: 
   
   :depends ucsc-pslmappostchain: 
   
   :depends ucsc-pslpostarget: 
   
   :depends ucsc-pslrecalcmatch: 
   
   :depends ucsc-psltobigpsl: 
   
   :depends ucsc-transmappsltogenepred: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install comparative-annotation-toolkit

   and update with::

      conda update comparative-annotation-toolkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/comparative-annotation-toolkit:<tag>

   (see `comparative-annotation-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_comparative-annotation-toolkit| image:: https://img.shields.io/conda/dn/bioconda/comparative-annotation-toolkit.svg?style=flat
   :alt:   (downloads)
.. |docker_comparative-annotation-toolkit| image:: https://quay.io/repository/biocontainers/comparative-annotation-toolkit/status
   :target: https://quay.io/repository/biocontainers/comparative-annotation-toolkit
.. _`comparative-annotation-toolkit/tags`: https://quay.io/repository/biocontainers/comparative-annotation-toolkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comparative-annotation-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comparative-annotation-toolkit/README.html