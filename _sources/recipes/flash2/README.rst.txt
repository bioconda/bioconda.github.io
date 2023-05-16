:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flash2'
.. highlight: bash

flash2
======

.. conda:recipe:: flash2
   :replaces_section_title:
   :noindex:

   Merge paired\-end reads from fragments that are shorter than twice the read length

   :homepage: https://github.com/dstreett/FLASH2
   :license: GPLv3+
   :recipe: /`flash2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flash2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flash2/meta.yaml>`_

   


.. conda:package:: flash2

   |downloads_flash2| |docker_flash2|

   :versions:
      
      

      ``2.2.00-6``,  ``2.2.00-5``,  ``2.2.00-4``,  ``2.2.00-3``,  ``2.2.00-2``,  ``2.2.00-1``,  ``2.2.00-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flash2

   and update with::

      conda update flash2

   or use the docker container::

      docker pull quay.io/biocontainers/flash2:<tag>

   (see `flash2/tags`_ for valid values for ``<tag>``)


.. |downloads_flash2| image:: https://img.shields.io/conda/dn/bioconda/flash2.svg?style=flat
   :target: https://anaconda.org/bioconda/flash2
   :alt:   (downloads)
.. |docker_flash2| image:: https://quay.io/repository/biocontainers/flash2/status
   :target: https://quay.io/repository/biocontainers/flash2
.. _`flash2/tags`: https://quay.io/repository/biocontainers/flash2?tab=tags


.. raw:: html

    <script>
        var package = "flash2";
        var versions = ["2.2.00","2.2.00","2.2.00","2.2.00","2.2.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flash2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flash2/README.html