:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msaconverter'
.. highlight: bash

msaconverter
============

.. conda:recipe:: msaconverter
   :replaces_section_title:
   :noindex:

   To convert multiple alignment alignments \(MSA\) into different formats

   :homepage: https://github.com/linzhi2013/msaconverter
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`msaconverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaconverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaconverter/meta.yaml>`_

   


.. conda:package:: msaconverter

   |downloads_msaconverter| |docker_msaconverter|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends biopython: ``>=1.54``
   :depends python: ``>=2.7.15``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msaconverter

   and update with::

      conda update msaconverter

   or use the docker container::

      docker pull quay.io/biocontainers/msaconverter:<tag>

   (see `msaconverter/tags`_ for valid values for ``<tag>``)


.. |downloads_msaconverter| image:: https://img.shields.io/conda/dn/bioconda/msaconverter.svg?style=flat
   :target: https://anaconda.org/bioconda/msaconverter
   :alt:   (downloads)
.. |docker_msaconverter| image:: https://quay.io/repository/biocontainers/msaconverter/status
   :target: https://quay.io/repository/biocontainers/msaconverter
.. _`msaconverter/tags`: https://quay.io/repository/biocontainers/msaconverter?tab=tags


.. raw:: html

    <script>
        var package = "msaconverter";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msaconverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msaconverter/README.html