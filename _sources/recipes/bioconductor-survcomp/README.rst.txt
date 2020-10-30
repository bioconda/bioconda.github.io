:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-survcomp'
.. highlight: bash

bioconductor-survcomp
=====================

.. conda:recipe:: bioconductor-survcomp
   :replaces_section_title:
   :noindex:

   Performance Assessment and Comparison for Survival Analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/survcomp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-survcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survcomp/meta.yaml>`_
   :links: biotools: :biotools:`survcomp`

   Assessment and Comparison for Performance of Risk Prediction \(Survival\) Models.


.. conda:package:: bioconductor-survcomp

   |downloads_bioconductor-survcomp| |docker_bioconductor-survcomp|

   :versions:
      
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.4-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bootstrap: 
   :depends r-ipred: 
   :depends r-kernsmooth: 
   :depends r-prodlim: 
   :depends r-rmeta: 
   :depends r-suppdists: 
   :depends r-survival: 
   :depends r-survivalroc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-survcomp

   and update with::

      conda update bioconductor-survcomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-survcomp:<tag>

   (see `bioconductor-survcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-survcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-survcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-survcomp
   :alt:   (downloads)
.. |docker_bioconductor-survcomp| image:: https://quay.io/repository/biocontainers/bioconductor-survcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-survcomp
.. _`bioconductor-survcomp/tags`: https://quay.io/repository/biocontainers/bioconductor-survcomp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-survcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-survcomp/README.html