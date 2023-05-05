:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squigulator'
.. highlight: bash

squigulator
===========

.. conda:recipe:: squigulator
   :replaces_section_title:
   :noindex:

   A tool for simulating nanopore raw signal data

   :homepage: https://github.com/hasindu2008/squigulator
   :license: MIT
   :recipe: /`squigulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigulator/meta.yaml>`_

   squigulator is a tool for simulating nanopore raw signal data.


.. conda:package:: squigulator

   |downloads_squigulator| |docker_squigulator|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install squigulator

   and update with::

      conda update squigulator

   or use the docker container::

      docker pull quay.io/biocontainers/squigulator:<tag>

   (see `squigulator/tags`_ for valid values for ``<tag>``)


.. |downloads_squigulator| image:: https://img.shields.io/conda/dn/bioconda/squigulator.svg?style=flat
   :target: https://anaconda.org/bioconda/squigulator
   :alt:   (downloads)
.. |docker_squigulator| image:: https://quay.io/repository/biocontainers/squigulator/status
   :target: https://quay.io/repository/biocontainers/squigulator
.. _`squigulator/tags`: https://quay.io/repository/biocontainers/squigulator?tab=tags


.. raw:: html

    <script>
        var package = "squigulator";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squigulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squigulator/README.html