:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sequenza'
.. highlight: bash

r-sequenza
==========

.. conda:recipe:: r-sequenza
   :replaces_section_title:
   :noindex:

   Tools to analyze genomic sequencing data from paired normal\-tumor samples\, including cellularity and ploidy estimation\; mutation and copy number \(allele\-specific and total copy number\) detection\, quantification and visualization.

   :homepage: https://sequenzatools.bitbucket.io, Mailing list: https://groups.google.com/forum/#!forum/sequenza-user-group
   :license: GPL3 / GPL-3
   :recipe: /`r-sequenza <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sequenza>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sequenza/meta.yaml>`_
   :links: doi: :doi:`10.1093/annonc/mdu479`

   


.. conda:package:: r-sequenza

   |downloads_r-sequenza| |docker_r-sequenza|

   :versions:
      
      

      ``3.0.0-5``,  ``3.0.0-4``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``

      

   
   :depends bioconductor-copynumber: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-iotools: 
   :depends r-pbapply: 
   :depends r-readr: 
   :depends r-seqminer: 
   :depends r-squash: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sequenza

   and update with::

      conda update r-sequenza

   or use the docker container::

      docker pull quay.io/biocontainers/r-sequenza:<tag>

   (see `r-sequenza/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sequenza| image:: https://img.shields.io/conda/dn/bioconda/r-sequenza.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sequenza
   :alt:   (downloads)
.. |docker_r-sequenza| image:: https://quay.io/repository/biocontainers/r-sequenza/status
   :target: https://quay.io/repository/biocontainers/r-sequenza
.. _`r-sequenza/tags`: https://quay.io/repository/biocontainers/r-sequenza?tab=tags


.. raw:: html

    <script>
        var package = "r-sequenza";
        var versions = ["3.0.0","3.0.0","3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sequenza/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sequenza/README.html