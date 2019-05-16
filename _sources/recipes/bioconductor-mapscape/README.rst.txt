:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mapscape'
.. highlight: bash

bioconductor-mapscape
=====================

.. conda:recipe:: bioconductor-mapscape
   :replaces_section_title:

   MapScape integrates clonal prevalence\, clonal hierarchy\, anatomic and mutational information to provide interactive visualization of spatial clonal evolution. There are four inputs to MapScape\: \(i\) the clonal phylogeny\, \(ii\) clonal prevalences\, \(iii\) an image reference\, which may be a medical image or drawing and \(iv\) pixel locations for each sample on the referenced image. Optionally\, MapScape can accept a data table of mutations for each clone and their variant allele frequencies in each sample. The output of MapScape consists of a cropped anatomical image surrounded by two representations of each tumour sample. The first\, a cellular aggregate\, visually displays the prevalence of each clone. The second shows a skeleton of the clonal phylogeny while highlighting only those clones present in the sample. Together\, these representations enable the analyst to visualize the distribution of clones throughout anatomic space.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/mapscape.html
   :license: GPL-3
   :recipe: /`bioconductor-mapscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapscape/meta.yaml>`_

   


.. conda:package:: bioconductor-mapscape

   |downloads_bioconductor-mapscape| |docker_bioconductor-mapscape|

   :versions: 1.8.0-0, 1.6.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-base64enc: >=0.1-3
   :depends r-htmlwidgets: >=0.5
   :depends r-jsonlite: >=0.9.19
   :depends r-stringr: >=1.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mapscape

   and update with::

      conda update bioconductor-mapscape

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mapscape:<tag>

   (see `bioconductor-mapscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mapscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mapscape
   :alt:   (downloads)
.. |docker_bioconductor-mapscape| image:: https://quay.io/repository/biocontainers/bioconductor-mapscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapscape
.. _`bioconductor-mapscape/tags`: https://quay.io/repository/biocontainers/bioconductor-mapscape?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapscape/README.html