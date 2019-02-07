.. title:: Package Recipe 'bioconductor-bayespeak'
.. highlight: bash


bioconductor-bayespeak
======================

.. conda:recipe:: bioconductor-bayespeak
   :replaces_section_title:

   This package is an implementation of the BayesPeak algorithm for peak\-calling in ChIP\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BayesPeak.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bayespeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayespeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayespeak/meta.yaml>`_
   :links: biotools: :biotools:`bayespeak`

   


.. conda:package:: bioconductor-bayespeak

   |downloads_bioconductor-bayespeak| |docker_bioconductor-bayespeak|

   :versions: 1.34.0, 1.32.0, 1.30.0, 1.28.0, 1.24.0

   :depends: :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-bayespeak|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bayespeak

   and update with::

      conda update bioconductor-bayespeak

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bayespeak


.. |required_by_bioconductor-bayespeak| conda:required_by:: bioconductor-bayespeak
.. |downloads_bioconductor-bayespeak| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayespeak.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bayespeak| image:: https://quay.io/repository/biocontainers/bioconductor-bayespeak/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayespeak







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayespeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayespeak/README.html

