:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aprfinder'
.. highlight: bash

aprfinder
=========

.. conda:recipe:: aprfinder
   :replaces_section_title:
   :noindex:

   Tool for finding aphased repeats.

   :homepage: https://github.com/jaroslav-kubin/aprfinder
   :license: MIT
   :recipe: /`aprfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aprfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aprfinder/meta.yaml>`_

   


.. conda:package:: aprfinder

   |downloads_aprfinder| |docker_aprfinder|

   :versions:
      
      

      ``1.5-0``,  ``1.4-0``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aprfinder

   and update with::

      conda update aprfinder

   or use the docker container::

      docker pull quay.io/biocontainers/aprfinder:<tag>

   (see `aprfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_aprfinder| image:: https://img.shields.io/conda/dn/bioconda/aprfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/aprfinder
   :alt:   (downloads)
.. |docker_aprfinder| image:: https://quay.io/repository/biocontainers/aprfinder/status
   :target: https://quay.io/repository/biocontainers/aprfinder
.. _`aprfinder/tags`: https://quay.io/repository/biocontainers/aprfinder?tab=tags


.. raw:: html

    <script>
        var package = "aprfinder";
        var versions = ["1.5","1.4","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aprfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aprfinder/README.html