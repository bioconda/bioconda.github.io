:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pore-c'
.. highlight: bash

pore-c
======

.. conda:recipe:: pore-c
   :replaces_section_title:
   :noindex:

   Toolkit for processing Pore\-C concatemers

   :homepage: https://github.com/nanoporetech/pore-c
   :license: OTHER / Mozilla Public License 2.0
   :recipe: /`pore-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pore-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pore-c/meta.yaml>`_

   


.. conda:package:: pore-c

   |downloads_pore-c| |docker_pore-c|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``

      

   
   :depends biopython: ``1.77``
   :depends click: ``>=7.0.0,<8.0``
   :depends cooler: ``0.8.*,>=0.8.5``
   :depends dask: ``2.*,>=2.0.0``
   :depends distributed: ``2.*,>=2.9.3``
   :depends intake: 
   :depends intake-parquet: 
   :depends ncls: 
   :depends networkx: ``2.*,>=2.4.0``
   :depends numpy: ``<1.20.0``
   :depends pairtools: 
   :depends pandas: ``>=1.0.5``
   :depends pyarrow: ``1.*,>=1.0.0``
   :depends pydantic: ``1.6.1``
   :depends pyranges: ``0.0.71``
   :depends pysam: 
   :depends python: 
   :depends streamz: ``0.*,>=0.5.2``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pore-c

   and update with::

      conda update pore-c

   or use the docker container::

      docker pull quay.io/biocontainers/pore-c:<tag>

   (see `pore-c/tags`_ for valid values for ``<tag>``)


.. |downloads_pore-c| image:: https://img.shields.io/conda/dn/bioconda/pore-c.svg?style=flat
   :target: https://anaconda.org/bioconda/pore-c
   :alt:   (downloads)
.. |docker_pore-c| image:: https://quay.io/repository/biocontainers/pore-c/status
   :target: https://quay.io/repository/biocontainers/pore-c
.. _`pore-c/tags`: https://quay.io/repository/biocontainers/pore-c?tab=tags


.. raw:: html

    <script>
        var package = "pore-c";
        var versions = ["0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pore-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pore-c/README.html