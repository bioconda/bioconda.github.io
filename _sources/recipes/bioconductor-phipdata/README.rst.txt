:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phipdata'
.. highlight: bash

bioconductor-phipdata
=====================

.. conda:recipe:: bioconductor-phipdata
   :replaces_section_title:
   :noindex:

   Container for PhIP\-Seq Experiments

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PhIPData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-phipdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phipdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phipdata/meta.yaml>`_

   PhIPData defines an S4 class for phage\-immunoprecipitation sequencing \(PhIP\-seq\) experiments. Buliding upon the RangedSummarizedExperiment class\, PhIPData enables users to coordinate metadata with experimental data in analyses. Additionally\, PhIPData provides specialized methods to subset and identify beads\-only samples\, subset objects using virus aliases\, and use existing peptide libraries to populate object parameters.


.. conda:package:: bioconductor-phipdata

   |downloads_bioconductor-phipdata| |docker_bioconductor-phipdata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cli: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phipdata

   and update with::

      conda update bioconductor-phipdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phipdata:<tag>

   (see `bioconductor-phipdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phipdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phipdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phipdata
   :alt:   (downloads)
.. |docker_bioconductor-phipdata| image:: https://quay.io/repository/biocontainers/bioconductor-phipdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phipdata
.. _`bioconductor-phipdata/tags`: https://quay.io/repository/biocontainers/bioconductor-phipdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phipdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phipdata/README.html