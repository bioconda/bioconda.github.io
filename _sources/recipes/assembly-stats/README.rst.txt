:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assembly-stats'
.. highlight: bash

assembly-stats
==============

.. conda:recipe:: assembly-stats
   :replaces_section_title:
   :noindex:

   Get assembly statistics from FASTA and FASTQ files

   :homepage: https://github.com/sanger-pathogens/assembly-stats
   :license: GPL-3.0
   :recipe: /`assembly-stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly-stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly-stats/meta.yaml>`_

   


.. conda:package:: assembly-stats

   |downloads_assembly-stats| |docker_assembly-stats|

   :versions:
      
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install assembly-stats

   and update with::

      conda update assembly-stats

   or use the docker container::

      docker pull quay.io/biocontainers/assembly-stats:<tag>

   (see `assembly-stats/tags`_ for valid values for ``<tag>``)


.. |downloads_assembly-stats| image:: https://img.shields.io/conda/dn/bioconda/assembly-stats.svg?style=flat
   :target: https://anaconda.org/bioconda/assembly-stats
   :alt:   (downloads)
.. |docker_assembly-stats| image:: https://quay.io/repository/biocontainers/assembly-stats/status
   :target: https://quay.io/repository/biocontainers/assembly-stats
.. _`assembly-stats/tags`: https://quay.io/repository/biocontainers/assembly-stats?tab=tags


.. raw:: html

    <script>
        var package = "assembly-stats";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assembly-stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assembly-stats/README.html