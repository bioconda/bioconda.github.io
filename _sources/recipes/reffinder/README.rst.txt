:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reffinder'
.. highlight: bash

reffinder
=========

.. conda:recipe:: reffinder
   :replaces_section_title:
   :noindex:

   refFinder\: Fast Lightweighttool for extracting nucleotides from fastafile using streams

   :homepage: https://github.com/ANGSD/refFinder
   :license: GPLv3, MIT
   :recipe: /`reffinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reffinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reffinder/meta.yaml>`_

   


.. conda:package:: reffinder

   |downloads_reffinder| |docker_reffinder|

   :versions:
      
      

      ``0.81-2``,  ``0.81-1``,  ``0.81-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install reffinder

   and update with::

      conda update reffinder

   or use the docker container::

      docker pull quay.io/biocontainers/reffinder:<tag>

   (see `reffinder/tags`_ for valid values for ``<tag>``)


.. |downloads_reffinder| image:: https://img.shields.io/conda/dn/bioconda/reffinder.svg?style=flat
   :target: https://anaconda.org/bioconda/reffinder
   :alt:   (downloads)
.. |docker_reffinder| image:: https://quay.io/repository/biocontainers/reffinder/status
   :target: https://quay.io/repository/biocontainers/reffinder
.. _`reffinder/tags`: https://quay.io/repository/biocontainers/reffinder?tab=tags


.. raw:: html

    <script>
        var package = "reffinder";
        var versions = ["0.81","0.81","0.81"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reffinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reffinder/README.html