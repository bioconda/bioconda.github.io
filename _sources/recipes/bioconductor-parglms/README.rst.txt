:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-parglms'
.. highlight: bash

bioconductor-parglms
====================

.. conda:recipe:: bioconductor-parglms
   :replaces_section_title:

   support for parallelized estimation of GLMs\/GEEs\, catering for dispersed data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/parglms.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-parglms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-parglms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-parglms/meta.yaml>`_

   


.. conda:package:: bioconductor-parglms

   |downloads_bioconductor-parglms| |docker_bioconductor-parglms|

   :versions: 1.14.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-batchjobs: 
   
   :depends r-doparallel: 
   
   :depends r-foreach: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-parglms

   and update with::

      conda update bioconductor-parglms

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-parglms:<tag>

   (see `bioconductor-parglms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-parglms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-parglms.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-parglms| image:: https://quay.io/repository/biocontainers/bioconductor-parglms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-parglms
.. _`bioconductor-parglms/tags`: https://quay.io/repository/biocontainers/bioconductor-parglms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-parglms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-parglms/README.html