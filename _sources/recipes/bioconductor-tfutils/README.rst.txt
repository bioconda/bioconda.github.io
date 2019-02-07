.. title:: Package Recipe 'bioconductor-tfutils'
.. highlight: bash


bioconductor-tfutils
====================

.. conda:recipe:: bioconductor-tfutils
   :replaces_section_title:

   Package to work with TF data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TFutils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfutils/meta.yaml>`_

   


.. conda:package:: bioconductor-tfutils

   |downloads_bioconductor-tfutils| |docker_bioconductor-tfutils|

   :versions: 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-magrittr`  :conda:package:`r-miniui`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-tfutils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tfutils

   and update with::

      conda update bioconductor-tfutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tfutils


.. |required_by_bioconductor-tfutils| conda:required_by:: bioconductor-tfutils
.. |downloads_bioconductor-tfutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfutils.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tfutils| image:: https://quay.io/repository/biocontainers/bioconductor-tfutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfutils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfutils/README.html

