:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-speaq'
.. highlight: bash

r-speaq
=======

.. conda:recipe:: r-speaq
   :replaces_section_title:

   Makes Nuclear Magnetic Resonance spectroscopy \(NMR spectroscopy\) data analysis as easy as possible by only requiring a small set of functions to perform an entire analysis. \'speaq\' offers the possibility of raw spectra alignment and quantitation but also an analysis based on features whereby the spectra are converted to peaks which are then grouped and turned into features. These features can be processed with any number of statistical tools either included in \'speaq\' or available elsewhere on CRAN. More detail can be found in Vu et al. \(2011\) \<doi\:10.1186\/1471\-2105\-12\-405\> and Beirnaert et al. \(2018\) \<doi\:10.1371\/journal.pcbi.1006018\>. 

   :homepage: https://CRAN.R-project.org/package=speaq
   :license: APACHE / Apache License 2.0
   :recipe: /`r-speaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-speaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-speaq/meta.yaml>`_

   


.. conda:package:: r-speaq

   |downloads_r-speaq| |docker_r-speaq|

   :versions: 2.6.0-0, 2.3.3-1, 2.3.3-0, 2.1.0-0, 1.2.3-0, 1.2.1-1, 1.2.1-0
   
   :depends bioconductor-impute: 
   :depends bioconductor-massspecwavelet: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-missforest: 
   :depends r-mqtl: 
   :depends r-reshape2: 
   :depends r-rfast: 
   :depends r-rvest: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-speaq

   and update with::

      conda update r-speaq

   or use the docker container::

      docker pull quay.io/biocontainers/r-speaq:<tag>

   (see `r-speaq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-speaq| image:: https://img.shields.io/conda/dn/bioconda/r-speaq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-speaq
   :alt:   (downloads)
.. |docker_r-speaq| image:: https://quay.io/repository/biocontainers/r-speaq/status
   :target: https://quay.io/repository/biocontainers/r-speaq
.. _`r-speaq/tags`: https://quay.io/repository/biocontainers/r-speaq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-speaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-speaq/README.html