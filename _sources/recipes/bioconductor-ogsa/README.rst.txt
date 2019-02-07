.. title:: Package Recipe 'bioconductor-ogsa'
.. highlight: bash


bioconductor-ogsa
=================

.. conda:recipe:: bioconductor-ogsa
   :replaces_section_title:

   OGSA provides a global estimate of pathway deregulation in cancer subtypes by integrating the estimates of significance for individual pathway members that have been identified by outlier analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OGSA.html
   :license: GPL (== 2)
   :recipe: /`bioconductor-ogsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ogsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ogsa/meta.yaml>`_
   :links: biotools: :biotools:`ogsa`, doi: :doi:`10.1109/TCBB.2013.153`

   


.. conda:package:: bioconductor-ogsa

   |downloads_bioconductor-ogsa| |docker_bioconductor-ogsa|

   :versions: 1.12.0, 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots` >=2.8.0 

   :required~by: |required_by_bioconductor-ogsa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ogsa

   and update with::

      conda update bioconductor-ogsa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ogsa


.. |required_by_bioconductor-ogsa| conda:required_by:: bioconductor-ogsa
.. |downloads_bioconductor-ogsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ogsa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ogsa| image:: https://quay.io/repository/biocontainers/bioconductor-ogsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ogsa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ogsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ogsa/README.html

