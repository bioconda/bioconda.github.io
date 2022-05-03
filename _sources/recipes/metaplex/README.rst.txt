:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaplex'
.. highlight: bash

metaplex
========

.. conda:recipe:: metaplex
   :replaces_section_title:
   :noindex:

   Read Processing and Quality Control Toolkit for Dual\-Indexed Metabarcoding

   :homepage: https://github.com/NGabry/MetaPlex
   :license: BSD-3-Clause
   :recipe: /`metaplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaplex/meta.yaml>`_

   


.. conda:package:: metaplex

   |downloads_metaplex| |docker_metaplex|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``,  ``0.2.0-0``

      

   
   :depends biom-format: 
   :depends biopython: 
   :depends cutadapt: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaplex

   and update with::

      conda update metaplex

   or use the docker container::

      docker pull quay.io/biocontainers/metaplex:<tag>

   (see `metaplex/tags`_ for valid values for ``<tag>``)


.. |downloads_metaplex| image:: https://img.shields.io/conda/dn/bioconda/metaplex.svg?style=flat
   :target: https://anaconda.org/bioconda/metaplex
   :alt:   (downloads)
.. |docker_metaplex| image:: https://quay.io/repository/biocontainers/metaplex/status
   :target: https://quay.io/repository/biocontainers/metaplex
.. _`metaplex/tags`: https://quay.io/repository/biocontainers/metaplex?tab=tags


.. raw:: html

    <script>
        var package = "metaplex";
        var versions = ["1.1.0","1.0.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaplex/README.html