:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylmap'
.. highlight: bash

methylmap
=========

.. conda:recipe:: methylmap
   :replaces_section_title:
   :noindex:

   Plotting tool for population scale nucleotide modifications

   :homepage: https://github.com/EliseCoopman/methylmap
   :license: MIT / MIT
   :recipe: /`methylmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylmap/meta.yaml>`_

   


.. conda:package:: methylmap

   |downloads_methylmap| |docker_methylmap|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends numpy: ``>=1.14.3``
   :depends pandas: ``>=0.23.4``
   :depends plotly: ``>=5.4.0``
   :depends pyranges: ``>=0.0.77``
   :depends python: ``>=3``
   :depends tabix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install methylmap

   and update with::

      conda update methylmap

   or use the docker container::

      docker pull quay.io/biocontainers/methylmap:<tag>

   (see `methylmap/tags`_ for valid values for ``<tag>``)


.. |downloads_methylmap| image:: https://img.shields.io/conda/dn/bioconda/methylmap.svg?style=flat
   :target: https://anaconda.org/bioconda/methylmap
   :alt:   (downloads)
.. |docker_methylmap| image:: https://quay.io/repository/biocontainers/methylmap/status
   :target: https://quay.io/repository/biocontainers/methylmap
.. _`methylmap/tags`: https://quay.io/repository/biocontainers/methylmap?tab=tags


.. raw:: html

    <script>
        var package = "methylmap";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylmap/README.html