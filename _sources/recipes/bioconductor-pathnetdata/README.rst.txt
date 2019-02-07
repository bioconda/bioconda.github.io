.. title:: Package Recipe 'bioconductor-pathnetdata'
.. highlight: bash


bioconductor-pathnetdata
========================

.. conda:recipe:: bioconductor-pathnetdata
   :replaces_section_title:

   This package contains the data employed in the vignette of the PathNet package. These data belong to the following publication\: PathNet\: A tool for pathway analysis using topological information. Dutta B\, Wallqvist A\, and Reifman J.\, Source Code for Biology and Medicine 2012 Sep 24\;7\(1\)\:10.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/PathNetData.html
   :license: GPL-3
   :recipe: /`bioconductor-pathnetdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathnetdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathnetdata/meta.yaml>`_

   


.. conda:package:: bioconductor-pathnetdata

   |downloads_bioconductor-pathnetdata| |docker_bioconductor-pathnetdata|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-pathnetdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathnetdata

   and update with::

      conda update bioconductor-pathnetdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pathnetdata


.. |required_by_bioconductor-pathnetdata| conda:required_by:: bioconductor-pathnetdata
.. |downloads_bioconductor-pathnetdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathnetdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pathnetdata| image:: https://quay.io/repository/biocontainers/bioconductor-pathnetdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathnetdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathnetdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathnetdata/README.html

