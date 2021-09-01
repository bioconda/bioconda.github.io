:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gganatogram'
.. highlight: bash

r-gganatogram
=============

.. conda:recipe:: r-gganatogram
   :replaces_section_title:
   :noindex:

   Create anatogram images for different organisms

   :homepage: https://github.com/jespermaag/gganatogram
   :license: GPL / GPL-2.0-only
   :recipe: /`r-gganatogram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gganatogram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gganatogram/meta.yaml>`_

   


.. conda:package:: r-gganatogram

   |downloads_r-gganatogram| |docker_r-gganatogram|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-ggpolypath: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gganatogram

   and update with::

      conda update r-gganatogram

   or use the docker container::

      docker pull quay.io/biocontainers/r-gganatogram:<tag>

   (see `r-gganatogram/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gganatogram| image:: https://img.shields.io/conda/dn/bioconda/r-gganatogram.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gganatogram
   :alt:   (downloads)
.. |docker_r-gganatogram| image:: https://quay.io/repository/biocontainers/r-gganatogram/status
   :target: https://quay.io/repository/biocontainers/r-gganatogram
.. _`r-gganatogram/tags`: https://quay.io/repository/biocontainers/r-gganatogram?tab=tags


.. raw:: html

    <script>
        var package = "r-gganatogram";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gganatogram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gganatogram/README.html