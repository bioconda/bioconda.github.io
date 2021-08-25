:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-dazzler'
.. highlight: bash

pb-dazzler
==========

.. conda:recipe:: pb-dazzler
   :replaces_section_title:
   :noindex:

   The Dresden Assembler suite \-\- Pacific Biosciences forks

   :homepage: https://github.com/PacificBiosciences
   :license: Custom
   :recipe: /`pb-dazzler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-dazzler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-dazzler/meta.yaml>`_

   


.. conda:package:: pb-dazzler

   |downloads_pb-dazzler| |docker_pb-dazzler|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``,  ``0.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pb-dazzler

   and update with::

      conda update pb-dazzler

   or use the docker container::

      docker pull quay.io/biocontainers/pb-dazzler:<tag>

   (see `pb-dazzler/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-dazzler| image:: https://img.shields.io/conda/dn/bioconda/pb-dazzler.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-dazzler
   :alt:   (downloads)
.. |docker_pb-dazzler| image:: https://quay.io/repository/biocontainers/pb-dazzler/status
   :target: https://quay.io/repository/biocontainers/pb-dazzler
.. _`pb-dazzler/tags`: https://quay.io/repository/biocontainers/pb-dazzler?tab=tags


.. raw:: html

    <script>
        var package = "pb-dazzler";
        var versions = ["0.0.1","0.0.1","0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-dazzler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-dazzler/README.html