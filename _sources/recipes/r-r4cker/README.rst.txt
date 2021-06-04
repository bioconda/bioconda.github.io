:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-r4cker'
.. highlight: bash

r-r4cker
========

.. conda:recipe:: r-r4cker
   :replaces_section_title:
   :noindex:

   Analysis of 4C\-seq \(circularized chromosome conformation capture\) data

   :homepage: https://github.com/rr1859/R.4Cker
   :license: Unknown
   :recipe: /`r-r4cker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r4cker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r4cker/meta.yaml>`_

   


.. conda:package:: r-r4cker

   |downloads_r-r4cker| |docker_r-r4cker|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.0.0.9000-0``

      

   
   :depends bioconductor-deseq2: 
   :depends bioconductor-genomeinfodbdata: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-depmixs4: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-misctools: 
   :depends r-psych: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-r4cker

   and update with::

      conda update r-r4cker

   or use the docker container::

      docker pull quay.io/biocontainers/r-r4cker:<tag>

   (see `r-r4cker/tags`_ for valid values for ``<tag>``)


.. |downloads_r-r4cker| image:: https://img.shields.io/conda/dn/bioconda/r-r4cker.svg?style=flat
   :target: https://anaconda.org/bioconda/r-r4cker
   :alt:   (downloads)
.. |docker_r-r4cker| image:: https://quay.io/repository/biocontainers/r-r4cker/status
   :target: https://quay.io/repository/biocontainers/r-r4cker
.. _`r-r4cker/tags`: https://quay.io/repository/biocontainers/r-r4cker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-r4cker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-r4cker/README.html