:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leviosam2'
.. highlight: bash

leviosam2
=========

.. conda:recipe:: leviosam2
   :replaces_section_title:
   :noindex:

   Fast and accurate coordinate conversion between assemblies

   :homepage: https://github.com/milkschen/leviosam2
   :license: MIT
   :recipe: /`leviosam2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam2/meta.yaml>`_

   


.. conda:package:: leviosam2

   |downloads_leviosam2| |docker_leviosam2|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends htslib: ``>=1.15.1,<1.16.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends sdsl-lite: ``>=2.1.1``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install leviosam2

   and update with::

      conda update leviosam2

   or use the docker container::

      docker pull quay.io/biocontainers/leviosam2:<tag>

   (see `leviosam2/tags`_ for valid values for ``<tag>``)


.. |downloads_leviosam2| image:: https://img.shields.io/conda/dn/bioconda/leviosam2.svg?style=flat
   :target: https://anaconda.org/bioconda/leviosam2
   :alt:   (downloads)
.. |docker_leviosam2| image:: https://quay.io/repository/biocontainers/leviosam2/status
   :target: https://quay.io/repository/biocontainers/leviosam2
.. _`leviosam2/tags`: https://quay.io/repository/biocontainers/leviosam2?tab=tags


.. raw:: html

    <script>
        var package = "leviosam2";
        var versions = ["0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leviosam2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leviosam2/README.html