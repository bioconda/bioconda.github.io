.. title:: Package Recipe 'bioconductor-harshlight'
.. highlight: bash


bioconductor-harshlight
=======================

.. conda:recipe:: bioconductor-harshlight
   :replaces_section_title:

   The package is used to detect extended\, diffuse and compact blemishes on microarray chips. Harshlight automatically marks the areas in a collection of chips \(affybatch objects\) and a corrected AffyBatch object is returned\, in which the defected areas are substituted with NAs or the median of the values of the same probe in the other chips in the collection. The new version handle the substitute value as whole matrix to solve the memory problem.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Harshlight.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-harshlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harshlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harshlight/meta.yaml>`_
   :links: biotools: :biotools:`harshlight`, doi: :doi:`10.1186/1471-2105-6-294`

   


.. conda:package:: bioconductor-harshlight

   |downloads_bioconductor-harshlight| |docker_bioconductor-harshlight|

   :versions: 1.54.0, 1.52.0, 1.50.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-altcdfenvs` >=2.44.0,<2.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-harshlight|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-harshlight

   and update with::

      conda update bioconductor-harshlight

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-harshlight


.. |required_by_bioconductor-harshlight| conda:required_by:: bioconductor-harshlight
.. |downloads_bioconductor-harshlight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harshlight.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-harshlight| image:: https://quay.io/repository/biocontainers/bioconductor-harshlight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harshlight







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harshlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harshlight/README.html

