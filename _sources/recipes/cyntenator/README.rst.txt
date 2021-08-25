:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cyntenator'
.. highlight: bash

cyntenator
==========

.. conda:recipe:: cyntenator
   :replaces_section_title:
   :noindex:

   progressive gene order alignments

   :homepage: https://github.com/dieterich-lab/cyntenator
   :license: GPL
   :recipe: /`cyntenator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyntenator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyntenator/meta.yaml>`_

   Cyntenator identifies conserved syntenic blocks between multiple genomes. The program computes Smith\-Waterman alignments of sequences\, whereby the alphabet consists of all annotated genes and the scoring system is defined by protein sequence similarities and distances between species in a phylogenetic tree. The algorithm is an extension of the Syntenator partial order aligner\, described in Rödelsperger and Dieterich\, 2008.


.. conda:package:: cyntenator

   |downloads_cyntenator| |docker_cyntenator|

   :versions:
      
      

      ``0.0.r2326-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cyntenator

   and update with::

      conda update cyntenator

   or use the docker container::

      docker pull quay.io/biocontainers/cyntenator:<tag>

   (see `cyntenator/tags`_ for valid values for ``<tag>``)


.. |downloads_cyntenator| image:: https://img.shields.io/conda/dn/bioconda/cyntenator.svg?style=flat
   :target: https://anaconda.org/bioconda/cyntenator
   :alt:   (downloads)
.. |docker_cyntenator| image:: https://quay.io/repository/biocontainers/cyntenator/status
   :target: https://quay.io/repository/biocontainers/cyntenator
.. _`cyntenator/tags`: https://quay.io/repository/biocontainers/cyntenator?tab=tags


.. raw:: html

    <script>
        var package = "cyntenator";
        var versions = ["0.0.r2326"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cyntenator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cyntenator/README.html