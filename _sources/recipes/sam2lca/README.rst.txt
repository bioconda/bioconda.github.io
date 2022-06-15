:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sam2lca'
.. highlight: bash

sam2lca
=======

.. conda:recipe:: sam2lca
   :replaces_section_title:
   :noindex:

   Lowest Common Ancestor on SAM\/BAM\/CRAM alignment files

   :homepage: https://github.com/maxibor/sam2lca
   :license: GPL-3.0
   :recipe: /`sam2lca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2lca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2lca/meta.yaml>`_

   


.. conda:package:: sam2lca

   |downloads_sam2lca| |docker_sam2lca|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends click: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends python-rocksdb: 
   :depends scipy: 
   :depends taxopy: 
   :depends tqdm: 
   :depends xopen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sam2lca

   and update with::

      conda update sam2lca

   or use the docker container::

      docker pull quay.io/biocontainers/sam2lca:<tag>

   (see `sam2lca/tags`_ for valid values for ``<tag>``)


.. |downloads_sam2lca| image:: https://img.shields.io/conda/dn/bioconda/sam2lca.svg?style=flat
   :target: https://anaconda.org/bioconda/sam2lca
   :alt:   (downloads)
.. |docker_sam2lca| image:: https://quay.io/repository/biocontainers/sam2lca/status
   :target: https://quay.io/repository/biocontainers/sam2lca
.. _`sam2lca/tags`: https://quay.io/repository/biocontainers/sam2lca?tab=tags


.. raw:: html

    <script>
        var package = "sam2lca";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sam2lca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sam2lca/README.html