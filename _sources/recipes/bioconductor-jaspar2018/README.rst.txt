.. title:: Package Recipe 'bioconductor-jaspar2018'
.. highlight: bash


bioconductor-jaspar2018
=======================

.. conda:recipe:: bioconductor-jaspar2018
   :replaces_section_title:

   Data package for JASPAR 2018. To search this databases\, please use the package TFBSTools \(\>\= 1.15.6\).

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/JASPAR2018.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2018 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2018>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2018/meta.yaml>`_

   


.. conda:package:: bioconductor-jaspar2018

   |downloads_bioconductor-jaspar2018| |docker_bioconductor-jaspar2018|

   :versions: 1.1.1, 1.0.0, 0.99.2

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-jaspar2018|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jaspar2018

   and update with::

      conda update bioconductor-jaspar2018

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-jaspar2018


.. |required_by_bioconductor-jaspar2018| conda:required_by:: bioconductor-jaspar2018
.. |downloads_bioconductor-jaspar2018| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2018.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2018| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2018/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2018







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2018/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2018/README.html

