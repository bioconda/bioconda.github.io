:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xyalign'
.. highlight: bash

xyalign
=======

.. conda:recipe:: xyalign
   :replaces_section_title:

   Command line tools and python library to infer ploidy\, correct for sex chromosome complement\, and work with NGS data

   :homepage: https://github.com/WilsonSayresLab/XYalign
   :license: GPL / GPL-3.0
   :recipe: /`xyalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xyalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xyalign/meta.yaml>`_

   


.. conda:package:: xyalign

   |downloads_xyalign| |docker_xyalign|

   :versions: 1.1.5-0, 1.1.4-2, 1.1.4-0, 1.1.3-0, 1.0.0-0
   
   :depends bbmap: 
   
   :depends bedtools: 
   
   :depends bwa: 
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends platypus-variant: 
   
   :depends pybedtools: 
   
   :depends pysam: 
   
   :depends python: <3
   
   :depends sambamba: 
   
   :depends samtools: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xyalign

   and update with::

      conda update xyalign

   or use the docker container::

      docker pull quay.io/biocontainers/xyalign:<tag>

   (see `xyalign/tags`_ for valid values for ``<tag>``)


.. |downloads_xyalign| image:: https://img.shields.io/conda/dn/bioconda/xyalign.svg?style=flat
   :alt:   (downloads)
.. |docker_xyalign| image:: https://quay.io/repository/biocontainers/xyalign/status
   :target: https://quay.io/repository/biocontainers/xyalign
.. _`xyalign/tags`: https://quay.io/repository/biocontainers/xyalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xyalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xyalign/README.html