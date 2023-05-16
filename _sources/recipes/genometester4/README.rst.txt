:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometester4'
.. highlight: bash

genometester4
=============

.. conda:recipe:: genometester4
   :replaces_section_title:
   :noindex:

   A toolkit for performing set operations \- union\, intersection and complement \- on k\-mer lists.

   :homepage: https://github.com/bioinfo-ut/GenomeTester4
   :license: GPL3
   :recipe: /`genometester4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometester4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometester4/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13742-015-0097-y`

   


.. conda:package:: genometester4

   |downloads_genometester4| |docker_genometester4|

   :versions:
      
      

      ``4.0-6``,  ``4.0-5``,  ``4.0-4``,  ``4.0-3``,  ``4.0-2``,  ``4.0-1``,  ``4.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genometester4

   and update with::

      conda update genometester4

   or use the docker container::

      docker pull quay.io/biocontainers/genometester4:<tag>

   (see `genometester4/tags`_ for valid values for ``<tag>``)


.. |downloads_genometester4| image:: https://img.shields.io/conda/dn/bioconda/genometester4.svg?style=flat
   :target: https://anaconda.org/bioconda/genometester4
   :alt:   (downloads)
.. |docker_genometester4| image:: https://quay.io/repository/biocontainers/genometester4/status
   :target: https://quay.io/repository/biocontainers/genometester4
.. _`genometester4/tags`: https://quay.io/repository/biocontainers/genometester4?tab=tags


.. raw:: html

    <script>
        var package = "genometester4";
        var versions = ["4.0","4.0","4.0","4.0","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometester4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometester4/README.html