:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recountmethylation'
.. highlight: bash

bioconductor-recountmethylation
===============================

.. conda:recipe:: bioconductor-recountmethylation
   :replaces_section_title:
   :noindex:

   Access and analyze public DNA methylation array data compilations

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/recountmethylation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recountmethylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recountmethylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recountmethylation/meta.yaml>`_

   Resources for cross\-study analyses of public DNAm array data from NCBI GEO repo\, produced using Illumina\'s Infinium HumanMethylation450K \(HM450K\) and MethylationEPIC \(EPIC\) platforms. Provided functions enable download\, summary\, and filtering of large compilation files. Vignettes detail background about file formats\, example analyses\, and more. Note the disclaimer on package load and consult the main manuscripts for further info.


.. conda:package:: bioconductor-recountmethylation

   |downloads_bioconductor-recountmethylation| |docker_bioconductor-recountmethylation|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rhdf5: ``>=2.42.0,<2.43.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-r.utils: 
   :depends r-rcurl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-recountmethylation

   and update with::

      conda update bioconductor-recountmethylation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-recountmethylation:<tag>

   (see `bioconductor-recountmethylation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-recountmethylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recountmethylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-recountmethylation
   :alt:   (downloads)
.. |docker_bioconductor-recountmethylation| image:: https://quay.io/repository/biocontainers/bioconductor-recountmethylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recountmethylation
.. _`bioconductor-recountmethylation/tags`: https://quay.io/repository/biocontainers/bioconductor-recountmethylation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-recountmethylation";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recountmethylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recountmethylation/README.html