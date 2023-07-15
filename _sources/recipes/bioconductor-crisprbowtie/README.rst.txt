:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprbowtie'
.. highlight: bash

bioconductor-crisprbowtie
=========================

.. conda:recipe:: bioconductor-crisprbowtie
   :replaces_section_title:
   :noindex:

   Bowtie\-based alignment of CRISPR gRNA spacer sequences

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/crisprBowtie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprbowtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbowtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbowtie/meta.yaml>`_

   Provides a user\-friendly interface to map on\-targets and off\-targets of CRISPR gRNA spacer sequences using bowtie. The alignment is fast\, and can be performed using either commonly\-used or custom CRISPR nucleases. The alignment can work with any reference or custom genomes. Both DNA\- and RNA\-targeting nucleases are supported.


.. conda:package:: bioconductor-crisprbowtie

   |downloads_bioconductor-crisprbowtie| |docker_bioconductor-crisprbowtie|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-crisprbase: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rbowtie: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-readr: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crisprbowtie

   and update with::

      conda update bioconductor-crisprbowtie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprbowtie:<tag>

   (see `bioconductor-crisprbowtie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprbowtie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprbowtie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprbowtie
   :alt:   (downloads)
.. |docker_bioconductor-crisprbowtie| image:: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie
.. _`bioconductor-crisprbowtie/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprbowtie";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprbowtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprbowtie/README.html