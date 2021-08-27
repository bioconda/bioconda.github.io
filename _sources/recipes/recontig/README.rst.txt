:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recontig'
.. highlight: bash

recontig
========

.. conda:recipe:: recontig
   :replaces_section_title:
   :noindex:

   recontig is a D program and python package that provides fast conversion of contig names between naming conventions for GFF\, VCF\/BCF\, SAM\/BAM\, and BED files.

   :homepage: https://github.com/blachlylab/recontig
   :license: MIT
   :recipe: /`recontig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recontig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recontig/meta.yaml>`_

   


.. conda:package:: recontig

   |downloads_recontig| |docker_recontig|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.1-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends pandas: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install recontig

   and update with::

      conda update recontig

   or use the docker container::

      docker pull quay.io/biocontainers/recontig:<tag>

   (see `recontig/tags`_ for valid values for ``<tag>``)


.. |downloads_recontig| image:: https://img.shields.io/conda/dn/bioconda/recontig.svg?style=flat
   :target: https://anaconda.org/bioconda/recontig
   :alt:   (downloads)
.. |docker_recontig| image:: https://quay.io/repository/biocontainers/recontig/status
   :target: https://quay.io/repository/biocontainers/recontig
.. _`recontig/tags`: https://quay.io/repository/biocontainers/recontig?tab=tags


.. raw:: html

    <script>
        var package = "recontig";
        var versions = ["1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recontig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recontig/README.html