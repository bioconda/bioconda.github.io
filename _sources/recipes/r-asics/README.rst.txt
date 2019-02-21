:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-asics'
.. highlight: bash

r-asics
=======

.. conda:recipe:: r-asics
   :replaces_section_title:

   With a set of pure metabolite spectra\, ASICS quantifies  metabolites concentration in a complex spectrum. The identification of  metabolites is performed by fitting a mixture model to the spectra of the library with a sparse penalty. The method and its statistical properties are  described in Tardivel et al. \(2017\) \<doi\:10.1007\/s11306\-017\-1244\-5\>. 

   :homepage: https://CRAN.R-project.org/package=ASICS
   :license: GPL (>= 2)
   :recipe: /`r-asics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-asics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-asics/meta.yaml>`_

   


.. conda:package:: r-asics

   |downloads_r-asics| |docker_r-asics|

   :versions: 1.0.1-0
   
   :depends r-base: 3.4.1*
   
   :depends r-doparallel: 
   
   :depends r-foreach: 
   
   :depends r-ggplot2: 
   
   :depends r-plyr: 
   
   :depends r-quadprog: 
   
   :depends r-zoo: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-asics

   and update with::

      conda update r-asics

   or use the docker container::

      docker pull quay.io/biocontainers/r-asics:<tag>

   (see `r-asics/tags`_ for valid values for ``<tag>``)


.. |downloads_r-asics| image:: https://img.shields.io/conda/dn/bioconda/r-asics.svg?style=flat
   :alt:   (downloads)
.. |docker_r-asics| image:: https://quay.io/repository/biocontainers/r-asics/status
   :target: https://quay.io/repository/biocontainers/r-asics
.. _`r-asics/tags`: https://quay.io/repository/biocontainers/r-asics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-asics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-asics/README.html