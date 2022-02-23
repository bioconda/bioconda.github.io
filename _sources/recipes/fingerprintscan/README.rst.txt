:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fingerprintscan'
.. highlight: bash

fingerprintscan
===============

.. conda:recipe:: fingerprintscan
   :replaces_section_title:
   :noindex:

   Search against FingerPRINTScan with a protein query sequence to identify the closest matching PRINTS sequence motif fingerprints in a protein sequence.

   :homepage: https://github.com/ebi-pf-team/interproscan
   :license: GPL
   :recipe: /`fingerprintscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fingerprintscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fingerprintscan/meta.yaml>`_

   


.. conda:package:: fingerprintscan

   |downloads_fingerprintscan| |docker_fingerprintscan|

   :versions:
      
      

      ``3_597-2``,  ``3_597-1``,  ``3_597-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fingerprintscan

   and update with::

      conda update fingerprintscan

   or use the docker container::

      docker pull quay.io/biocontainers/fingerprintscan:<tag>

   (see `fingerprintscan/tags`_ for valid values for ``<tag>``)


.. |downloads_fingerprintscan| image:: https://img.shields.io/conda/dn/bioconda/fingerprintscan.svg?style=flat
   :target: https://anaconda.org/bioconda/fingerprintscan
   :alt:   (downloads)
.. |docker_fingerprintscan| image:: https://quay.io/repository/biocontainers/fingerprintscan/status
   :target: https://quay.io/repository/biocontainers/fingerprintscan
.. _`fingerprintscan/tags`: https://quay.io/repository/biocontainers/fingerprintscan?tab=tags


.. raw:: html

    <script>
        var package = "fingerprintscan";
        var versions = ["3_597","3_597","3_597"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fingerprintscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fingerprintscan/README.html