:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcta'
.. highlight: bash

gcta
====

.. conda:recipe:: gcta
   :replaces_section_title:
   :noindex:

   GCTA \(Genome\-wide Complex Trait Analysis\) estimates the proportion of phenotypic variance explained by all genome\-wide SNPs for complex traits.

   :homepage: https://yanglab.westlake.edu.cn/software/gcta
   :license: GPL-3.0-only
   :recipe: /`gcta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcta/meta.yaml>`_
   :links: biotools: :biotools:`gcta`, doi: :doi:`10.1016/j.ajhg.2010.11.011`

   


.. conda:package:: gcta

   |downloads_gcta| |docker_gcta|

   :versions:
      
      

      ``1.94.1-0``,  ``1.93.2beta-1``,  ``1.93.2beta-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gcta

   and update with::

      conda update gcta

   or use the docker container::

      docker pull quay.io/biocontainers/gcta:<tag>

   (see `gcta/tags`_ for valid values for ``<tag>``)


.. |downloads_gcta| image:: https://img.shields.io/conda/dn/bioconda/gcta.svg?style=flat
   :target: https://anaconda.org/bioconda/gcta
   :alt:   (downloads)
.. |docker_gcta| image:: https://quay.io/repository/biocontainers/gcta/status
   :target: https://quay.io/repository/biocontainers/gcta
.. _`gcta/tags`: https://quay.io/repository/biocontainers/gcta?tab=tags


.. raw:: html

    <script>
        var package = "gcta";
        var versions = ["1.94.1","1.93.2beta","1.93.2beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcta/README.html