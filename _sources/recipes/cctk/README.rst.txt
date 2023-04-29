:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cctk'
.. highlight: bash

cctk
====

.. conda:recipe:: cctk
   :replaces_section_title:
   :noindex:

   Tools to identify and compare CRISPR arrays.

   :homepage: https://github.com/Alan-Collins/CRISPR_comparison_toolkit
   :license: GPL-3.0
   :recipe: /`cctk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cctk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cctk/meta.yaml>`_

   


.. conda:package:: cctk

   |downloads_cctk| |docker_cctk|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0-0``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.0-0``,  ``0.7.7-0``

      

   
   :depends blast: 
   :depends dendropy: 
   :depends matplotlib-base: 
   :depends minced: 
   :depends numpy: 
   :depends python: ``>=3.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cctk

   and update with::

      conda update cctk

   or use the docker container::

      docker pull quay.io/biocontainers/cctk:<tag>

   (see `cctk/tags`_ for valid values for ``<tag>``)


.. |downloads_cctk| image:: https://img.shields.io/conda/dn/bioconda/cctk.svg?style=flat
   :target: https://anaconda.org/bioconda/cctk
   :alt:   (downloads)
.. |docker_cctk| image:: https://quay.io/repository/biocontainers/cctk/status
   :target: https://quay.io/repository/biocontainers/cctk
.. _`cctk/tags`: https://quay.io/repository/biocontainers/cctk?tab=tags


.. raw:: html

    <script>
        var package = "cctk";
        var versions = ["1.0.1","1.0","0.8.4","0.8.4","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cctk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cctk/README.html