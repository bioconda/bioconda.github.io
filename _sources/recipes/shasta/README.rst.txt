:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shasta'
.. highlight: bash

shasta
======

.. conda:recipe:: shasta
   :replaces_section_title:
   :noindex:

   De novo assembly from Oxford Nanopore reads.

   :homepage: https://github.com/paoloshasta/shasta
   :documentation: https://paoloshasta.github.io/shasta/
   
   :license: MIT / MIT
   :recipe: /`shasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shasta/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1038/s41587-020-0503-6`

   


.. conda:package:: shasta

   |downloads_shasta| |docker_shasta|

   :versions:
      
      

      ``0.11.1-2``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.8.0-0``,  ``0.6.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libpng: 
   :depends libstdcxx-ng: ``>=12``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shasta

   and update with::

      conda update shasta

   or use the docker container::

      docker pull quay.io/biocontainers/shasta:<tag>

   (see `shasta/tags`_ for valid values for ``<tag>``)


.. |downloads_shasta| image:: https://img.shields.io/conda/dn/bioconda/shasta.svg?style=flat
   :target: https://anaconda.org/bioconda/shasta
   :alt:   (downloads)
.. |docker_shasta| image:: https://quay.io/repository/biocontainers/shasta/status
   :target: https://quay.io/repository/biocontainers/shasta
.. _`shasta/tags`: https://quay.io/repository/biocontainers/shasta?tab=tags


.. raw:: html

    <script>
        var package = "shasta";
        var versions = ["0.11.1","0.11.1","0.11.1","0.8.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shasta/README.html