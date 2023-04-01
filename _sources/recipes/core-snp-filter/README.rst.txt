:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'core-snp-filter'
.. highlight: bash

core-snp-filter
===============

.. conda:recipe:: core-snp-filter
   :replaces_section_title:
   :noindex:

   Filtering sites \(i.e. columns\) in a FASTA\-format whole\-genome pseudo\-alignment.

   :homepage: https://github.com/rrwick/Core-SNP-filter
   :license: GPL / GPLv3
   :recipe: /`core-snp-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/core-snp-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/core-snp-filter/meta.yaml>`_

   


.. conda:package:: core-snp-filter

   |downloads_core-snp-filter| |docker_core-snp-filter|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install core-snp-filter

   and update with::

      conda update core-snp-filter

   or use the docker container::

      docker pull quay.io/biocontainers/core-snp-filter:<tag>

   (see `core-snp-filter/tags`_ for valid values for ``<tag>``)


.. |downloads_core-snp-filter| image:: https://img.shields.io/conda/dn/bioconda/core-snp-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/core-snp-filter
   :alt:   (downloads)
.. |docker_core-snp-filter| image:: https://quay.io/repository/biocontainers/core-snp-filter/status
   :target: https://quay.io/repository/biocontainers/core-snp-filter
.. _`core-snp-filter/tags`: https://quay.io/repository/biocontainers/core-snp-filter?tab=tags


.. raw:: html

    <script>
        var package = "core-snp-filter";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/core-snp-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/core-snp-filter/README.html