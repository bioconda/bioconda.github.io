:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfarm'
.. highlight: bash

bioconductor-tfarm
==================

.. conda:recipe:: bioconductor-tfarm
   :replaces_section_title:
   :noindex:

   Transcription Factors Association Rules Miner

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/TFARM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfarm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfarm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfarm/meta.yaml>`_

   It searches for relevant associations of transcription factors with a transcription factor target\, in specific genomic regions. It also allows to evaluate the Importance Index distribution of transcription factors \(and combinations of transcription factors\) in association rules.


.. conda:package:: bioconductor-tfarm

   |downloads_bioconductor-tfarm| |docker_bioconductor-tfarm|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends r-arules: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-fields: 
   :depends r-gplots: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tfarm

   and update with::

      conda update bioconductor-tfarm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfarm:<tag>

   (see `bioconductor-tfarm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfarm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfarm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfarm
   :alt:   (downloads)
.. |docker_bioconductor-tfarm| image:: https://quay.io/repository/biocontainers/bioconductor-tfarm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfarm
.. _`bioconductor-tfarm/tags`: https://quay.io/repository/biocontainers/bioconductor-tfarm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfarm";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfarm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfarm/README.html