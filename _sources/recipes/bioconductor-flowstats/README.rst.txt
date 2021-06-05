:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowstats'
.. highlight: bash

bioconductor-flowstats
======================

.. conda:recipe:: bioconductor-flowstats
   :replaces_section_title:
   :noindex:

   Statistical methods for the analysis of flow cytometry data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/flowStats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowstats/meta.yaml>`_

   Methods and functionality to analyse flow data that is beyond the basic infrastructure provided by the flowCore package.


.. conda:package:: bioconductor-flowstats

   |downloads_bioconductor-flowstats| |docker_bioconductor-flowstats|

   :versions:
      
      

      ``4.4.0-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.44.0-0``,  ``3.42.0-1``,  ``3.40.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-flowcore: ``>=2.4.0,<2.5.0``
   :depends bioconductor-flowviz: ``>=1.56.0,<1.57.0``
   :depends bioconductor-flowworkspace: ``>=4.4.0,<4.5.0``
   :depends bioconductor-ncdfflow: ``>=2.38.0,<2.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cluster: 
   :depends r-fda: ``>=2.2.6``
   :depends r-kernsmooth: 
   :depends r-ks: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :depends r-rrcov: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowstats

   and update with::

      conda update bioconductor-flowstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowstats:<tag>

   (see `bioconductor-flowstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowstats
   :alt:   (downloads)
.. |docker_bioconductor-flowstats| image:: https://quay.io/repository/biocontainers/bioconductor-flowstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowstats
.. _`bioconductor-flowstats/tags`: https://quay.io/repository/biocontainers/bioconductor-flowstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowstats/README.html