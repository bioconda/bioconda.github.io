:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-shaman'
.. highlight: bash

r-shaman
========

.. conda:recipe:: r-shaman
   :replaces_section_title:

   The shaman package \- sampling HiC contact matrices for a\-parametric normalization

   :homepage: https://tanaylab.bitbucket.io/shaman/index.html
   :license: GPL
   :recipe: /`r-shaman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shaman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shaman/meta.yaml>`_

   


.. conda:package:: r-shaman

   |downloads_r-shaman| |docker_r-shaman|

   :versions: 2.0-0
   
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-gviz: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-domc: 
   :depends r-misha: 
   :depends r-rann: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-shaman

   and update with::

      conda update r-shaman

   or use the docker container::

      docker pull quay.io/biocontainers/r-shaman:<tag>

   (see `r-shaman/tags`_ for valid values for ``<tag>``)


.. |downloads_r-shaman| image:: https://img.shields.io/conda/dn/bioconda/r-shaman.svg?style=flat
   :target: https://anaconda.org/bioconda/r-shaman
   :alt:   (downloads)
.. |docker_r-shaman| image:: https://quay.io/repository/biocontainers/r-shaman/status
   :target: https://quay.io/repository/biocontainers/r-shaman
.. _`r-shaman/tags`: https://quay.io/repository/biocontainers/r-shaman?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-shaman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-shaman/README.html