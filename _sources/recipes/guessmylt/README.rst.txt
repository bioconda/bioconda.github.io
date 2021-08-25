:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guessmylt'
.. highlight: bash

guessmylt
=========

.. conda:recipe:: guessmylt
   :replaces_section_title:
   :noindex:

   Software to guess the RNA\-Seq library type.

   :homepage: https://github.com/NBISweden/GUESSmyLT
   :license: GPL / GPLv3
   :recipe: /`guessmylt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guessmylt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guessmylt/meta.yaml>`_

   


.. conda:package:: guessmylt

   |downloads_guessmylt| |docker_guessmylt|

   :versions:
      
      

      ``0.2.5-0``

      

   
   :depends bcbio-gff: ``0.6.4``
   :depends biopython: ``1.67``
   :depends bowtie2: ``>=2``
   :depends busco: ``3.0.2``
   :depends git: ``>=2.11.1``
   :depends pysam: ``>=0.13.0``
   :depends python: ``>3``
   :depends snakemake: ``5.4.*``
   :depends trinity: ``2.8.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install guessmylt

   and update with::

      conda update guessmylt

   or use the docker container::

      docker pull quay.io/biocontainers/guessmylt:<tag>

   (see `guessmylt/tags`_ for valid values for ``<tag>``)


.. |downloads_guessmylt| image:: https://img.shields.io/conda/dn/bioconda/guessmylt.svg?style=flat
   :target: https://anaconda.org/bioconda/guessmylt
   :alt:   (downloads)
.. |docker_guessmylt| image:: https://quay.io/repository/biocontainers/guessmylt/status
   :target: https://quay.io/repository/biocontainers/guessmylt
.. _`guessmylt/tags`: https://quay.io/repository/biocontainers/guessmylt?tab=tags


.. raw:: html

    <script>
        var package = "guessmylt";
        var versions = ["0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guessmylt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guessmylt/README.html