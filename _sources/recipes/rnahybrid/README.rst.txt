:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnahybrid'
.. highlight: bash

rnahybrid
=========

.. conda:recipe:: rnahybrid
   :replaces_section_title:
   :noindex:

   RNAhybrid is a tool for finding the minimum free energy hybridization of a long and a short RNA.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rnahybrid
   :license: GPL / GPL-2
   :recipe: /`rnahybrid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnahybrid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnahybrid/meta.yaml>`_
   :links: doi: :doi:`10.1261/rna.5248604`

   


.. conda:package:: rnahybrid

   |downloads_rnahybrid| |docker_rnahybrid|

   :versions:
      
      

      ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgd: ``>=2.3.3,<2.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnahybrid

   and update with::

      conda update rnahybrid

   or use the docker container::

      docker pull quay.io/biocontainers/rnahybrid:<tag>

   (see `rnahybrid/tags`_ for valid values for ``<tag>``)


.. |downloads_rnahybrid| image:: https://img.shields.io/conda/dn/bioconda/rnahybrid.svg?style=flat
   :target: https://anaconda.org/bioconda/rnahybrid
   :alt:   (downloads)
.. |docker_rnahybrid| image:: https://quay.io/repository/biocontainers/rnahybrid/status
   :target: https://quay.io/repository/biocontainers/rnahybrid
.. _`rnahybrid/tags`: https://quay.io/repository/biocontainers/rnahybrid?tab=tags


.. raw:: html

    <script>
        var package = "rnahybrid";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnahybrid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnahybrid/README.html