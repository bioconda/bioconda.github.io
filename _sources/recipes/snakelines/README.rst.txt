:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakelines'
.. highlight: bash

snakelines
==========

.. conda:recipe:: snakelines
   :replaces_section_title:
   :noindex:

   Computational pipelines for processing of paired\-end sequencing reads.

   :homepage: https://snakelines.readthedocs.io/en/latest/
   :license: CC BY-NC-SA
   :recipe: /`snakelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakelines/meta.yaml>`_

   


.. conda:package:: snakelines

   |downloads_snakelines| |docker_snakelines|

   :versions:
      
      

      ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.2-0``

      

   
   :depends biopython: ``1.78``
   :depends bs4: ``4.9.3``
   :depends jinja2: ``2.11.2``
   :depends numpy: ``1.19.2``
   :depends openpyxl: ``3.0.5``
   :depends oyaml: ``0.9``
   :depends pandas: ``1.1.3``
   :depends pysam: ``0.16.0.1``
   :depends python: ``3.7.6``
   :depends scikit-bio: ``0.5.6``
   :depends seaborn: ``0.11.0``
   :depends snakemake: ``5.13.0``
   :depends tk: ``8.6.10``
   :depends weasyprint: ``51``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakelines

   and update with::

      conda update snakelines

   or use the docker container::

      docker pull quay.io/biocontainers/snakelines:<tag>

   (see `snakelines/tags`_ for valid values for ``<tag>``)


.. |downloads_snakelines| image:: https://img.shields.io/conda/dn/bioconda/snakelines.svg?style=flat
   :target: https://anaconda.org/bioconda/snakelines
   :alt:   (downloads)
.. |docker_snakelines| image:: https://quay.io/repository/biocontainers/snakelines/status
   :target: https://quay.io/repository/biocontainers/snakelines
.. _`snakelines/tags`: https://quay.io/repository/biocontainers/snakelines?tab=tags


.. raw:: html

    <script>
        var package = "snakelines";
        var versions = ["0.10.0","0.10.0","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakelines/README.html