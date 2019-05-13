:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-george'
.. highlight: bash

r-george
========

.. conda:recipe:: r-george
   :replaces_section_title:

   geoRge\, a computational tool for stable isotope labelling detection in LC\/MS\-based untargeted metabolomics

   :homepage: https://github.com/jcapelladesto/geoRge/README.md
   :license: GPL (>= 2)
   :recipe: /`r-george <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-george>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-george/meta.yaml>`_

   


.. conda:package:: r-george

   |downloads_r-george| |docker_r-george|

   :versions: 1.0.1-0
   
   :depends bioconductor-mzr: 
   :depends bioconductor-xcms: 
   :depends r-base: 3.3.2*
   :depends r-optparse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-george

   and update with::

      conda update r-george

   or use the docker container::

      docker pull quay.io/biocontainers/r-george:<tag>

   (see `r-george/tags`_ for valid values for ``<tag>``)


.. |downloads_r-george| image:: https://img.shields.io/conda/dn/bioconda/r-george.svg?style=flat
   :target: https://anaconda.org/bioconda/r-george
   :alt:   (downloads)
.. |docker_r-george| image:: https://quay.io/repository/biocontainers/r-george/status
   :target: https://quay.io/repository/biocontainers/r-george
.. _`r-george/tags`: https://quay.io/repository/biocontainers/r-george?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-george/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-george/README.html