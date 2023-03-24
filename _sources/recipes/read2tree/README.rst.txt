:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'read2tree'
.. highlight: bash

read2tree
=========

.. conda:recipe:: read2tree
   :replaces_section_title:
   :noindex:

   Building phylogenetic trees directly from sequencing reads

   :homepage: https://github.com/DessimozLab/read2tree
   :license: MIT
   :recipe: /`read2tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read2tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read2tree/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.04.18.488678`

   


.. conda:package:: read2tree

   |downloads_read2tree| |docker_read2tree|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends biopython: 
   :depends dendropy: 
   :depends filelock: 
   :depends iqtree: 
   :depends lxml: 
   :depends mafft: 
   :depends natsort: 
   :depends nextgenmap: 
   :depends ngmlr: 
   :depends numpy: 
   :depends pyham: 
   :depends pyparsing: 
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends samtools: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install read2tree

   and update with::

      conda update read2tree

   or use the docker container::

      docker pull quay.io/biocontainers/read2tree:<tag>

   (see `read2tree/tags`_ for valid values for ``<tag>``)


.. |downloads_read2tree| image:: https://img.shields.io/conda/dn/bioconda/read2tree.svg?style=flat
   :target: https://anaconda.org/bioconda/read2tree
   :alt:   (downloads)
.. |docker_read2tree| image:: https://quay.io/repository/biocontainers/read2tree/status
   :target: https://quay.io/repository/biocontainers/read2tree
.. _`read2tree/tags`: https://quay.io/repository/biocontainers/read2tree?tab=tags


.. raw:: html

    <script>
        var package = "read2tree";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/read2tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/read2tree/README.html