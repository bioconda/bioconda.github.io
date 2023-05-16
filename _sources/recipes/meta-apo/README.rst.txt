:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meta-apo'
.. highlight: bash

meta-apo
========

.. conda:recipe:: meta-apo
   :replaces_section_title:
   :noindex:

   Meta\-Apo improves accuracy of 16S\-amplicon\-based prediction of microbiome function

   :homepage: https://github.com/qibebt-bioinfo/meta-apo
   :license: GPL3
   :recipe: /`meta-apo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-apo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-apo/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-020-07307-1`

   


.. conda:package:: meta-apo

   |downloads_meta-apo| |docker_meta-apo|

   :versions:
      
      

      ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meta-apo

   and update with::

      conda update meta-apo

   or use the docker container::

      docker pull quay.io/biocontainers/meta-apo:<tag>

   (see `meta-apo/tags`_ for valid values for ``<tag>``)


.. |downloads_meta-apo| image:: https://img.shields.io/conda/dn/bioconda/meta-apo.svg?style=flat
   :target: https://anaconda.org/bioconda/meta-apo
   :alt:   (downloads)
.. |docker_meta-apo| image:: https://quay.io/repository/biocontainers/meta-apo/status
   :target: https://quay.io/repository/biocontainers/meta-apo
.. _`meta-apo/tags`: https://quay.io/repository/biocontainers/meta-apo?tab=tags


.. raw:: html

    <script>
        var package = "meta-apo";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta-apo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta-apo/README.html