:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkqc'
.. highlight: bash

checkqc
=======

.. conda:recipe:: checkqc
   :replaces_section_title:
   :noindex:

   A simple program to parse Illumina NGS data and check it for quality criteria.

   :homepage: https://www.github.com/Molmed/checkQC
   :license: GPL3 / GPLv3
   :recipe: /`checkqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkqc/meta.yaml>`_

   


.. conda:package:: checkqc

   |downloads_checkqc| |docker_checkqc|

   :versions:
      
      

      ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.6.6-0``,  ``3.6.5-0``,  ``3.6.4-0``,  ``3.6.3-0``,  ``3.6.1-0``

      

   
   :depends click: 
   :depends illumina-interop: ``>=1.2.3``
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=3.12``
   :depends sample-sheet: ``>=0.13.0``
   :depends tornado: 
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install checkqc

   and update with::

      conda update checkqc

   or use the docker container::

      docker pull quay.io/biocontainers/checkqc:<tag>

   (see `checkqc/tags`_ for valid values for ``<tag>``)


.. |downloads_checkqc| image:: https://img.shields.io/conda/dn/bioconda/checkqc.svg?style=flat
   :target: https://anaconda.org/bioconda/checkqc
   :alt:   (downloads)
.. |docker_checkqc| image:: https://quay.io/repository/biocontainers/checkqc/status
   :target: https://quay.io/repository/biocontainers/checkqc
.. _`checkqc/tags`: https://quay.io/repository/biocontainers/checkqc?tab=tags


.. raw:: html

    <script>
        var package = "checkqc";
        var versions = ["3.8.1","3.8.0","3.7.0","3.6.6","3.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkqc/README.html