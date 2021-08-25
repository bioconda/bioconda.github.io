:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aegean'
.. highlight: bash

aegean
======

.. conda:recipe:: aegean
   :replaces_section_title:
   :noindex:

   The AEGeAn Toolkit provides a bundle of software tools for evaluating gene structure annotations and genome organization. The software is implemented in C and Python.

   :homepage: https://github.com/BrendelGroup/AEGeAn
   :license: ISC License
   :recipe: /`aegean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aegean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aegean/meta.yaml>`_

   


.. conda:package:: aegean

   |downloads_aegean| |docker_aegean|

   :versions:
      
      

      ``0.16.0-1``,  ``0.16.0-0``

      

   
   :depends cairo: ``>=1.16.0,<1.17.0a0``
   :depends genometools-genometools: 
   :depends git: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aegean

   and update with::

      conda update aegean

   or use the docker container::

      docker pull quay.io/biocontainers/aegean:<tag>

   (see `aegean/tags`_ for valid values for ``<tag>``)


.. |downloads_aegean| image:: https://img.shields.io/conda/dn/bioconda/aegean.svg?style=flat
   :target: https://anaconda.org/bioconda/aegean
   :alt:   (downloads)
.. |docker_aegean| image:: https://quay.io/repository/biocontainers/aegean/status
   :target: https://quay.io/repository/biocontainers/aegean
.. _`aegean/tags`: https://quay.io/repository/biocontainers/aegean?tab=tags


.. raw:: html

    <script>
        var package = "aegean";
        var versions = ["0.16.0","0.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aegean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aegean/README.html