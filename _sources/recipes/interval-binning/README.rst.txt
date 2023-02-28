:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'interval-binning'
.. highlight: bash

interval-binning
================

.. conda:recipe:: interval-binning
   :replaces_section_title:
   :noindex:

   A Python implementation of the interval binning scheme

   :homepage: https://github.com/martijnvermaat/binning
   :license: MIT
   :recipe: /`interval-binning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interval-binning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interval-binning/meta.yaml>`_

   


.. conda:package:: interval-binning

   |downloads_interval-binning| |docker_interval-binning|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install interval-binning

   and update with::

      conda update interval-binning

   or use the docker container::

      docker pull quay.io/biocontainers/interval-binning:<tag>

   (see `interval-binning/tags`_ for valid values for ``<tag>``)


.. |downloads_interval-binning| image:: https://img.shields.io/conda/dn/bioconda/interval-binning.svg?style=flat
   :target: https://anaconda.org/bioconda/interval-binning
   :alt:   (downloads)
.. |docker_interval-binning| image:: https://quay.io/repository/biocontainers/interval-binning/status
   :target: https://quay.io/repository/biocontainers/interval-binning
.. _`interval-binning/tags`: https://quay.io/repository/biocontainers/interval-binning?tab=tags


.. raw:: html

    <script>
        var package = "interval-binning";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/interval-binning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/interval-binning/README.html