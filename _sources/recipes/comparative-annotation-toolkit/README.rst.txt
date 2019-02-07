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

   :versions: 0.1

   :depends: :conda:package:`augustus` >=3.3 :conda:package:`bamtools` 2.4.1* :conda:package:`bx-python` >=0.7.1 :conda:package:`configobj` >=5.0 :conda:package:`ete3`  :conda:package:`frozendict`  :conda:package:`luigi` >=2.5 :conda:package:`numpy` >=1.10 :conda:package:`pandas` >=0.18 :conda:package:`pyfasta` >=0.5.2 :conda:package:`pysam` >=0.10 :conda:package:`python` 2.7* :conda:package:`samtools` >=1.3 :conda:package:`scipy` >=0.18.1 :conda:package:`seaborn` >=0.7 :conda:package:`sqlalchemy` >=1.0 :conda:package:`toil` >=3.5 :conda:package:`ucsc-axtchain`  :conda:package:`ucsc-bamtopsl`  :conda:package:`ucsc-bedsort`  :conda:package:`ucsc-bedtobigbed`  :conda:package:`ucsc-blat`  :conda:package:`ucsc-chainmergesort`  :conda:package:`ucsc-clustergenes`  :conda:package:`ucsc-fatotwobit`  :conda:package:`ucsc-genepredtobed`  :conda:package:`ucsc-genepredtofakepsl`  :conda:package:`ucsc-genepredtogtf`  :conda:package:`ucsc-gff3togenepred`  :conda:package:`ucsc-gtftogenepred`  :conda:package:`ucsc-pslcdnafilter`  :conda:package:`ucsc-pslcheck`  :conda:package:`ucsc-pslmap`  :conda:package:`ucsc-pslmappostchain`  :conda:package:`ucsc-pslpostarget`  :conda:package:`ucsc-pslrecalcmatch`  :conda:package:`ucsc-psltobigpsl`  :conda:package:`ucsc-transmappsltogenepred`  

   :required~by: |required_by_comparative-annotation-toolkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install comparative-annotation-toolkit

   and update with::

      conda update comparative-annotation-toolkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/comparative-annotation-toolkit


.. |required_by_comparative-annotation-toolkit| conda:required_by:: comparative-annotation-toolkit
.. |downloads_comparative-annotation-toolkit| image:: https://img.shields.io/conda/dn/bioconda/comparative-annotation-toolkit.svg?style=flat
   :alt:   (downloads)
.. |docker_comparative-annotation-toolkit| image:: https://quay.io/repository/biocontainers/comparative-annotation-toolkit/status
   :target: https://quay.io/repository/biocontainers/comparative-annotation-toolkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comparative-annotation-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comparative-annotation-toolkit/README.html

