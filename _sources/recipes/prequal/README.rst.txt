:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prequal'
.. highlight: bash

prequal
=======

.. conda:recipe:: prequal
   :replaces_section_title:
   :noindex:

   a pre\-alignment quality filter for comparative sequence analyses

   :homepage: https://github.com/simonwhelan/prequal
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`prequal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prequal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prequal/meta.yaml>`_

   


.. conda:package:: prequal

   |downloads_prequal| |docker_prequal|

   :versions:
      
      

      ``1.02-3``,  ``1.02-2``,  ``1.02-1``,  ``1.02-0``

      

   
   :depends boost-cpp: ``1.74.0.*``
   :depends zlib: ``1.2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prequal

   and update with::

      conda update prequal

   or use the docker container::

      docker pull quay.io/biocontainers/prequal:<tag>

   (see `prequal/tags`_ for valid values for ``<tag>``)


.. |downloads_prequal| image:: https://img.shields.io/conda/dn/bioconda/prequal.svg?style=flat
   :target: https://anaconda.org/bioconda/prequal
   :alt:   (downloads)
.. |docker_prequal| image:: https://quay.io/repository/biocontainers/prequal/status
   :target: https://quay.io/repository/biocontainers/prequal
.. _`prequal/tags`: https://quay.io/repository/biocontainers/prequal?tab=tags


.. raw:: html

    <script>
        var package = "prequal";
        var versions = ["1.02","1.02","1.02","1.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prequal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prequal/README.html