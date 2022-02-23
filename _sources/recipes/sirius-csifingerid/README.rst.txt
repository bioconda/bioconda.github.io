:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sirius-csifingerid'
.. highlight: bash

sirius-csifingerid
==================

.. conda:recipe:: sirius-csifingerid
   :replaces_section_title:
   :noindex:

   SIRIUS LC\-MS\/MS data analyses framework. Includes\: SIRIUS\, ZODIAC\, CSI\:FingerID \(with COSMIC\) and CANOPUS

   :homepage: https://bio.informatik.uni-jena.de/software/sirius/
   :license: AGPL-3.0-only
   :recipe: /`sirius-csifingerid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid/meta.yaml>`_

   SIRIUS is a java\-based software framework for the analysis of LC\-MS\/MS data of metabolites and other small molecules of biological interest. SIRIUS integrates a collection of our tools\, including CSI\:FingerID \(with COSMIC\)\, ZODIAC and CANOPUS.  In particular\, both the graphical user interface and the command line version of SIRIUS seamlessly integrate the CSI\:FingerID and CANOPUS web services.


.. conda:package:: sirius-csifingerid

   |downloads_sirius-csifingerid| |docker_sirius-csifingerid|

   :versions:
      
      

      ``4.9.8-1``,  ``4.9.8-0``,  ``4.9.4-0``,  ``4.9.3-0``,  ``4.0.1-1``,  ``4.0.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends zlib: 
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
        var versions = ["4.9.8","4.9.8","4.9.4","4.9.3","4.0.1"];
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