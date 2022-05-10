:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'monsda'
.. highlight: bash

monsda
======

.. conda:recipe:: monsda
   :replaces_section_title:
   :noindex:

   MONSDA\, Modular Organizer of Nextflow and Snakemake driven hts Data Analysis

   :homepage: https://github.com/jfallmann/MONSDA
   :documentation: https://monsda.readthedocs.io/en/latest/
   
   :license: GPL / GPL3
   :recipe: /`monsda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monsda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monsda/meta.yaml>`_

   


.. conda:package:: monsda

   |downloads_monsda| |docker_monsda|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends grep: ``>=3.4``
   :depends libmamba: ``>=0.21.2``
   :depends mamba: ``>=0.17.0``
   :depends more-itertools: ``>=8.8.0``
   :depends natsort: ``>=7.1.1``
   :depends nextflow: 
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=1.4.1``
   :depends perl: ``>=5.32.1``
   :depends python: 
   :depends python: ``>=3.9``
   :depends scipy: ``>=1.7.0``
   :depends snakemake: ``>=6.5.3``
   :depends snakemake-minimal: ``>=6.5.3``
   :depends versioneer: ``>=0.20``
   :depends yaml: ``>=0.2.5``
   :depends zlib: ``>=1.2.11``
   :depends zstd: ``>=1.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install monsda

   and update with::

      conda update monsda

   or use the docker container::

      docker pull quay.io/biocontainers/monsda:<tag>

   (see `monsda/tags`_ for valid values for ``<tag>``)


.. |downloads_monsda| image:: https://img.shields.io/conda/dn/bioconda/monsda.svg?style=flat
   :target: https://anaconda.org/bioconda/monsda
   :alt:   (downloads)
.. |docker_monsda| image:: https://quay.io/repository/biocontainers/monsda/status
   :target: https://quay.io/repository/biocontainers/monsda
.. _`monsda/tags`: https://quay.io/repository/biocontainers/monsda?tab=tags


.. raw:: html

    <script>
        var package = "monsda";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/monsda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/monsda/README.html