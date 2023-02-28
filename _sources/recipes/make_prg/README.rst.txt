:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'make_prg'
.. highlight: bash

make_prg
========

.. conda:recipe:: make_prg
   :replaces_section_title:
   :noindex:

   A tool to create and update PRGs from a set of Multiple Sequence Alignments.

   :homepage: https://github.com/iqbal-lab-org/make_prg
   :license: MIT
   :recipe: /`make_prg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/make_prg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/make_prg/meta.yaml>`_

   


.. conda:package:: make_prg

   |downloads_make_prg| |docker_make_prg|

   :versions:
      
      

      ``0.4.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends biopython: ``1.79``
   :depends intervaltree: ``>=3.1.0,<4.0.0``
   :depends loguru: ``>=0.6.0,<0.7.0``
   :depends numpy: ``>=1.21.4,<2.0.0``
   :depends python: ``>=3.8,<=3.11``
   :depends scikit-learn: ``0.24.2``
   :depends setuptools: ``>=65,<66``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install make_prg

   and update with::

      conda update make_prg

   or use the docker container::

      docker pull quay.io/biocontainers/make_prg:<tag>

   (see `make_prg/tags`_ for valid values for ``<tag>``)


.. |downloads_make_prg| image:: https://img.shields.io/conda/dn/bioconda/make_prg.svg?style=flat
   :target: https://anaconda.org/bioconda/make_prg
   :alt:   (downloads)
.. |docker_make_prg| image:: https://quay.io/repository/biocontainers/make_prg/status
   :target: https://quay.io/repository/biocontainers/make_prg
.. _`make_prg/tags`: https://quay.io/repository/biocontainers/make_prg?tab=tags


.. raw:: html

    <script>
        var package = "make_prg";
        var versions = ["0.4.0","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/make_prg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/make_prg/README.html