:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duplomap'
.. highlight: bash

duplomap
========

.. conda:recipe:: duplomap
   :replaces_section_title:
   :noindex:

   Tool designed to improve precision and recall of long\-read alignments in segmental duplications.

   :homepage: https://gitlab.com/tprodanov/duplomap
   :license: MIT
   :recipe: /`duplomap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplomap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplomap/meta.yaml>`_

   


.. conda:package:: duplomap

   |downloads_duplomap| |docker_duplomap|

   :versions:
      
      

      ``0.9.5-2``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install duplomap

   and update with::

      conda update duplomap

   or use the docker container::

      docker pull quay.io/biocontainers/duplomap:<tag>

   (see `duplomap/tags`_ for valid values for ``<tag>``)


.. |downloads_duplomap| image:: https://img.shields.io/conda/dn/bioconda/duplomap.svg?style=flat
   :target: https://anaconda.org/bioconda/duplomap
   :alt:   (downloads)
.. |docker_duplomap| image:: https://quay.io/repository/biocontainers/duplomap/status
   :target: https://quay.io/repository/biocontainers/duplomap
.. _`duplomap/tags`: https://quay.io/repository/biocontainers/duplomap?tab=tags


.. raw:: html

    <script>
        var package = "duplomap";
        var versions = ["0.9.5","0.9.5","0.9.5","0.9.4","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duplomap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duplomap/README.html