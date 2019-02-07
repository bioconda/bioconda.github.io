.. title:: Package Recipe 'bioconductor-aroma.light'
.. highlight: bash


bioconductor-aroma.light
========================

.. conda:recipe:: bioconductor-aroma.light
   :replaces_section_title:

   Methods for microarray analysis that take basic data types such as matrices and lists of vectors.  These methods can be used standalone\, be utilized in other packages\, or be wrapped up in higher\-level classes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/aroma.light.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-aroma.light <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aroma.light>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aroma.light/meta.yaml>`_
   :links: biotools: :biotools:`aroma.light`

   


.. conda:package:: bioconductor-aroma.light

   |downloads_bioconductor-aroma.light| |docker_bioconductor-aroma.light|

   :versions: 3.12.0, 3.10.0, 3.8.0, 3.6.0, 3.4.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrixstats` >=0.54.0 :conda:package:`r-r.methodss3` >=1.7.1 :conda:package:`r-r.oo` >=1.22.0 :conda:package:`r-r.utils` >=2.7.0 

   :required~by: |required_by_bioconductor-aroma.light|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aroma.light

   and update with::

      conda update bioconductor-aroma.light

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-aroma.light


.. |required_by_bioconductor-aroma.light| conda:required_by:: bioconductor-aroma.light
.. |downloads_bioconductor-aroma.light| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aroma.light.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-aroma.light| image:: https://quay.io/repository/biocontainers/bioconductor-aroma.light/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aroma.light







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aroma.light/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aroma.light/README.html

