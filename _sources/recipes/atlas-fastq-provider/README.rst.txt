:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas-fastq-provider'
.. highlight: bash

atlas-fastq-provider
====================

.. conda:recipe:: atlas-fastq-provider
   :replaces_section_title:
   :noindex:

   A package to provide FASTQs via download or file system linking.

   :homepage: https://github.com/ebi-gene-expression-group/atlas-fastq-provider
   :license: GPL3 / GPL-3
   :recipe: /`atlas-fastq-provider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-fastq-provider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-fastq-provider/meta.yaml>`_

   


.. conda:package:: atlas-fastq-provider

   |downloads_atlas-fastq-provider| |docker_atlas-fastq-provider|

   :versions:
      
      

      ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends bash: 
   :depends coreutils: 
   :depends fastq_utils: 
   :depends grep: 
   :depends sra-tools: ``2.11.0.*``
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install atlas-fastq-provider

   and update with::

      conda update atlas-fastq-provider

   or use the docker container::

      docker pull quay.io/biocontainers/atlas-fastq-provider:<tag>

   (see `atlas-fastq-provider/tags`_ for valid values for ``<tag>``)


.. |downloads_atlas-fastq-provider| image:: https://img.shields.io/conda/dn/bioconda/atlas-fastq-provider.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas-fastq-provider
   :alt:   (downloads)
.. |docker_atlas-fastq-provider| image:: https://quay.io/repository/biocontainers/atlas-fastq-provider/status
   :target: https://quay.io/repository/biocontainers/atlas-fastq-provider
.. _`atlas-fastq-provider/tags`: https://quay.io/repository/biocontainers/atlas-fastq-provider?tab=tags


.. raw:: html

    <script>
        var package = "atlas-fastq-provider";
        var versions = ["0.4.6","0.4.5","0.4.4","0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas-fastq-provider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas-fastq-provider/README.html