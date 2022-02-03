:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cuttlefish'
.. highlight: bash

cuttlefish
==========

.. conda:recipe:: cuttlefish
   :replaces_section_title:
   :noindex:

   Construction of the compacted de Bruijn graph efficiently

   :homepage: https://github.com/COMBINE-lab/cuttlefish
   :documentation: https://github.com/COMBINE-lab/cuttlefish#readme
   
   :license: BSD-3-Clause
   :recipe: /`cuttlefish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuttlefish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuttlefish/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab309`, doi: :doi:`10.1101/2021.12.14.472718`

   


.. conda:package:: cuttlefish

   |downloads_cuttlefish| |docker_cuttlefish|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libjemalloc: ``>=5.2.1``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cuttlefish

   and update with::

      conda update cuttlefish

   or use the docker container::

      docker pull quay.io/biocontainers/cuttlefish:<tag>

   (see `cuttlefish/tags`_ for valid values for ``<tag>``)


.. |downloads_cuttlefish| image:: https://img.shields.io/conda/dn/bioconda/cuttlefish.svg?style=flat
   :target: https://anaconda.org/bioconda/cuttlefish
   :alt:   (downloads)
.. |docker_cuttlefish| image:: https://quay.io/repository/biocontainers/cuttlefish/status
   :target: https://quay.io/repository/biocontainers/cuttlefish
.. _`cuttlefish/tags`: https://quay.io/repository/biocontainers/cuttlefish?tab=tags


.. raw:: html

    <script>
        var package = "cuttlefish";
        var versions = ["2.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cuttlefish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cuttlefish/README.html