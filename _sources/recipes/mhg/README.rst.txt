:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhg'
.. highlight: bash

mhg
===

.. conda:recipe:: mhg
   :replaces_section_title:
   :noindex:

   MHG is an annotation\-free graph\-based tool to merge and partition homologous groups.

   :homepage: https://github.com/NakhlehLab/Maximal-Homologous-Groups
   :license: MIT
   :recipe: /`mhg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhg/meta.yaml>`_

   


.. conda:package:: mhg

   |downloads_mhg| |docker_mhg|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends blast: 
   :depends networkx: 
   :depends numpy: ``>=1.11``
   :depends pandas: ``>=1.1.3``
   :depends python: ``>=3.6,<3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mhg

   and update with::

      conda update mhg

   or use the docker container::

      docker pull quay.io/biocontainers/mhg:<tag>

   (see `mhg/tags`_ for valid values for ``<tag>``)


.. |downloads_mhg| image:: https://img.shields.io/conda/dn/bioconda/mhg.svg?style=flat
   :target: https://anaconda.org/bioconda/mhg
   :alt:   (downloads)
.. |docker_mhg| image:: https://quay.io/repository/biocontainers/mhg/status
   :target: https://quay.io/repository/biocontainers/mhg
.. _`mhg/tags`: https://quay.io/repository/biocontainers/mhg?tab=tags


.. raw:: html

    <script>
        var package = "mhg";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhg/README.html