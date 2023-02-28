:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplomap'
.. highlight: bash

haplomap
========

.. conda:recipe:: haplomap
   :replaces_section_title:
   :noindex:

   Haplotype\-based computational genetic mapping

   :homepage: https://github.com/zqfang/haplomap
   :license: MIT
   :recipe: /`haplomap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplomap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplomap/meta.yaml>`_

   


.. conda:package:: haplomap

   |downloads_haplomap| |docker_haplomap|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haplomap

   and update with::

      conda update haplomap

   or use the docker container::

      docker pull quay.io/biocontainers/haplomap:<tag>

   (see `haplomap/tags`_ for valid values for ``<tag>``)


.. |downloads_haplomap| image:: https://img.shields.io/conda/dn/bioconda/haplomap.svg?style=flat
   :target: https://anaconda.org/bioconda/haplomap
   :alt:   (downloads)
.. |docker_haplomap| image:: https://quay.io/repository/biocontainers/haplomap/status
   :target: https://quay.io/repository/biocontainers/haplomap
.. _`haplomap/tags`: https://quay.io/repository/biocontainers/haplomap?tab=tags


.. raw:: html

    <script>
        var package = "haplomap";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplomap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplomap/README.html