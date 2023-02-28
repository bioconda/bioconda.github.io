:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dirseq'
.. highlight: bash

dirseq
======

.. conda:recipe:: dirseq
   :replaces_section_title:
   :noindex:

   Work out whether RNAseq reads in general agree with the direction of the gene predicted.

   :homepage: https://github.com/wwood/dirseq
   :license: MIT / MIT
   :recipe: /`dirseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dirseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dirseq/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41586-018-0338-1`

   


.. conda:package:: dirseq

   |downloads_dirseq| |docker_dirseq|

   :versions:
      
      

      ``0.4.3-0``

      

   
   :depends bedtools: 
   :depends ruby: ``2.4.*``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dirseq

   and update with::

      conda update dirseq

   or use the docker container::

      docker pull quay.io/biocontainers/dirseq:<tag>

   (see `dirseq/tags`_ for valid values for ``<tag>``)


.. |downloads_dirseq| image:: https://img.shields.io/conda/dn/bioconda/dirseq.svg?style=flat
   :target: https://anaconda.org/bioconda/dirseq
   :alt:   (downloads)
.. |docker_dirseq| image:: https://quay.io/repository/biocontainers/dirseq/status
   :target: https://quay.io/repository/biocontainers/dirseq
.. _`dirseq/tags`: https://quay.io/repository/biocontainers/dirseq?tab=tags


.. raw:: html

    <script>
        var package = "dirseq";
        var versions = ["0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dirseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dirseq/README.html