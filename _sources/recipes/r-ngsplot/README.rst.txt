:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ngsplot'
.. highlight: bash

r-ngsplot
=========

.. conda:recipe:: r-ngsplot
   :replaces_section_title:
   :noindex:

   Quick mining and visualization of NGS data by integrating genomic databases

   :homepage: https://github.com/shenlab-sinai/ngsplot
   :license: GPL-2.0
   :recipe: /`r-ngsplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ngsplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ngsplot/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2164-15-284`

   


.. conda:package:: r-ngsplot

   |downloads_r-ngsplot| |docker_r-ngsplot|

   :versions:
      
      

      ``2.63-6``,  ``2.63-5``,  ``2.63-3``,  ``2.63-2``,  ``2.63-1``,  ``2.63-0``

      

   
   :depends bioconductor-bsgenome: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-shortread: 
   :depends python: ``<3.0a0``
   :depends r-base: 
   :depends r-catools: 
   :depends r-domc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ngsplot

   and update with::

      conda update r-ngsplot

   or use the docker container::

      docker pull quay.io/biocontainers/r-ngsplot:<tag>

   (see `r-ngsplot/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ngsplot| image:: https://img.shields.io/conda/dn/bioconda/r-ngsplot.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ngsplot
   :alt:   (downloads)
.. |docker_r-ngsplot| image:: https://quay.io/repository/biocontainers/r-ngsplot/status
   :target: https://quay.io/repository/biocontainers/r-ngsplot
.. _`r-ngsplot/tags`: https://quay.io/repository/biocontainers/r-ngsplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ngsplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ngsplot/README.html