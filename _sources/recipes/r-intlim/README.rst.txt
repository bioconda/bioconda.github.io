:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-intlim'
.. highlight: bash

r-intlim
========

.. conda:recipe:: r-intlim
   :replaces_section_title:
   :noindex:

   Integration of Omics Data Using Linear Modeling

   :homepage: http://github.com/Mathelab/IntLIM/
   :license: GPL / GPL-2
   :recipe: /`r-intlim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-intlim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-intlim/meta.yaml>`_

   


.. conda:package:: r-intlim

   |downloads_r-intlim| |docker_r-intlim|

   :versions:
      
      

      ``v.1.1.0-1``,  ``v.1.1.0-0``

      

   
   :depends bioconductor-multidataset: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dendextend: 
   :depends r-dt: 
   :depends r-gplots: 
   :depends r-heatmaply: 
   :depends r-highcharter: 
   :depends r-plotly: 
   :depends r-rmarkdown: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-shinyjs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-intlim

   and update with::

      conda update r-intlim

   or use the docker container::

      docker pull quay.io/biocontainers/r-intlim:<tag>

   (see `r-intlim/tags`_ for valid values for ``<tag>``)


.. |downloads_r-intlim| image:: https://img.shields.io/conda/dn/bioconda/r-intlim.svg?style=flat
   :target: https://anaconda.org/bioconda/r-intlim
   :alt:   (downloads)
.. |docker_r-intlim| image:: https://quay.io/repository/biocontainers/r-intlim/status
   :target: https://quay.io/repository/biocontainers/r-intlim
.. _`r-intlim/tags`: https://quay.io/repository/biocontainers/r-intlim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-intlim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-intlim/README.html