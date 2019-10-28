:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cellassign'
.. highlight: bash

r-cellassign
============

.. conda:recipe:: r-cellassign
   :replaces_section_title:

   Automated\, probabilistic assignment of cell types in scRNA\-seq data

   :homepage: https://github.com/Irrationone/cellassign
   :license: Apache-2.0
   :recipe: /`r-cellassign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cellassign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cellassign/meta.yaml>`_

   


.. conda:package:: r-cellassign

   |downloads_r-cellassign| |docker_r-cellassign|

   :versions: 0.99.2-1, 0.99.2-0, 0.99.1-0, 0.99.0-1, 0.99.0-0
   
   :depends bioconductor-genomeinfodbdata: 
   :depends bioconductor-scran: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-glue: 
   :depends r-tensorflow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cellassign

   and update with::

      conda update r-cellassign

   or use the docker container::

      docker pull quay.io/biocontainers/r-cellassign:<tag>

   (see `r-cellassign/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cellassign| image:: https://img.shields.io/conda/dn/bioconda/r-cellassign.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cellassign
   :alt:   (downloads)
.. |docker_r-cellassign| image:: https://quay.io/repository/biocontainers/r-cellassign/status
   :target: https://quay.io/repository/biocontainers/r-cellassign
.. _`r-cellassign/tags`: https://quay.io/repository/biocontainers/r-cellassign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cellassign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cellassign/README.html