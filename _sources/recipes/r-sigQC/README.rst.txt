:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sigqc'
.. highlight: bash

r-sigqc
=======

.. conda:recipe:: r-sigQC
   :replaces_section_title:

   Provides gene signature quality control metrics in publication ready plots. Namely\, enables the visualization of properties such as expression\, variability\, correlation\, and comparison of methods of standardisation and scoring metrics.

   :homepage: https://CRAN.R-project.org/package=sigQC
   :license: OTHER / file LICENSE (Restricts use)
   :recipe: /`r-sigQC <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigQC>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigQC/meta.yaml>`_

   


.. conda:package:: r-sigqc

   |downloads_r-sigqc| |docker_r-sigqc|

   :versions: 0.1.21-1, 0.1.21-0, 0.1.14-0
   
   :depends bioconductor-complexheatmap: 
   
   :depends bioconductor-gsva: 
   
   :depends bioconductor-rankprod: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-biclust: 
   
   :depends r-circlize: 
   
   :depends r-class: 
   
   :depends r-cluster: 
   
   :depends r-fmsb: 
   
   :depends r-gplots: 
   
   :depends r-gridgraphics: 
   
   :depends r-kernsmooth: 
   
   :depends r-lattice: 
   
   :depends r-mass: 
   
   :depends r-mclust: 
   
   :depends r-moments: 
   
   :depends r-nnet: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sigqc

   and update with::

      conda update r-sigqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-sigqc:<tag>

   (see `r-sigqc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sigqc| image:: https://img.shields.io/conda/dn/bioconda/r-sigqc.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sigqc| image:: https://quay.io/repository/biocontainers/r-sigqc/status
   :target: https://quay.io/repository/biocontainers/r-sigqc
.. _`r-sigqc/tags`: https://quay.io/repository/biocontainers/r-sigqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigqc/README.html