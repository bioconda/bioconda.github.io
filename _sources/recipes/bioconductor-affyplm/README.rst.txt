.. title:: Package Recipe 'bioconductor-affyplm'
.. highlight: bash


bioconductor-affyplm
====================

.. conda:recipe:: bioconductor-affyplm
   :replaces_section_title:

   A package that extends and improves the functionality of the base affy package. Routines that make heavy use of compiled code for speed. Central focus is on implementation of methods for fitting probe\-level models and tools using these models. PLM based quality assessment tools.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/affyPLM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affyplm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyplm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyplm/meta.yaml>`_
   :links: biotools: :biotools:`affyplm`

   


.. conda:package:: bioconductor-affyplm

   |downloads_bioconductor-affyplm| |docker_bioconductor-affyplm|

   :versions: 1.58.0, 1.56.0, 1.54.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-gcrma` >=2.54.0,<2.55.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-affyplm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affyplm

   and update with::

      conda update bioconductor-affyplm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affyplm


.. |required_by_bioconductor-affyplm| conda:required_by:: bioconductor-affyplm
.. |downloads_bioconductor-affyplm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyplm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affyplm| image:: https://quay.io/repository/biocontainers/bioconductor-affyplm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyplm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyplm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyplm/README.html

