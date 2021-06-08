:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dpeak'
.. highlight: bash

bioconductor-dpeak
==================

.. conda:recipe:: bioconductor-dpeak
   :replaces_section_title:
   :noindex:

   dPeak \(Deconvolution of Peaks in ChIP\-seq Analysis\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/dpeak.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dpeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dpeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dpeak/meta.yaml>`_

   dPeak is a statistical framework for the high resolution identification of protein\-DNA interaction sites using PET and SET ChIP\-Seq and ChIP\-exo data. It provides computationally efficient and user friendly interface to process ChIP\-seq and ChIP\-exo data\, implement exploratory analysis\, fit dPeak model\, and export list of predicted binding sites for downstream analysis.


.. conda:package:: bioconductor-dpeak

   |downloads_bioconductor-dpeak| |docker_bioconductor-dpeak|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mass: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dpeak

   and update with::

      conda update bioconductor-dpeak

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dpeak:<tag>

   (see `bioconductor-dpeak/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dpeak| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dpeak.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dpeak
   :alt:   (downloads)
.. |docker_bioconductor-dpeak| image:: https://quay.io/repository/biocontainers/bioconductor-dpeak/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dpeak
.. _`bioconductor-dpeak/tags`: https://quay.io/repository/biocontainers/bioconductor-dpeak?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dpeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dpeak/README.html