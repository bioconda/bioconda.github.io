:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cytocad'
.. highlight: bash

cytocad
=======

.. conda:recipe:: cytocad
   :replaces_section_title:
   :noindex:

   Large copy\-number variation detector with low\-depth whole\-genome sequencing data

   :homepage: https://github.com/cytham/cytocad
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`cytocad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytocad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytocad/meta.yaml>`_

   


.. conda:package:: cytocad

   |downloads_cytocad| |docker_cytocad|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bedtools: ``>=2.26.0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends librsvg: ``>=2.50.3``
   :depends matplotlib-base: ``>=2.2.3``
   :depends numpy: ``>=1.17.3``
   :depends pybedtools: ``>=0.8.0``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends samtools: ``>=1.3``
   :depends scipy: ``>=1.2.1``
   :depends tagore: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cytocad

   and update with::

      conda update cytocad

   or use the docker container::

      docker pull quay.io/biocontainers/cytocad:<tag>

   (see `cytocad/tags`_ for valid values for ``<tag>``)


.. |downloads_cytocad| image:: https://img.shields.io/conda/dn/bioconda/cytocad.svg?style=flat
   :target: https://anaconda.org/bioconda/cytocad
   :alt:   (downloads)
.. |docker_cytocad| image:: https://quay.io/repository/biocontainers/cytocad/status
   :target: https://quay.io/repository/biocontainers/cytocad
.. _`cytocad/tags`: https://quay.io/repository/biocontainers/cytocad?tab=tags


.. raw:: html

    <script>
        var package = "cytocad";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cytocad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cytocad/README.html