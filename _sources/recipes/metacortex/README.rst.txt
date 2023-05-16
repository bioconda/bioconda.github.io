:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacortex'
.. highlight: bash

metacortex
==========

.. conda:recipe:: metacortex
   :replaces_section_title:
   :noindex:

   MetaCortex is an assembler for metagenomic\, or environmental sequence data.

   :homepage: https://github.com/SR-Martin/metacortex
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metacortex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacortex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacortex/meta.yaml>`_

   


.. conda:package:: metacortex

   |downloads_metacortex| |docker_metacortex|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metacortex

   and update with::

      conda update metacortex

   or use the docker container::

      docker pull quay.io/biocontainers/metacortex:<tag>

   (see `metacortex/tags`_ for valid values for ``<tag>``)


.. |downloads_metacortex| image:: https://img.shields.io/conda/dn/bioconda/metacortex.svg?style=flat
   :target: https://anaconda.org/bioconda/metacortex
   :alt:   (downloads)
.. |docker_metacortex| image:: https://quay.io/repository/biocontainers/metacortex/status
   :target: https://quay.io/repository/biocontainers/metacortex
.. _`metacortex/tags`: https://quay.io/repository/biocontainers/metacortex?tab=tags


.. raw:: html

    <script>
        var package = "metacortex";
        var versions = ["0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacortex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacortex/README.html