:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biscot'
.. highlight: bash

biscot
======

.. conda:recipe:: biscot
   :replaces_section_title:
   :noindex:

   Bionano SCaffolding Correction Tool

   :homepage: https://github.com/institut-de-genomique/biscot
   :license: LGPL-2.1
   :recipe: /`biscot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biscot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biscot/meta.yaml>`_

   


.. conda:package:: biscot

   |downloads_biscot| |docker_biscot|

   :versions:
      
      

      ``2.3.3-0``

      

   
   :depends argparse: 
   :depends biopython: 
   :depends coloredlogs: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biscot

   and update with::

      conda update biscot

   or use the docker container::

      docker pull quay.io/biocontainers/biscot:<tag>

   (see `biscot/tags`_ for valid values for ``<tag>``)


.. |downloads_biscot| image:: https://img.shields.io/conda/dn/bioconda/biscot.svg?style=flat
   :target: https://anaconda.org/bioconda/biscot
   :alt:   (downloads)
.. |docker_biscot| image:: https://quay.io/repository/biocontainers/biscot/status
   :target: https://quay.io/repository/biocontainers/biscot
.. _`biscot/tags`: https://quay.io/repository/biocontainers/biscot?tab=tags


.. raw:: html

    <script>
        var package = "biscot";
        var versions = ["2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biscot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biscot/README.html