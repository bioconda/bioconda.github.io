:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mmcpcounter'
.. highlight: bash

r-mmcpcounter
=============

.. conda:recipe:: r-mmcpcounter
   :replaces_section_title:
   :noindex:

   Murine version of MCP\-counter\, a tool to estimate the immune and stromal composition of heterogeneous tissue\, from transcriptomic data 

   :homepage: https://github.com/cit-bioinfo/mMCP-counter
   :license: GPL / GPL-3
   :recipe: /`r-mmcpcounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmcpcounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmcpcounter/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-020-00783-w`

   


.. conda:package:: r-mmcpcounter

   |downloads_r-mmcpcounter| |docker_r-mmcpcounter|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mmcpcounter

   and update with::

      conda update r-mmcpcounter

   or use the docker container::

      docker pull quay.io/biocontainers/r-mmcpcounter:<tag>

   (see `r-mmcpcounter/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mmcpcounter| image:: https://img.shields.io/conda/dn/bioconda/r-mmcpcounter.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mmcpcounter
   :alt:   (downloads)
.. |docker_r-mmcpcounter| image:: https://quay.io/repository/biocontainers/r-mmcpcounter/status
   :target: https://quay.io/repository/biocontainers/r-mmcpcounter
.. _`r-mmcpcounter/tags`: https://quay.io/repository/biocontainers/r-mmcpcounter?tab=tags


.. raw:: html

    <script>
        var package = "r-mmcpcounter";
        var versions = ["1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mmcpcounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mmcpcounter/README.html