:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genrich'
.. highlight: bash

genrich
=======

.. conda:recipe:: genrich
   :replaces_section_title:
   :noindex:

   Detecting sites of genomic enrichment.

   :homepage: https://github.com/jsh58/Genrich
   :license: MIT
   :recipe: /`genrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genrich/meta.yaml>`_

   


.. conda:package:: genrich

   |downloads_genrich| |docker_genrich|

   :versions:
      
      

      ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6-0``,  ``0.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genrich

   and update with::

      conda update genrich

   or use the docker container::

      docker pull quay.io/biocontainers/genrich:<tag>

   (see `genrich/tags`_ for valid values for ``<tag>``)


.. |downloads_genrich| image:: https://img.shields.io/conda/dn/bioconda/genrich.svg?style=flat
   :target: https://anaconda.org/bioconda/genrich
   :alt:   (downloads)
.. |docker_genrich| image:: https://quay.io/repository/biocontainers/genrich/status
   :target: https://quay.io/repository/biocontainers/genrich
.. _`genrich/tags`: https://quay.io/repository/biocontainers/genrich?tab=tags


.. raw:: html

    <script>
        var package = "genrich";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genrich/README.html