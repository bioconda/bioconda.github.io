:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-genemodel'
.. highlight: bash

r-genemodel
===========

.. conda:recipe:: r-genemodel
   :replaces_section_title:

   Using simple input\, this package creates plots of gene models. Users can create plots of alternatively spliced gene variants and the positions of mutations and other gene features.

   :homepage: https://github.com/greymonroe/genemodel
   :license: GPL2 / GPL-2
   :recipe: /`r-genemodel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genemodel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genemodel/meta.yaml>`_

   


.. conda:package:: r-genemodel

   |downloads_r-genemodel| |docker_r-genemodel|

   :versions: 1.1.0-0
   
   :depends r-base: >=3.5,<3.6.0a0
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-genemodel

   and update with::

      conda update r-genemodel

   or use the docker container::

      docker pull quay.io/biocontainers/r-genemodel:<tag>

   (see `r-genemodel/tags`_ for valid values for ``<tag>``)


.. |downloads_r-genemodel| image:: https://img.shields.io/conda/dn/bioconda/r-genemodel.svg?style=flat
   :target: https://anaconda.org/bioconda/r-genemodel
   :alt:   (downloads)
.. |docker_r-genemodel| image:: https://quay.io/repository/biocontainers/r-genemodel/status
   :target: https://quay.io/repository/biocontainers/r-genemodel
.. _`r-genemodel/tags`: https://quay.io/repository/biocontainers/r-genemodel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-genemodel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-genemodel/README.html