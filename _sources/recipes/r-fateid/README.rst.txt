:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-fateid'
.. highlight: bash

r-fateid
========

.. conda:recipe:: r-fateid
   :replaces_section_title:

   Application of \'FateID\' allows computation and visualization of cell fate bias for multi\-lineage single cell transcriptome data. Herman\, J.S.\, Sagar\, Grün D. \(2017\) \<DOI\:10.1038\/nmeth.4662\>.

   :homepage: https://CRAN.R-project.org/package=FateID
   :license: GPL3 / GPL-3
   :recipe: /`r-fateid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fateid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fateid/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.4662`

   


.. conda:package:: r-fateid

   |downloads_r-fateid| |docker_r-fateid|

   :versions: 0.1.6-0, 0.1.4-1, 0.1.4-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lle: 
   :depends r-locfit: 
   :depends r-pheatmap: 
   :depends r-princurve: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-rgl: 
   :depends r-rtsne: 
   :depends r-som: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-fateid

   and update with::

      conda update r-fateid

   or use the docker container::

      docker pull quay.io/biocontainers/r-fateid:<tag>

   (see `r-fateid/tags`_ for valid values for ``<tag>``)


.. |downloads_r-fateid| image:: https://img.shields.io/conda/dn/bioconda/r-fateid.svg?style=flat
   :alt:   (downloads)
.. |docker_r-fateid| image:: https://quay.io/repository/biocontainers/r-fateid/status
   :target: https://quay.io/repository/biocontainers/r-fateid
.. _`r-fateid/tags`: https://quay.io/repository/biocontainers/r-fateid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-fateid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-fateid/README.html