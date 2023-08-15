:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sdeper'
.. highlight: bash

sdeper
======

.. conda:recipe:: sdeper
   :replaces_section_title:
   :noindex:

   Spatial Deconvolution method with Platform Effect Removal

   :homepage: https://az7jh2.github.io/SDePER/
   :documentation: https://sdeper.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/az7jh2/SDePER
   :license: MIT / MIT
   :recipe: /`sdeper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdeper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdeper/meta.yaml>`_

   


.. conda:package:: sdeper

   |downloads_sdeper| |docker_sdeper|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sdeper

   and update with::

      conda update sdeper

   or use the docker container::

      docker pull quay.io/biocontainers/sdeper:<tag>

   (see `sdeper/tags`_ for valid values for ``<tag>``)


.. |downloads_sdeper| image:: https://img.shields.io/conda/dn/bioconda/sdeper.svg?style=flat
   :target: https://anaconda.org/bioconda/sdeper
   :alt:   (downloads)
.. |docker_sdeper| image:: https://quay.io/repository/biocontainers/sdeper/status
   :target: https://quay.io/repository/biocontainers/sdeper
.. _`sdeper/tags`: https://quay.io/repository/biocontainers/sdeper?tab=tags


.. raw:: html

    <script>
        var package = "sdeper";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sdeper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sdeper/README.html