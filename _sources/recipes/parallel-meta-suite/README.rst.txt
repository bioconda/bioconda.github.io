:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parallel-meta-suite'
.. highlight: bash

parallel-meta-suite
===================

.. conda:recipe:: parallel-meta-suite
   :replaces_section_title:
   :noindex:

   Parallel\-META\-Suite is an interactive software package for rapid and comprehensive microbiome analysis.

   :homepage: https://github.com/qdu-bioinfo/parallel-meta-suite
   :license: GPL3
   :recipe: /`parallel-meta-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-meta-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-meta-suite/meta.yaml>`_

   


.. conda:package:: parallel-meta-suite

   |downloads_parallel-meta-suite| |docker_parallel-meta-suite|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends hmmer: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-pheatmap: 
   :depends vsearch: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parallel-meta-suite

   and update with::

      conda update parallel-meta-suite

   or use the docker container::

      docker pull quay.io/biocontainers/parallel-meta-suite:<tag>

   (see `parallel-meta-suite/tags`_ for valid values for ``<tag>``)


.. |downloads_parallel-meta-suite| image:: https://img.shields.io/conda/dn/bioconda/parallel-meta-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/parallel-meta-suite
   :alt:   (downloads)
.. |docker_parallel-meta-suite| image:: https://quay.io/repository/biocontainers/parallel-meta-suite/status
   :target: https://quay.io/repository/biocontainers/parallel-meta-suite
.. _`parallel-meta-suite/tags`: https://quay.io/repository/biocontainers/parallel-meta-suite?tab=tags


.. raw:: html

    <script>
        var package = "parallel-meta-suite";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parallel-meta-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parallel-meta-suite/README.html