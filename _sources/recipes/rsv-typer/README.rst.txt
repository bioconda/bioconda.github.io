:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsv-typer'
.. highlight: bash

rsv-typer
=========

.. conda:recipe:: rsv-typer
   :replaces_section_title:
   :noindex:

   Genotyping RSV samples from nanopore sequencing data

   :homepage: https://github.com/DiltheyLab/RSVTyper
   :license: MIT
   :recipe: /`rsv-typer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsv-typer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsv-typer/meta.yaml>`_

   


.. conda:package:: rsv-typer

   |downloads_rsv-typer| |docker_rsv-typer|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends artic: ``1.2.1.*``
   :depends minimap2: ``>=2.17``
   :depends muscle: ``3.8.*``
   :depends nextclade: ``2.14.0.*``
   :depends python: ``>=3``
   :depends pyvcf: ``0.6.8 py36h9f0ad1d_1002``
   :depends samtools: ``>=1.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rsv-typer

   and update with::

      conda update rsv-typer

   or use the docker container::

      docker pull quay.io/biocontainers/rsv-typer:<tag>

   (see `rsv-typer/tags`_ for valid values for ``<tag>``)


.. |downloads_rsv-typer| image:: https://img.shields.io/conda/dn/bioconda/rsv-typer.svg?style=flat
   :target: https://anaconda.org/bioconda/rsv-typer
   :alt:   (downloads)
.. |docker_rsv-typer| image:: https://quay.io/repository/biocontainers/rsv-typer/status
   :target: https://quay.io/repository/biocontainers/rsv-typer
.. _`rsv-typer/tags`: https://quay.io/repository/biocontainers/rsv-typer?tab=tags


.. raw:: html

    <script>
        var package = "rsv-typer";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsv-typer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsv-typer/README.html