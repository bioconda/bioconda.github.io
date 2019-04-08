:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathifier'
.. highlight: bash

bioconductor-pathifier
======================

.. conda:recipe:: bioconductor-pathifier
   :replaces_section_title:

   Pathifier is an algorithm that infers pathway deregulation scores for each tumor sample on the basis of expression data. This score is determined\, in a context\-specific manner\, for every particular dataset and type of cancer that is being investigated. The algorithm transforms gene\-level information into pathway\-level information\, generating a compact and biologically relevant representation of each sample.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pathifier.html
   :license: Artistic-1.0
   :recipe: /`bioconductor-pathifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathifier/meta.yaml>`_
   :links: biotools: :biotools:`pathifier`, doi: :doi:`10.1073/pnas.1219651110`

   


.. conda:package:: bioconductor-pathifier

   |downloads_bioconductor-pathifier| |docker_bioconductor-pathifier|

   :versions: 1.20.0-1, 1.20.0-0, 1.16.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-princurve: >=2.0.4
   :depends r-r.oo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathifier

   and update with::

      conda update bioconductor-pathifier

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathifier:<tag>

   (see `bioconductor-pathifier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathifier.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pathifier| image:: https://quay.io/repository/biocontainers/bioconductor-pathifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathifier
.. _`bioconductor-pathifier/tags`: https://quay.io/repository/biocontainers/bioconductor-pathifier?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathifier/README.html