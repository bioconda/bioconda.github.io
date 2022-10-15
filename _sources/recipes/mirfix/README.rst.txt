:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirfix'
.. highlight: bash

mirfix
======

.. conda:recipe:: mirfix
   :replaces_section_title:
   :noindex:

   MIRfix automatically curates miRNA datasets by improving alignments of their precursors\, the consistency of the annotation of mature miR and miR\* sequence\, and the phylogenetic coverage. MIRfix produces alignments that are comparable across families and sets the stage for improved homology search as well as quantitative analyses.

   :homepage: https://github.com/Bierinformatik/MIRfix
   :license: GPL / GPL-3.0
   :recipe: /`mirfix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirfix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirfix/meta.yaml>`_

   


.. conda:package:: mirfix

   |downloads_mirfix| |docker_mirfix|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.1-0``

      

   
   :depends biopython: ``1.78.*``
   :depends blast: ``2.11.0.*``
   :depends clustalw: ``2.1.*``
   :depends dialign2: ``2.2.1.*``
   :depends matplotlib-base: ``3.3.1.*``
   :depends numpy: ``1.19.1.*``
   :depends pyfaidx: ``0.7.1.*``
   :depends python: ``>=3``
   :depends tk: ``8.6.10.*``
   :depends viennarna: ``2.4.15.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirfix

   and update with::

      conda update mirfix

   or use the docker container::

      docker pull quay.io/biocontainers/mirfix:<tag>

   (see `mirfix/tags`_ for valid values for ``<tag>``)


.. |downloads_mirfix| image:: https://img.shields.io/conda/dn/bioconda/mirfix.svg?style=flat
   :target: https://anaconda.org/bioconda/mirfix
   :alt:   (downloads)
.. |docker_mirfix| image:: https://quay.io/repository/biocontainers/mirfix/status
   :target: https://quay.io/repository/biocontainers/mirfix
.. _`mirfix/tags`: https://quay.io/repository/biocontainers/mirfix?tab=tags


.. raw:: html

    <script>
        var package = "mirfix";
        var versions = ["2.1.0","2.0.1","2.0.0","2.0.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirfix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirfix/README.html