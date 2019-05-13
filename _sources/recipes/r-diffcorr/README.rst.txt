:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-diffcorr'
.. highlight: bash

r-diffcorr
==========

.. conda:recipe:: r-diffcorr
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-diffcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-diffcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-diffcorr/meta.yaml>`_

   


.. conda:package:: r-diffcorr

   |downloads_r-diffcorr| |docker_r-diffcorr|

   :versions: 0.4.1-0
   
   :depends bioconductor-multtest: 
   :depends bioconductor-pcamethods: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fdrtool: 
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-diffcorr

   and update with::

      conda update r-diffcorr

   or use the docker container::

      docker pull quay.io/biocontainers/r-diffcorr:<tag>

   (see `r-diffcorr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-diffcorr| image:: https://img.shields.io/conda/dn/bioconda/r-diffcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-diffcorr
   :alt:   (downloads)
.. |docker_r-diffcorr| image:: https://quay.io/repository/biocontainers/r-diffcorr/status
   :target: https://quay.io/repository/biocontainers/r-diffcorr
.. _`r-diffcorr/tags`: https://quay.io/repository/biocontainers/r-diffcorr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-diffcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-diffcorr/README.html