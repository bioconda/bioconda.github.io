:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-onassisjavalibs'
.. highlight: bash

bioconductor-onassisjavalibs
============================

.. conda:recipe:: bioconductor-onassisjavalibs
   :replaces_section_title:

   A package that contains java libraries to call conceptmapper and compute semnatic similarity from R

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/OnassisJavaLibs.html
   :license: GPL-2
   :recipe: /`bioconductor-onassisjavalibs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onassisjavalibs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onassisjavalibs/meta.yaml>`_

   


.. conda:package:: bioconductor-onassisjavalibs

   |downloads_bioconductor-onassisjavalibs| |docker_bioconductor-onassisjavalibs|

   :versions: 1.4.2-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rjava: 
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-onassisjavalibs

   and update with::

      conda update bioconductor-onassisjavalibs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-onassisjavalibs:<tag>

   (see `bioconductor-onassisjavalibs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-onassisjavalibs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-onassisjavalibs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-onassisjavalibs| image:: https://quay.io/repository/biocontainers/bioconductor-onassisjavalibs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-onassisjavalibs
.. _`bioconductor-onassisjavalibs/tags`: https://quay.io/repository/biocontainers/bioconductor-onassisjavalibs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-onassisjavalibs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-onassisjavalibs/README.html