:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagene2'
.. highlight: bash

bioconductor-metagene2
======================

.. conda:recipe:: bioconductor-metagene2
   :replaces_section_title:

   This package produces metagene plots to compare coverages of sequencing experiments at selected groups of genomic regions. It can be used for such analyses as assessing the binding of DNA\-interacting proteins at promoter regions or surveying antisense transcription over the length of a gene. The metagene2 package can manage all aspects of the analysis\, from normalization of coverages to plot facetting according to experimental metadata. Bootstraping analysis is used to provide confidence intervals of per\-sample mean coverages.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/metagene2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagene2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene2/meta.yaml>`_

   


.. conda:package:: bioconductor-metagene2

   |downloads_bioconductor-metagene2| |docker_bioconductor-metagene2|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagene2

   and update with::

      conda update bioconductor-metagene2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagene2:<tag>

   (see `bioconductor-metagene2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagene2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagene2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagene2
   :alt:   (downloads)
.. |docker_bioconductor-metagene2| image:: https://quay.io/repository/biocontainers/bioconductor-metagene2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagene2
.. _`bioconductor-metagene2/tags`: https://quay.io/repository/biocontainers/bioconductor-metagene2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagene2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagene2/README.html