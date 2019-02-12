:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oncoscore'
.. highlight: bash

bioconductor-oncoscore
======================

.. conda:recipe:: bioconductor-oncoscore
   :replaces_section_title:

   OncoScore is a tool to measure the association of genes to cancer based on citation frequencies in biomedical literature. The score is evaluated from PubMed literature by dynamically updatable web queries.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OncoScore.html
   :license: file LICENSE
   :recipe: /`bioconductor-oncoscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncoscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncoscore/meta.yaml>`_

   


.. conda:package:: bioconductor-oncoscore

   |downloads_bioconductor-oncoscore| |docker_bioconductor-oncoscore|

   :versions: 1.10.0-0
   
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oncoscore

   and update with::

      conda update bioconductor-oncoscore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-oncoscore:<tag>

   (see `bioconductor-oncoscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oncoscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oncoscore.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-oncoscore| image:: https://quay.io/repository/biocontainers/bioconductor-oncoscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oncoscore
.. _`bioconductor-oncoscore/tags`: https://quay.io/repository/biocontainers/bioconductor-oncoscore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oncoscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oncoscore/README.html