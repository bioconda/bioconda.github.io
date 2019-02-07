.. title:: Package Recipe 'bioconductor-estrogen'
.. highlight: bash


bioconductor-estrogen
=====================

.. conda:recipe:: bioconductor-estrogen
   :replaces_section_title:

   Data from 8 Affymetrix genechips\, looking at a 2x2 factorial design \(with 2 repeats per level\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/estrogen.html
   :license: LGPL
   :recipe: /`bioconductor-estrogen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-estrogen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-estrogen/meta.yaml>`_

   


.. conda:package:: bioconductor-estrogen

   |downloads_bioconductor-estrogen| |docker_bioconductor-estrogen|

   :versions: 1.28.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-estrogen|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-estrogen

   and update with::

      conda update bioconductor-estrogen

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-estrogen


.. |required_by_bioconductor-estrogen| conda:required_by:: bioconductor-estrogen
.. |downloads_bioconductor-estrogen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-estrogen.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-estrogen| image:: https://quay.io/repository/biocontainers/bioconductor-estrogen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-estrogen







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-estrogen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-estrogen/README.html

