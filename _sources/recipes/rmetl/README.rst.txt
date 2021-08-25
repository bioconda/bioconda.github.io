:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmetl'
.. highlight: bash

rmetl
=====

.. conda:recipe:: rmetl
   :replaces_section_title:
   :noindex:

   rMETL is a realignment\-based Mobile Element insertion detection Tool for Long read

   :homepage: https://github.com/tjiangHIT/rMETL
   :license: MIT / MIT
   :recipe: /`rmetl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmetl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmetl/meta.yaml>`_

   


.. conda:package:: rmetl

   |downloads_rmetl| |docker_rmetl|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends biopython: 
   :depends cigar: 
   :depends ngmlr: 
   :depends pysam: 
   :depends python: ``2.7.*``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmetl

   and update with::

      conda update rmetl

   or use the docker container::

      docker pull quay.io/biocontainers/rmetl:<tag>

   (see `rmetl/tags`_ for valid values for ``<tag>``)


.. |downloads_rmetl| image:: https://img.shields.io/conda/dn/bioconda/rmetl.svg?style=flat
   :target: https://anaconda.org/bioconda/rmetl
   :alt:   (downloads)
.. |docker_rmetl| image:: https://quay.io/repository/biocontainers/rmetl/status
   :target: https://quay.io/repository/biocontainers/rmetl
.. _`rmetl/tags`: https://quay.io/repository/biocontainers/rmetl?tab=tags


.. raw:: html

    <script>
        var package = "rmetl";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmetl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmetl/README.html