:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgccacmd'
.. highlight: bash

rgccacmd
========

.. conda:recipe:: rgccacmd
   :replaces_section_title:
   :noindex:

   Multiblock data analysis concerns the analysis of several sets of variables \(blocks\) observed on the same group of individuals. The main aims of the RGCCA package are \(i\) to study the relationships between blocks and \(ii\) to identify subsets of variables of each block which are active in their relationships with the other blocks.

   :homepage: https://CRAN.R-project.org/package=RGCCA
   :documentation: https://github.com/ecamenen/rgcca-conda/blob/master/README.md
   
   :license: GPL3 / GPL (>= 2)
   :recipe: /`rgccacmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgccacmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgccacmd/meta.yaml>`_

   


.. conda:package:: rgccacmd

   |downloads_rgccacmd| |docker_rgccacmd|

   :versions:
      
      

      ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-deriv: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-openxlsx: 
   :depends r-optparse: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rgccacmd

   and update with::

      conda update rgccacmd

   or use the docker container::

      docker pull quay.io/biocontainers/rgccacmd:<tag>

   (see `rgccacmd/tags`_ for valid values for ``<tag>``)


.. |downloads_rgccacmd| image:: https://img.shields.io/conda/dn/bioconda/rgccacmd.svg?style=flat
   :target: https://anaconda.org/bioconda/rgccacmd
   :alt:   (downloads)
.. |docker_rgccacmd| image:: https://quay.io/repository/biocontainers/rgccacmd/status
   :target: https://quay.io/repository/biocontainers/rgccacmd
.. _`rgccacmd/tags`: https://quay.io/repository/biocontainers/rgccacmd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgccacmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgccacmd/README.html