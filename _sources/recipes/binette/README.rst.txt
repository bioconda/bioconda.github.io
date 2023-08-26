:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binette'
.. highlight: bash

binette
=======

.. conda:recipe:: binette
   :replaces_section_title:
   :noindex:

   A fast and accurate binning refinement tool to constructs high quality MAGs from the output of multiple binning tools.

   :homepage: https://github.com/genotoul-bioinfo/binette
   :license: MIT / MIT
   :recipe: /`binette <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binette>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binette/meta.yaml>`_

   


.. conda:package:: binette

   |downloads_binette| |docker_binette|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install binette

   and update with::

      conda update binette

   or use the docker container::

      docker pull quay.io/biocontainers/binette:<tag>

   (see `binette/tags`_ for valid values for ``<tag>``)


.. |downloads_binette| image:: https://img.shields.io/conda/dn/bioconda/binette.svg?style=flat
   :target: https://anaconda.org/bioconda/binette
   :alt:   (downloads)
.. |docker_binette| image:: https://quay.io/repository/biocontainers/binette/status
   :target: https://quay.io/repository/biocontainers/binette
.. _`binette/tags`: https://quay.io/repository/biocontainers/binette?tab=tags


.. raw:: html

    <script>
        var package = "binette";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binette/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binette/README.html