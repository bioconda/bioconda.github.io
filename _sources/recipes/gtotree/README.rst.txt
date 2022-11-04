:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtotree'
.. highlight: bash

gtotree
=======

.. conda:recipe:: gtotree
   :replaces_section_title:
   :noindex:

   GToTree is a user\-friendly workflow for phylogenomics.

   :homepage: https://github.com/AstrobioMike/GToTree/wiki/what-is-gtotree%3F
   :documentation: https://github.com/AstrobioMike/GToTree/wiki/
   
   :developer docs: https://github.com/AstrobioMike/GToTree/
   :license: GPL / GPL3
   :recipe: /`gtotree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtotree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtotree/meta.yaml>`_

   
   \# GToTree \- a user\-friendly workflow for phylogenomics

   GToTree is a user\-friendly workflow for phylogenomics intended to give more researchers the capability to create phylogenomic trees. The open\-access Bioinformatics Journal publication is available here \(https\:\/\/doi.org\/10.1093\/bioinformatics\/btz188\)\, and documentation and examples can be found at the wiki here \(https\:\/\/github.com\/AstrobioMike\/GToTree\/wiki\).



.. conda:package:: gtotree

   |downloads_gtotree| |docker_gtotree|

   :versions:
      
      

      ``1.7.05-1``

      

   
   :depends bc: 
   :depends biopython: 
   :depends coreutils: ``9.1.*``
   :depends curl: 
   :depends dos2unix: 
   :depends entrez-direct: 
   :depends fasttree: 
   :depends file: 
   :depends gzip: 
   :depends hmmer: 
   :depends iqtree: 
   :depends kofamscan: ``1.3.0.*``
   :depends muscle: ``5.*``
   :depends pandas: 
   :depends parallel: 
   :depends prodigal: 
   :depends python: 
   :depends sed: 
   :depends taxonkit: 
   :depends trimal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gtotree

   and update with::

      conda update gtotree

   or use the docker container::

      docker pull quay.io/biocontainers/gtotree:<tag>

   (see `gtotree/tags`_ for valid values for ``<tag>``)


.. |downloads_gtotree| image:: https://img.shields.io/conda/dn/bioconda/gtotree.svg?style=flat
   :target: https://anaconda.org/bioconda/gtotree
   :alt:   (downloads)
.. |docker_gtotree| image:: https://quay.io/repository/biocontainers/gtotree/status
   :target: https://quay.io/repository/biocontainers/gtotree
.. _`gtotree/tags`: https://quay.io/repository/biocontainers/gtotree?tab=tags


.. raw:: html

    <script>
        var package = "gtotree";
        var versions = ["1.7.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtotree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtotree/README.html