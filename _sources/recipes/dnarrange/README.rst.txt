:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnarrange'
.. highlight: bash

dnarrange
=========

.. conda:recipe:: dnarrange
   :replaces_section_title:
   :noindex:

   Find rearrangements in \"long\" DNA reads relative to a genome sequence

   :homepage: https://github.com/mcfrith/dnarrange
   :license: GPL-3.0-or-later
   :recipe: /`dnarrange <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnarrange>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnarrange/meta.yaml>`_

   


.. conda:package:: dnarrange

   |downloads_dnarrange| |docker_dnarrange|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.6-0``

      

   
   :depends lamassemble: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnarrange

   and update with::

      conda update dnarrange

   or use the docker container::

      docker pull quay.io/biocontainers/dnarrange:<tag>

   (see `dnarrange/tags`_ for valid values for ``<tag>``)


.. |downloads_dnarrange| image:: https://img.shields.io/conda/dn/bioconda/dnarrange.svg?style=flat
   :target: https://anaconda.org/bioconda/dnarrange
   :alt:   (downloads)
.. |docker_dnarrange| image:: https://quay.io/repository/biocontainers/dnarrange/status
   :target: https://quay.io/repository/biocontainers/dnarrange
.. _`dnarrange/tags`: https://quay.io/repository/biocontainers/dnarrange?tab=tags


.. raw:: html

    <script>
        var package = "dnarrange";
        var versions = ["1.5.0","1.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnarrange/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnarrange/README.html