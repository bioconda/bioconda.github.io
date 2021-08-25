:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sirius-csifingerid'
.. highlight: bash

sirius-csifingerid
==================

.. conda:recipe:: sirius-csifingerid
   :replaces_section_title:
   :noindex:

   SIRIUS is new java\-based software framework for discovering a landscape of de\-novo identification of metabolites using single and tandem mass spectrometry. SIRIUS uses isotope pattern analysis for detecting the molecular formula and further analyses the fragmentation pattern of a compound using fragmentation trees.

   :homepage: https://bio.informatik.uni-jena.de/software/sirius/
   :license: GPLv3
   :recipe: /`sirius-csifingerid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid/meta.yaml>`_

   


.. conda:package:: sirius-csifingerid

   |downloads_sirius-csifingerid| |docker_sirius-csifingerid|

   :versions:
      
      

      ``4.0.1-1``,  ``4.0.1-0``

      

   
   :depends glpk: ``>=4.65,<4.66.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends openjdk: ``>=7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sirius-csifingerid

   and update with::

      conda update sirius-csifingerid

   or use the docker container::

      docker pull quay.io/biocontainers/sirius-csifingerid:<tag>

   (see `sirius-csifingerid/tags`_ for valid values for ``<tag>``)


.. |downloads_sirius-csifingerid| image:: https://img.shields.io/conda/dn/bioconda/sirius-csifingerid.svg?style=flat
   :target: https://anaconda.org/bioconda/sirius-csifingerid
   :alt:   (downloads)
.. |docker_sirius-csifingerid| image:: https://quay.io/repository/biocontainers/sirius-csifingerid/status
   :target: https://quay.io/repository/biocontainers/sirius-csifingerid
.. _`sirius-csifingerid/tags`: https://quay.io/repository/biocontainers/sirius-csifingerid?tab=tags


.. raw:: html

    <script>
        var package = "sirius-csifingerid";
        var versions = ["4.0.1","4.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sirius-csifingerid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sirius-csifingerid/README.html