:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trim_isoseq_polya'
.. highlight: bash

trim_isoseq_polya
=================

.. conda:recipe:: trim_isoseq_polya
   :replaces_section_title:
   :noindex:

   Trims polyA tails from IsoSeq FASTA files

   :homepage: https://github.com/PacificBiosciences/trim_isoseq_polyA
   :license: BSD-3-Clause-Clear
   :recipe: /`trim_isoseq_polya <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim_isoseq_polya>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim_isoseq_polya/meta.yaml>`_

   


.. conda:package:: trim_isoseq_polya

   |downloads_trim_isoseq_polya| |docker_trim_isoseq_polya|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trim_isoseq_polya

   and update with::

      conda update trim_isoseq_polya

   or use the docker container::

      docker pull quay.io/biocontainers/trim_isoseq_polya:<tag>

   (see `trim_isoseq_polya/tags`_ for valid values for ``<tag>``)


.. |downloads_trim_isoseq_polya| image:: https://img.shields.io/conda/dn/bioconda/trim_isoseq_polya.svg?style=flat
   :target: https://anaconda.org/bioconda/trim_isoseq_polya
   :alt:   (downloads)
.. |docker_trim_isoseq_polya| image:: https://quay.io/repository/biocontainers/trim_isoseq_polya/status
   :target: https://quay.io/repository/biocontainers/trim_isoseq_polya
.. _`trim_isoseq_polya/tags`: https://quay.io/repository/biocontainers/trim_isoseq_polya?tab=tags


.. raw:: html

    <script>
        var package = "trim_isoseq_polya";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trim_isoseq_polya/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trim_isoseq_polya/README.html