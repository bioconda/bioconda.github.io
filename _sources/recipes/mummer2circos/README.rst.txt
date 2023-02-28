:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer2circos'
.. highlight: bash

mummer2circos
=============

.. conda:recipe:: mummer2circos
   :replaces_section_title:
   :noindex:

   Circular bacterial genome plots based on BLAST or NUCMER\/PROMER alignments

   :homepage: https://github.com/metagenlab/mummer2circos
   :license: MIT
   :recipe: /`mummer2circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer2circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer2circos/meta.yaml>`_

   


.. conda:package:: mummer2circos

   |downloads_mummer2circos| |docker_mummer2circos|

   :versions:
      
      

      ``1.4.2-0``

      

   
   :depends biopython: ``1.72.*``
   :depends blast: 
   :depends circos: ``0.69.8 0``
   :depends libiconv: 
   :depends libwebp: ``0.5.*``
   :depends matplotlib-base: 
   :depends mummer: 
   :depends pandas: 
   :depends perl-math-bezier: ``0.01 pl526_1``
   :depends perl-math-round: ``0.07 pl526_1``
   :depends perl-math-vecstat: ``0.08 pl526_1``
   :depends perl-set-intspan: ``1.19 pl526_1``
   :depends perl-statistics-basic: ``1.6611 pl526_2``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mummer2circos

   and update with::

      conda update mummer2circos

   or use the docker container::

      docker pull quay.io/biocontainers/mummer2circos:<tag>

   (see `mummer2circos/tags`_ for valid values for ``<tag>``)


.. |downloads_mummer2circos| image:: https://img.shields.io/conda/dn/bioconda/mummer2circos.svg?style=flat
   :target: https://anaconda.org/bioconda/mummer2circos
   :alt:   (downloads)
.. |docker_mummer2circos| image:: https://quay.io/repository/biocontainers/mummer2circos/status
   :target: https://quay.io/repository/biocontainers/mummer2circos
.. _`mummer2circos/tags`: https://quay.io/repository/biocontainers/mummer2circos?tab=tags


.. raw:: html

    <script>
        var package = "mummer2circos";
        var versions = ["1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer2circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer2circos/README.html