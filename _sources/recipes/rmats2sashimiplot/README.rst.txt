:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats2sashimiplot'
.. highlight: bash

rmats2sashimiplot
=================

.. conda:recipe:: rmats2sashimiplot
   :replaces_section_title:
   :noindex:

   rmats2sashimiplot

   :homepage: https://github.com/Xinglab/rmats2sashimiplot
   :license: GPL2 / GNU General Public v2 (GPLv2)
   :recipe: /`rmats2sashimiplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats2sashimiplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats2sashimiplot/meta.yaml>`_

   


.. conda:package:: rmats2sashimiplot

   |downloads_rmats2sashimiplot| |docker_rmats2sashimiplot|

   :versions:
      
      

      ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-0``,  ``2.0.0-0``

      

   
   :depends bedtools: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmats2sashimiplot

   and update with::

      conda update rmats2sashimiplot

   or use the docker container::

      docker pull quay.io/biocontainers/rmats2sashimiplot:<tag>

   (see `rmats2sashimiplot/tags`_ for valid values for ``<tag>``)


.. |downloads_rmats2sashimiplot| image:: https://img.shields.io/conda/dn/bioconda/rmats2sashimiplot.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats2sashimiplot
   :alt:   (downloads)
.. |docker_rmats2sashimiplot| image:: https://quay.io/repository/biocontainers/rmats2sashimiplot/status
   :target: https://quay.io/repository/biocontainers/rmats2sashimiplot
.. _`rmats2sashimiplot/tags`: https://quay.io/repository/biocontainers/rmats2sashimiplot?tab=tags


.. raw:: html

    <script>
        var package = "rmats2sashimiplot";
        var versions = ["2.0.4","2.0.4","2.0.4","2.0.3","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats2sashimiplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats2sashimiplot/README.html