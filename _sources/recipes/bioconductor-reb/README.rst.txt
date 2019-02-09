.. title:: Package Recipe 'bioconductor-reb'
.. highlight: bash


bioconductor-reb
================

.. conda:recipe:: bioconductor-reb
   :replaces_section_title:

   A set of functions to dentify regional expression biases

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/reb.html
   :license: GPL-2
   :recipe: /`bioconductor-reb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reb/meta.yaml>`_

   


.. conda:package:: bioconductor-reb

   |downloads_bioconductor-reb| |docker_bioconductor-reb|

   :versions: 1.60.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-idiogram` >=1.58.0,<1.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-reb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reb

   and update with::

      conda update bioconductor-reb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-reb


.. |required_by_bioconductor-reb| conda:required_by:: bioconductor-reb
.. |downloads_bioconductor-reb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-reb| image:: https://quay.io/repository/biocontainers/bioconductor-reb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reb/README.html

