:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'topas'
.. highlight: bash

topas
=====

.. conda:recipe:: topas
   :replaces_section_title:
   :noindex:

   This toolkit allows the efficient manipulation of sequence data in various ways. It is organized into modules\: The FASTA processing modules\, the FASTQ processing modules\, the GFF processing modules and the VCF processing modules.

   :homepage: https://github.com/subwaystation/TOPAS
   :license: CC-BY
   :recipe: /`topas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/topas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/topas/meta.yaml>`_

   


.. conda:package:: topas

   |downloads_topas| |docker_topas|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install topas

   and update with::

      conda update topas

   or use the docker container::

      docker pull quay.io/biocontainers/topas:<tag>

   (see `topas/tags`_ for valid values for ``<tag>``)


.. |downloads_topas| image:: https://img.shields.io/conda/dn/bioconda/topas.svg?style=flat
   :target: https://anaconda.org/bioconda/topas
   :alt:   (downloads)
.. |docker_topas| image:: https://quay.io/repository/biocontainers/topas/status
   :target: https://quay.io/repository/biocontainers/topas
.. _`topas/tags`: https://quay.io/repository/biocontainers/topas?tab=tags


.. raw:: html

    <script>
        var package = "topas";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/topas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/topas/README.html