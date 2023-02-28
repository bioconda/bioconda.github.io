:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastaindex'
.. highlight: bash

fastaindex
==========

.. conda:recipe:: fastaindex
   :replaces_section_title:
   :noindex:

   FastA indexing and sequence retrival.

   :homepage: https://github.com/lpryszcz/FastaIndex
   :license: GPLv3
   :recipe: /`fastaindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaindex/meta.yaml>`_

   


.. conda:package:: fastaindex

   |downloads_fastaindex| |docker_fastaindex|

   :versions:
      
      

      ``0.11c-3``,  ``0.11c-2``,  ``0.11c-1``,  ``0.11c-0``

      

   
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastaindex

   and update with::

      conda update fastaindex

   or use the docker container::

      docker pull quay.io/biocontainers/fastaindex:<tag>

   (see `fastaindex/tags`_ for valid values for ``<tag>``)


.. |downloads_fastaindex| image:: https://img.shields.io/conda/dn/bioconda/fastaindex.svg?style=flat
   :target: https://anaconda.org/bioconda/fastaindex
   :alt:   (downloads)
.. |docker_fastaindex| image:: https://quay.io/repository/biocontainers/fastaindex/status
   :target: https://quay.io/repository/biocontainers/fastaindex
.. _`fastaindex/tags`: https://quay.io/repository/biocontainers/fastaindex?tab=tags


.. raw:: html

    <script>
        var package = "fastaindex";
        var versions = ["0.11c","0.11c","0.11c","0.11c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastaindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastaindex/README.html