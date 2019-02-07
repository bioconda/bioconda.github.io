.. title:: Package Recipe 'bioconductor-gem'
.. highlight: bash


bioconductor-gem
================

.. conda:recipe:: bioconductor-gem
   :replaces_section_title:

   Tools for analyzing EWAS\, methQTL and GxE genome widely.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GEM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gem/meta.yaml>`_

   


.. conda:package:: bioconductor-gem

   |downloads_bioconductor-gem| |docker_bioconductor-gem|

   :versions: 1.8.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  

   :required~by: |required_by_bioconductor-gem|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gem

   and update with::

      conda update bioconductor-gem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gem


.. |required_by_bioconductor-gem| conda:required_by:: bioconductor-gem
.. |downloads_bioconductor-gem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gem.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gem| image:: https://quay.io/repository/biocontainers/bioconductor-gem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gem







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gem/README.html

