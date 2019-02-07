.. title:: Package Recipe 'bioconductor-frgepistasis'
.. highlight: bash


bioconductor-frgepistasis
=========================

.. conda:recipe:: bioconductor-frgepistasis
   :replaces_section_title:

   A Tool for Epistasis Analysis Based on Functional Regression Model

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FRGEpistasis.html
   :license: GPL-2
   :recipe: /`bioconductor-frgepistasis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frgepistasis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frgepistasis/meta.yaml>`_

   


.. conda:package:: bioconductor-frgepistasis

   |downloads_bioconductor-frgepistasis| |docker_bioconductor-frgepistasis|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fda`  :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-frgepistasis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-frgepistasis

   and update with::

      conda update bioconductor-frgepistasis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-frgepistasis


.. |required_by_bioconductor-frgepistasis| conda:required_by:: bioconductor-frgepistasis
.. |downloads_bioconductor-frgepistasis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-frgepistasis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-frgepistasis| image:: https://quay.io/repository/biocontainers/bioconductor-frgepistasis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-frgepistasis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-frgepistasis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-frgepistasis/README.html

