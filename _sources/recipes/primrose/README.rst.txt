:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primrose'
.. highlight: bash

primrose
========

.. conda:recipe:: primrose
   :replaces_section_title:
   :noindex:

   primrose

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`primrose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primrose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primrose/meta.yaml>`_

   


.. conda:package:: primrose

   |downloads_primrose| |docker_primrose|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install primrose

   and update with::

      conda update primrose

   or use the docker container::

      docker pull quay.io/biocontainers/primrose:<tag>

   (see `primrose/tags`_ for valid values for ``<tag>``)


.. |downloads_primrose| image:: https://img.shields.io/conda/dn/bioconda/primrose.svg?style=flat
   :target: https://anaconda.org/bioconda/primrose
   :alt:   (downloads)
.. |docker_primrose| image:: https://quay.io/repository/biocontainers/primrose/status
   :target: https://quay.io/repository/biocontainers/primrose
.. _`primrose/tags`: https://quay.io/repository/biocontainers/primrose?tab=tags


.. raw:: html

    <script>
        var package = "primrose";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primrose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primrose/README.html