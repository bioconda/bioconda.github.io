:orphan:  .. only available via index, not via toctree

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

   :versions: 1.18.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fda: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-frgepistasis

   and update with::

      conda update bioconductor-frgepistasis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-frgepistasis:<tag>

   (see `bioconductor-frgepistasis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-frgepistasis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-frgepistasis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-frgepistasis
   :alt:   (downloads)
.. |docker_bioconductor-frgepistasis| image:: https://quay.io/repository/biocontainers/bioconductor-frgepistasis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-frgepistasis
.. _`bioconductor-frgepistasis/tags`: https://quay.io/repository/biocontainers/bioconductor-frgepistasis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-frgepistasis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-frgepistasis/README.html