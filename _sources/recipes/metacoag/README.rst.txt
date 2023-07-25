:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacoag'
.. highlight: bash

metacoag
========

.. conda:recipe:: metacoag
   :replaces_section_title:
   :noindex:

   MetaCoAG\: Binning Metagenomic Contigs via Composition\, Coverage and Assembly Graphs

   :homepage: https://github.com/metagentools/MetaCoAG
   :documentation: https://metacoag.readthedocs.io/
   
   :license: GPL / GPL-3.0
   :recipe: /`metacoag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacoag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacoag/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-031-04749-7_5`

   MetaCoAG is a metagenomic contig binning tool that makes use of the connectivity information found in assembly graphs.



.. conda:package:: metacoag

   |downloads_metacoag| |docker_metacoag|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends biopython: 
   :depends cairocffi: 
   :depends click: 
   :depends fraggenescan: 
   :depends hmmer: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends python-igraph: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metacoag

   and update with::

      conda update metacoag

   or use the docker container::

      docker pull quay.io/biocontainers/metacoag:<tag>

   (see `metacoag/tags`_ for valid values for ``<tag>``)


.. |downloads_metacoag| image:: https://img.shields.io/conda/dn/bioconda/metacoag.svg?style=flat
   :target: https://anaconda.org/bioconda/metacoag
   :alt:   (downloads)
.. |docker_metacoag| image:: https://quay.io/repository/biocontainers/metacoag/status
   :target: https://quay.io/repository/biocontainers/metacoag
.. _`metacoag/tags`: https://quay.io/repository/biocontainers/metacoag?tab=tags


.. raw:: html

    <script>
        var package = "metacoag";
        var versions = ["1.1.4","1.1.3","1.1.2","1.1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacoag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacoag/README.html