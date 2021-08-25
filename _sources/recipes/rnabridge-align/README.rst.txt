:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnabridge-align'
.. highlight: bash

rnabridge-align
===============

.. conda:recipe:: rnabridge-align
   :replaces_section_title:
   :noindex:

   A tool to construct the alignments of entire fragments given the alignments of paired\-end reads.

   :homepage: https://github.com/Shao-Group/rnabridge-align
   :license: BSD-3-Clause
   :recipe: /`rnabridge-align <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabridge-align>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabridge-align/meta.yaml>`_

   


.. conda:package:: rnabridge-align

   |downloads_rnabridge-align| |docker_rnabridge-align|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnabridge-align

   and update with::

      conda update rnabridge-align

   or use the docker container::

      docker pull quay.io/biocontainers/rnabridge-align:<tag>

   (see `rnabridge-align/tags`_ for valid values for ``<tag>``)


.. |downloads_rnabridge-align| image:: https://img.shields.io/conda/dn/bioconda/rnabridge-align.svg?style=flat
   :target: https://anaconda.org/bioconda/rnabridge-align
   :alt:   (downloads)
.. |docker_rnabridge-align| image:: https://quay.io/repository/biocontainers/rnabridge-align/status
   :target: https://quay.io/repository/biocontainers/rnabridge-align
.. _`rnabridge-align/tags`: https://quay.io/repository/biocontainers/rnabridge-align?tab=tags


.. raw:: html

    <script>
        var package = "rnabridge-align";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnabridge-align/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnabridge-align/README.html