:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'screadcounts'
.. highlight: bash

screadcounts
============

.. conda:recipe:: screadcounts
   :replaces_section_title:
   :noindex:

   SCReadCounts is a computational tool for a cell\-level assessment of the read counts bearing a particular nucleotide at genomic positions of interest from single cell RNA sequencing \(scRNA\-seq\) data. 

   :homepage: https://horvathlab.github.io/NGS/SCReadCounts
   :license: MIT
   :recipe: /`screadcounts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screadcounts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screadcounts/meta.yaml>`_

   


.. conda:package:: screadcounts

   |downloads_screadcounts| |docker_screadcounts|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``

      

   
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends samtools: 
   :depends scipy: 
   :depends wxpython: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install screadcounts

   and update with::

      conda update screadcounts

   or use the docker container::

      docker pull quay.io/biocontainers/screadcounts:<tag>

   (see `screadcounts/tags`_ for valid values for ``<tag>``)


.. |downloads_screadcounts| image:: https://img.shields.io/conda/dn/bioconda/screadcounts.svg?style=flat
   :target: https://anaconda.org/bioconda/screadcounts
   :alt:   (downloads)
.. |docker_screadcounts| image:: https://quay.io/repository/biocontainers/screadcounts/status
   :target: https://quay.io/repository/biocontainers/screadcounts
.. _`screadcounts/tags`: https://quay.io/repository/biocontainers/screadcounts?tab=tags


.. raw:: html

    <script>
        var package = "screadcounts";
        var versions = ["1.3.2","1.3.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/screadcounts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/screadcounts/README.html