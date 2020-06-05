:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-probmetab'
.. highlight: bash

r-probmetab
===========

.. conda:recipe:: r-probmetab
   :replaces_section_title:
   :noindex:

   Provides probability ranking to candidate compounds assigned to masses\, with the prior assumption of connected sample and additional previous and spectral information modeled by the user.

   :homepage: https://github.com/rsilvabioinfo/ProbMetab
   :license: GPL (>= 3)
   :recipe: /`r-probmetab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-probmetab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-probmetab/meta.yaml>`_

   


.. conda:package:: r-probmetab

   |downloads_r-probmetab| |docker_r-probmetab|

   :versions:
      
      

      ``1.1-4``,  ``1.1-3``,  ``1.1-0``,  ``1.0-2``,  ``1.0-0``

      

   
   :depends bioconductor-camera: ``1.34.0.*``
   :depends bioconductor-multtest: 
   :depends bioconductor-mzr: ``2.6.3.*``
   :depends bioconductor-rcytoscape: ``1.27.1.*``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libnetcdf: ``4.3.3.1.*``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``3.4.1.*``
   :depends r-genenet: 
   :depends r-hwriter: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcurl: 
   :depends r-rjson: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-probmetab

   and update with::

      conda update r-probmetab

   or use the docker container::

      docker pull quay.io/biocontainers/r-probmetab:<tag>

   (see `r-probmetab/tags`_ for valid values for ``<tag>``)


.. |downloads_r-probmetab| image:: https://img.shields.io/conda/dn/bioconda/r-probmetab.svg?style=flat
   :target: https://anaconda.org/bioconda/r-probmetab
   :alt:   (downloads)
.. |docker_r-probmetab| image:: https://quay.io/repository/biocontainers/r-probmetab/status
   :target: https://quay.io/repository/biocontainers/r-probmetab
.. _`r-probmetab/tags`: https://quay.io/repository/biocontainers/r-probmetab?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-probmetab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-probmetab/README.html