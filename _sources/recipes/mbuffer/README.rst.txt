:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mbuffer'
.. highlight: bash

mbuffer
=======

.. conda:recipe:: mbuffer
   :replaces_section_title:
   :noindex:

   mbuffer is a tool for buffering data streams with a large set of unique features

   :homepage: http://www.maier-komor.de/mbuffer.html
   :license: GPLv3
   :recipe: /`mbuffer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbuffer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbuffer/meta.yaml>`_

   


.. conda:package:: mbuffer

   |downloads_mbuffer| |docker_mbuffer|

   :versions:
      
      

      ``20160228-4``,  ``20160228-3``,  ``20160228-2``,  ``20160228-1``,  ``20160228-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mbuffer

   and update with::

      conda update mbuffer

   or use the docker container::

      docker pull quay.io/biocontainers/mbuffer:<tag>

   (see `mbuffer/tags`_ for valid values for ``<tag>``)


.. |downloads_mbuffer| image:: https://img.shields.io/conda/dn/bioconda/mbuffer.svg?style=flat
   :target: https://anaconda.org/bioconda/mbuffer
   :alt:   (downloads)
.. |docker_mbuffer| image:: https://quay.io/repository/biocontainers/mbuffer/status
   :target: https://quay.io/repository/biocontainers/mbuffer
.. _`mbuffer/tags`: https://quay.io/repository/biocontainers/mbuffer?tab=tags


.. raw:: html

    <script>
        var package = "mbuffer";
        var versions = ["20160228","20160228","20160228","20160228","20160228"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mbuffer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mbuffer/README.html