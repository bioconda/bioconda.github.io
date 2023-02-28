:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telseq'
.. highlight: bash

telseq
======

.. conda:recipe:: telseq
   :replaces_section_title:
   :noindex:

   A software for calculating telomere length

   :homepage: https://github.com/zd1/telseq
   :license: GPL-3
   :recipe: /`telseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq/meta.yaml>`_

   


.. conda:package:: telseq

   |downloads_telseq| |docker_telseq|

   :versions:
      
      

      ``0.0.2-5``,  ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-2``,  ``0.0.2-1``,  ``0.0.2-0``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install telseq

   and update with::

      conda update telseq

   or use the docker container::

      docker pull quay.io/biocontainers/telseq:<tag>

   (see `telseq/tags`_ for valid values for ``<tag>``)


.. |downloads_telseq| image:: https://img.shields.io/conda/dn/bioconda/telseq.svg?style=flat
   :target: https://anaconda.org/bioconda/telseq
   :alt:   (downloads)
.. |docker_telseq| image:: https://quay.io/repository/biocontainers/telseq/status
   :target: https://quay.io/repository/biocontainers/telseq
.. _`telseq/tags`: https://quay.io/repository/biocontainers/telseq?tab=tags


.. raw:: html

    <script>
        var package = "telseq";
        var versions = ["0.0.2","0.0.2","0.0.2","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telseq/README.html