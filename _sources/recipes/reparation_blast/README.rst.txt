:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reparation_blast'
.. highlight: bash

reparation_blast
================

.. conda:recipe:: reparation_blast
   :replaces_section_title:

   a pipeline that uses ribosome profiling data for a de novo open reading frame delineation in prokaryotic \(bacterial\) genomes. I changed the original reparation project to use the open\-source blast tool \(https\:\/\/blast.ncbi.nlm.nih.gov\/Blast.cgi\) instead of the commercial usearch \-\-ublast tool \(https\:\/\/drive5.com\/usearch\/manual\/ublast\_algo.html\). I did this in order to add this tool to bioconda without having licensing issues with the commercial usearch \-ublast tool. The original software was created at VIB\-UGent Center for Medical Biotechnology and Lab of Bioinformatics and Computational Genomics \(Biobix\)\, University of Gent\, Belgium\, by Elvis Ndah. \(https\:\/\/github.com\/Biobix\/REPARATION\). Be advised that the adapted version has slightly different results and is slower than the original reparation software.

   :homepage: https://github.com/RickGelhausen/REPARATION_blast
   :license: GPL3
   :recipe: /`reparation_blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reparation_blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reparation_blast/meta.yaml>`_

   


.. conda:package:: reparation_blast

   |downloads_reparation_blast| |docker_reparation_blast|

   :versions: v1.0.7-1, v1.0.7-0, v1.0.6-0, v1.0.5-0, v1.0.4-0, v1.0.3-2, v1.0.2-1, v1.0.1-0
   
   :depends blast: >=2.7.1
   :depends glimmer: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bioperl: >=1.7.2
   :depends perl-posix: 
   :depends plastid: 
   :depends prodigal: 
   :depends pysam: 0.14.1.*
   :depends r-ggplot2: >=3.0
   :depends r-prroc: >=1.3.1
   :depends r-randomforest: 
   :depends r-rocr: 
   :depends r-sizer: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install reparation_blast

   and update with::

      conda update reparation_blast

   or use the docker container::

      docker pull quay.io/biocontainers/reparation_blast:<tag>

   (see `reparation_blast/tags`_ for valid values for ``<tag>``)


.. |downloads_reparation_blast| image:: https://img.shields.io/conda/dn/bioconda/reparation_blast.svg?style=flat
   :alt:   (downloads)
.. |docker_reparation_blast| image:: https://quay.io/repository/biocontainers/reparation_blast/status
   :target: https://quay.io/repository/biocontainers/reparation_blast
.. _`reparation_blast/tags`: https://quay.io/repository/biocontainers/reparation_blast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reparation_blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reparation_blast/README.html