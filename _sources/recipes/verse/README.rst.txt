:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verse'
.. highlight: bash

verse
=====

.. conda:recipe:: verse
   :replaces_section_title:
   :noindex:

   VERSE\: a versatile and efficient RNA\-Seq read counting tool

   :homepage: https://github.com/qinzhu/VERSE
   :license: GPL / GPL-3.0
   :recipe: /`verse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verse/meta.yaml>`_

   


.. conda:package:: verse

   |downloads_verse| |docker_verse|

   :versions:
      
      

      ``0.1.5-6``,  ``0.1.5-5``,  ``0.1.5-4``,  ``0.1.5-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install verse

   and update with::

      conda update verse

   or use the docker container::

      docker pull quay.io/biocontainers/verse:<tag>

   (see `verse/tags`_ for valid values for ``<tag>``)


.. |downloads_verse| image:: https://img.shields.io/conda/dn/bioconda/verse.svg?style=flat
   :target: https://anaconda.org/bioconda/verse
   :alt:   (downloads)
.. |docker_verse| image:: https://quay.io/repository/biocontainers/verse/status
   :target: https://quay.io/repository/biocontainers/verse
.. _`verse/tags`: https://quay.io/repository/biocontainers/verse?tab=tags


.. raw:: html

    <script>
        var package = "verse";
        var versions = ["0.1.5","0.1.5","0.1.5","0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verse/README.html