:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aniclustermap'
.. highlight: bash

aniclustermap
=============

.. conda:recipe:: aniclustermap
   :replaces_section_title:
   :noindex:

   A tool for drawing ANI clustermap between all\-vs\-all microbial genomes

   :homepage: https://github.com/moshi4/ANIclustermap/
   :license: MIT
   :recipe: /`aniclustermap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aniclustermap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aniclustermap/meta.yaml>`_

   


.. conda:package:: aniclustermap

   |downloads_aniclustermap| |docker_aniclustermap|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends fastani: ``>=1.33``
   :depends pandas: ``>=1.4.1``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.9.0``
   :depends seaborn: ``>=0.11.2``
   :depends skani: ``>=0.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aniclustermap

   and update with::

      conda update aniclustermap

   or use the docker container::

      docker pull quay.io/biocontainers/aniclustermap:<tag>

   (see `aniclustermap/tags`_ for valid values for ``<tag>``)


.. |downloads_aniclustermap| image:: https://img.shields.io/conda/dn/bioconda/aniclustermap.svg?style=flat
   :target: https://anaconda.org/bioconda/aniclustermap
   :alt:   (downloads)
.. |docker_aniclustermap| image:: https://quay.io/repository/biocontainers/aniclustermap/status
   :target: https://quay.io/repository/biocontainers/aniclustermap
.. _`aniclustermap/tags`: https://quay.io/repository/biocontainers/aniclustermap?tab=tags


.. raw:: html

    <script>
        var package = "aniclustermap";
        var versions = ["1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aniclustermap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aniclustermap/README.html