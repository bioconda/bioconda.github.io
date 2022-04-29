:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa-meme'
.. highlight: bash

bwa-meme
========

.. conda:recipe:: bwa-meme
   :replaces_section_title:
   :noindex:

   Faster BWA\-MEM2 using learned\-index

   :homepage: https://github.com/kaist-ina/BWA-MEME
   :license: MIT
   :recipe: /`bwa-meme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-meme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-meme/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac137`

   


.. conda:package:: bwa-meme

   |downloads_bwa-meme| |docker_bwa-meme|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwa-meme

   and update with::

      conda update bwa-meme

   or use the docker container::

      docker pull quay.io/biocontainers/bwa-meme:<tag>

   (see `bwa-meme/tags`_ for valid values for ``<tag>``)


.. |downloads_bwa-meme| image:: https://img.shields.io/conda/dn/bioconda/bwa-meme.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa-meme
   :alt:   (downloads)
.. |docker_bwa-meme| image:: https://quay.io/repository/biocontainers/bwa-meme/status
   :target: https://quay.io/repository/biocontainers/bwa-meme
.. _`bwa-meme/tags`: https://quay.io/repository/biocontainers/bwa-meme?tab=tags


.. raw:: html

    <script>
        var package = "bwa-meme";
        var versions = ["1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa-meme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa-meme/README.html