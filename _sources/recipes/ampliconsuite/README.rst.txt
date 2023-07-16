:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampliconsuite'
.. highlight: bash

ampliconsuite
=============

.. conda:recipe:: ampliconsuite
   :replaces_section_title:
   :noindex:

   An end\-to\-end wrapper for focal amplification analysis from whole\-genome sequencing using AmpliconArchitect and associated tools.

   :homepage: https://github.com/AmpliconSuite
   :license: BSD 2-Clause License
   :recipe: /`ampliconsuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconsuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconsuite/meta.yaml>`_

   


.. conda:package:: ampliconsuite

   |downloads_ampliconsuite| |docker_ampliconsuite|

   :versions:
      
      

      ``0.1555.2-1``,  ``0.1555.2-0``

      

   
   :depends bwa: 
   :depends cnvkit: ``>=0.9.10``
   :depends flask: 
   :depends future: 
   :depends intervaltree: 
   :depends matplotlib-base: 
   :depends mscorefonts: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ampliconsuite

   and update with::

      conda update ampliconsuite

   or use the docker container::

      docker pull quay.io/biocontainers/ampliconsuite:<tag>

   (see `ampliconsuite/tags`_ for valid values for ``<tag>``)


.. |downloads_ampliconsuite| image:: https://img.shields.io/conda/dn/bioconda/ampliconsuite.svg?style=flat
   :target: https://anaconda.org/bioconda/ampliconsuite
   :alt:   (downloads)
.. |docker_ampliconsuite| image:: https://quay.io/repository/biocontainers/ampliconsuite/status
   :target: https://quay.io/repository/biocontainers/ampliconsuite
.. _`ampliconsuite/tags`: https://quay.io/repository/biocontainers/ampliconsuite?tab=tags


.. raw:: html

    <script>
        var package = "ampliconsuite";
        var versions = ["0.1555.2","0.1555.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampliconsuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampliconsuite/README.html