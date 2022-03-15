:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nopilesum'
.. highlight: bash

nopilesum
=========

.. conda:recipe:: nopilesum
   :replaces_section_title:
   :noindex:

   nopilesum is a D program that functions as an alternative to GATK4\'s GetPileupSummaries.

   :homepage: https://github.com/blachlylab/nopilesum
   :license: MIT
   :recipe: /`nopilesum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nopilesum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nopilesum/meta.yaml>`_

   


.. conda:package:: nopilesum

   |downloads_nopilesum| |docker_nopilesum|

   :versions:
      
      

      ``1.1.2-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends htslib: ``>=1.15,<1.16.0a0``
   :depends ldc: ``>=1.28.1,<2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nopilesum

   and update with::

      conda update nopilesum

   or use the docker container::

      docker pull quay.io/biocontainers/nopilesum:<tag>

   (see `nopilesum/tags`_ for valid values for ``<tag>``)


.. |downloads_nopilesum| image:: https://img.shields.io/conda/dn/bioconda/nopilesum.svg?style=flat
   :target: https://anaconda.org/bioconda/nopilesum
   :alt:   (downloads)
.. |docker_nopilesum| image:: https://quay.io/repository/biocontainers/nopilesum/status
   :target: https://quay.io/repository/biocontainers/nopilesum
.. _`nopilesum/tags`: https://quay.io/repository/biocontainers/nopilesum?tab=tags


.. raw:: html

    <script>
        var package = "nopilesum";
        var versions = ["1.1.2","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nopilesum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nopilesum/README.html