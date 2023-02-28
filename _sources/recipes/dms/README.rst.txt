:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dms'
.. highlight: bash

dms
===

.. conda:recipe:: dms
   :replaces_section_title:
   :noindex:

   Comprehensive taxonomic and phylogenetic comparison of shotgun metagenomes at the species level

   :homepage: https://github.com/qibebt-bioinfo/dynamic-meta-storms
   :license: GPL3
   :recipe: /`dms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dms/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz910`

   


.. conda:package:: dms

   |downloads_dms| |docker_dms|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openmp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dms

   and update with::

      conda update dms

   or use the docker container::

      docker pull quay.io/biocontainers/dms:<tag>

   (see `dms/tags`_ for valid values for ``<tag>``)


.. |downloads_dms| image:: https://img.shields.io/conda/dn/bioconda/dms.svg?style=flat
   :target: https://anaconda.org/bioconda/dms
   :alt:   (downloads)
.. |docker_dms| image:: https://quay.io/repository/biocontainers/dms/status
   :target: https://quay.io/repository/biocontainers/dms
.. _`dms/tags`: https://quay.io/repository/biocontainers/dms?tab=tags


.. raw:: html

    <script>
        var package = "dms";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dms/README.html