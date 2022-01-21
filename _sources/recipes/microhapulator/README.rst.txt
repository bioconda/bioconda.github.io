:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microhapulator'
.. highlight: bash

microhapulator
==============

.. conda:recipe:: microhapulator
   :replaces_section_title:
   :noindex:

   Tools for empirical microhaplotype calling\, forensic interpretation\, and simulation.

   :homepage: https://github.com/bioforensics/MicroHapulator/
   :license: BSD / BSD License
   :recipe: /`microhapulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapulator/meta.yaml>`_

   


.. conda:package:: microhapulator

   |downloads_microhapulator| |docker_microhapulator|

   :versions:
      
      

      ``0.5-0``,  ``0.4.1-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1.3-0``

      

   
   :depends bwa: ``>=0.7.17``
   :depends flash: ``>=1.2``
   :depends happer: ``>=0.1``
   :depends insilicoseq: ``>=1.3.6``
   :depends jsonschema: ``>=3.1``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=1.0``
   :depends pysam: ``>=0.15.2``
   :depends python: ``>=3``
   :depends samtools: ``>=1.12``
   :depends termgraph: ``>=0.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install microhapulator

   and update with::

      conda update microhapulator

   or use the docker container::

      docker pull quay.io/biocontainers/microhapulator:<tag>

   (see `microhapulator/tags`_ for valid values for ``<tag>``)


.. |downloads_microhapulator| image:: https://img.shields.io/conda/dn/bioconda/microhapulator.svg?style=flat
   :target: https://anaconda.org/bioconda/microhapulator
   :alt:   (downloads)
.. |docker_microhapulator| image:: https://quay.io/repository/biocontainers/microhapulator/status
   :target: https://quay.io/repository/biocontainers/microhapulator
.. _`microhapulator/tags`: https://quay.io/repository/biocontainers/microhapulator?tab=tags


.. raw:: html

    <script>
        var package = "microhapulator";
        var versions = ["0.5","0.4.1","0.3","0.2","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microhapulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microhapulator/README.html