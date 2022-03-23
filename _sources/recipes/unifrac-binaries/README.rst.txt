:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unifrac-binaries'
.. highlight: bash

unifrac-binaries
================

.. conda:recipe:: unifrac-binaries
   :replaces_section_title:
   :noindex:

   Fast phylogenetic diversity calculations

   :homepage: https://github.com/biocore/unifrac-binaries
   :license: BSD / BSD-3-Clause
   :recipe: /`unifrac-binaries <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac-binaries>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac-binaries/meta.yaml>`_

   UniFrac is a commonly phylogenetic diversity distance metric used in 
   microbiome research. The metric relates two microbiome samples together
   within the context of an evolutionary history\, and produces a distance
   that corresponds to how similar two samples by the amount of overlapping
   branch length. This package contains command line utilities and
   a shared library.



.. conda:package:: unifrac-binaries

   |downloads_unifrac-binaries| |docker_unifrac-binaries|

   :versions:
      
      

      ``1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapacke: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends lz4: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unifrac-binaries

   and update with::

      conda update unifrac-binaries

   or use the docker container::

      docker pull quay.io/biocontainers/unifrac-binaries:<tag>

   (see `unifrac-binaries/tags`_ for valid values for ``<tag>``)


.. |downloads_unifrac-binaries| image:: https://img.shields.io/conda/dn/bioconda/unifrac-binaries.svg?style=flat
   :target: https://anaconda.org/bioconda/unifrac-binaries
   :alt:   (downloads)
.. |docker_unifrac-binaries| image:: https://quay.io/repository/biocontainers/unifrac-binaries/status
   :target: https://quay.io/repository/biocontainers/unifrac-binaries
.. _`unifrac-binaries/tags`: https://quay.io/repository/biocontainers/unifrac-binaries?tab=tags


.. raw:: html

    <script>
        var package = "unifrac-binaries";
        var versions = ["1.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unifrac-binaries/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unifrac-binaries/README.html