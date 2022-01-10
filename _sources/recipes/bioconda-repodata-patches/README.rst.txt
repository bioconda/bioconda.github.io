:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda-repodata-patches'
.. highlight: bash

bioconda-repodata-patches
=========================

.. conda:recipe:: bioconda-repodata-patches
   :replaces_section_title:
   :noindex:

   generate tweaks to index metadata\, hosted separately from anaconda.org index

   :homepage: https://github.com/bioconda/bioconda-recipes
   :license: CC-PDDC
   :recipe: /`bioconda-repodata-patches <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-repodata-patches>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-repodata-patches/meta.yaml>`_

   


.. conda:package:: bioconda-repodata-patches

   |downloads_bioconda-repodata-patches| |docker_bioconda-repodata-patches|

   :versions:
      
      

      ``20220110-0``,  ``20220109-0``,  ``20220108-0``,  ``20220107-0``,  ``20220106-0``,  ``20220105-0``,  ``20220104-0``,  ``20220103-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconda-repodata-patches

   and update with::

      conda update bioconda-repodata-patches

   or use the docker container::

      docker pull quay.io/biocontainers/bioconda-repodata-patches:<tag>

   (see `bioconda-repodata-patches/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconda-repodata-patches| image:: https://img.shields.io/conda/dn/bioconda/bioconda-repodata-patches.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda-repodata-patches
   :alt:   (downloads)
.. |docker_bioconda-repodata-patches| image:: https://quay.io/repository/biocontainers/bioconda-repodata-patches/status
   :target: https://quay.io/repository/biocontainers/bioconda-repodata-patches
.. _`bioconda-repodata-patches/tags`: https://quay.io/repository/biocontainers/bioconda-repodata-patches?tab=tags


.. raw:: html

    <script>
        var package = "bioconda-repodata-patches";
        var versions = ["20220110","20220109","20220108","20220107","20220106"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda-repodata-patches/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda-repodata-patches/README.html