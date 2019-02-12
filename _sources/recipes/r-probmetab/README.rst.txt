:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-probmetab'
.. highlight: bash

r-probmetab
===========

.. conda:recipe:: r-probmetab/1.1
   :replaces_section_title:

   Provides probability ranking to candidate compounds assigned to masses\, with the prior assumption of connected sample and additional previous and spectral information modeled by the user.

   :homepage: https://github.com/rsilvabioinfo/ProbMetab
   :license: GPL (>= 3)
   :recipe: /`r-probmetab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-probmetab>`_/`1.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-probmetab/1.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-probmetab/1.1/meta.yaml>`_

   


.. conda:package:: r-probmetab

   |downloads_r-probmetab| |docker_r-probmetab|

   :versions: 1.1-0, 1.0-0
   
   :depends bioconductor-camera: 
   
   :depends bioconductor-multtest: 
   
   :depends bioconductor-rcytoscape: 
   
   :depends r: 3.2.2*
   
   :depends r-genenet: 
   
   :depends r-hwriter: 
   
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

      docker pull quay.io/repository/biocontainers/r-probmetab:<tag>

   (see `r-probmetab/tags`_ for valid values for ``<tag>``)


.. |downloads_r-probmetab| image:: https://img.shields.io/conda/dn/bioconda/r-probmetab.svg?style=flat
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