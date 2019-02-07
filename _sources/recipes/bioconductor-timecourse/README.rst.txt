.. title:: Package Recipe 'bioconductor-timecourse'
.. highlight: bash


bioconductor-timecourse
=======================

.. conda:recipe:: bioconductor-timecourse
   :replaces_section_title:

   Functions for data analysis and graphical displays for developmental microarray time course data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/timecourse.html
   :license: LGPL
   :recipe: /`bioconductor-timecourse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecourse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecourse/meta.yaml>`_
   :links: biotools: :biotools:`timecourse`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-timecourse

   |downloads_bioconductor-timecourse| |docker_bioconductor-timecourse|

   :versions: 1.54.0, 1.52.0, 1.50.0, 1.48.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-timecourse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-timecourse

   and update with::

      conda update bioconductor-timecourse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-timecourse


.. |required_by_bioconductor-timecourse| conda:required_by:: bioconductor-timecourse
.. |downloads_bioconductor-timecourse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timecourse.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-timecourse| image:: https://quay.io/repository/biocontainers/bioconductor-timecourse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timecourse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timecourse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timecourse/README.html

