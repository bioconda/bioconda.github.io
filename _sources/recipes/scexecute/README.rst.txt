:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scexecute'
.. highlight: bash

scexecute
=========

.. conda:recipe:: scexecute
   :replaces_section_title:
   :noindex:

   SCExecute generates cell\-barcode specific BAM files from aligned\, aggregate single\-cell sequencing data\, executing a user\-provided command on each barcode\-stratified BAM file.

   :homepage: https://horvathlab.github.io/NGS/SCExecute
   :license: MIT
   :recipe: /`scexecute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scexecute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scexecute/meta.yaml>`_

   


.. conda:package:: scexecute

   |downloads_scexecute| |docker_scexecute|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends psutil: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends samtools: 
   :depends wxpython: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scexecute

   and update with::

      conda update scexecute

   or use the docker container::

      docker pull quay.io/biocontainers/scexecute:<tag>

   (see `scexecute/tags`_ for valid values for ``<tag>``)


.. |downloads_scexecute| image:: https://img.shields.io/conda/dn/bioconda/scexecute.svg?style=flat
   :target: https://anaconda.org/bioconda/scexecute
   :alt:   (downloads)
.. |docker_scexecute| image:: https://quay.io/repository/biocontainers/scexecute/status
   :target: https://quay.io/repository/biocontainers/scexecute
.. _`scexecute/tags`: https://quay.io/repository/biocontainers/scexecute?tab=tags


.. raw:: html

    <script>
        var package = "scexecute";
        var versions = ["1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scexecute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scexecute/README.html