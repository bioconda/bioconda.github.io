:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pctgcdata'
.. highlight: bash

r-pctgcdata
===========

.. conda:recipe:: r-pctgcdata
   :replaces_section_title:
   :noindex:

   Provides GC percentage of a 1 kilobase window at a genomic position for different builds of human and mouse genomes.

   :homepage: https://github.com/mskcc/pctGCdata
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-pctgcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pctgcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pctgcdata/meta.yaml>`_

   


.. conda:package:: r-pctgcdata

   |downloads_r-pctgcdata| |docker_r-pctgcdata|

   :versions:
      
      

      ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pctgcdata

   and update with::

      conda update r-pctgcdata

   or use the docker container::

      docker pull quay.io/biocontainers/r-pctgcdata:<tag>

   (see `r-pctgcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pctgcdata| image:: https://img.shields.io/conda/dn/bioconda/r-pctgcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pctgcdata
   :alt:   (downloads)
.. |docker_r-pctgcdata| image:: https://quay.io/repository/biocontainers/r-pctgcdata/status
   :target: https://quay.io/repository/biocontainers/r-pctgcdata
.. _`r-pctgcdata/tags`: https://quay.io/repository/biocontainers/r-pctgcdata?tab=tags


.. raw:: html

    <script>
        var package = "r-pctgcdata";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pctgcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pctgcdata/README.html