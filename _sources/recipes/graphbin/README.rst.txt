:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphbin'
.. highlight: bash

graphbin
========

.. conda:recipe:: graphbin
   :replaces_section_title:
   :noindex:

   GraphBin\: Refined binning of metagenomic contigs using assembly graphs

   :homepage: https://github.com/Vini2/GraphBin
   :documentation: https://graphbin.readthedocs.io/
   
   :license: BSD-3
   :recipe: /`graphbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphbin/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa180`

   GraphBin is a metagenomic contig bin\-refinement tool that makes use of assembly graphs.



.. conda:package:: graphbin

   |downloads_graphbin| |docker_graphbin|

   :versions:
      
      

      ``1.7.0-0``,  ``1.6.1-0``,  ``1.5-0``

      

   
   :depends cairocffi: 
   :depends click: 
   :depends cogent3: 
   :depends python: ``>=3.7.1,<3.11``
   :depends python-igraph: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphbin

   and update with::

      conda update graphbin

   or use the docker container::

      docker pull quay.io/biocontainers/graphbin:<tag>

   (see `graphbin/tags`_ for valid values for ``<tag>``)


.. |downloads_graphbin| image:: https://img.shields.io/conda/dn/bioconda/graphbin.svg?style=flat
   :target: https://anaconda.org/bioconda/graphbin
   :alt:   (downloads)
.. |docker_graphbin| image:: https://quay.io/repository/biocontainers/graphbin/status
   :target: https://quay.io/repository/biocontainers/graphbin
.. _`graphbin/tags`: https://quay.io/repository/biocontainers/graphbin?tab=tags


.. raw:: html

    <script>
        var package = "graphbin";
        var versions = ["1.7.0","1.6.1","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphbin/README.html