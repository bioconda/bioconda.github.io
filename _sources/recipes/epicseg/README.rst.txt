.. title:: Package Recipe 'epicseg'
.. highlight: bash


epicseg
=======

.. conda:recipe:: epicseg
   :replaces_section_title:

   EpiCSeg \(Epigenome Count\-based Segmentation\) is a software for annotating the genome based on the state of the chromatin. It provides tools for extracting count data from BAM files\, typlically corresponding to ChIP\-seq experiments for histone marks \(but other choices are possible\) it learns a statistical model for the read counts based on a HMM\, it annotates the genome\, and it provides tools for displaying and analyzing the obtained models and segmentations. EpiCSeg can be used as an R package or from the command line via Rscript.

   :homepage: http://github.com/lamortenera/epicseg
   :license: GPL-3
   :recipe: /`epicseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicseg/meta.yaml>`_

   


.. conda:package:: epicseg

   |downloads_epicseg| |docker_epicseg|

   :versions: 1.0

   :depends: :conda:package:`bioconductor-bamsignals`  :conda:package:`bioconductor-edger`  :conda:package:`bioconductor-genomicranges`  :conda:package:`bioconductor-iranges`  :conda:package:`bioconductor-s4vectors`  :conda:package:`kfoots`  :conda:package:`libgcc`  :conda:package:`r-base` 3.4.1* :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp` >=0.10.6 

   :required~by: |required_by_epicseg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epicseg

   and update with::

      conda update epicseg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/epicseg


.. |required_by_epicseg| conda:required_by:: epicseg
.. |downloads_epicseg| image:: https://img.shields.io/conda/dn/bioconda/epicseg.svg?style=flat
   :alt:   (downloads)
.. |docker_epicseg| image:: https://quay.io/repository/biocontainers/epicseg/status
   :target: https://quay.io/repository/biocontainers/epicseg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epicseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epicseg/README.html

