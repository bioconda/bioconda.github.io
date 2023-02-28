:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hilinetojuicer'
.. highlight: bash

hilinetojuicer
==============

.. conda:recipe:: hilinetojuicer
   :replaces_section_title:
   :noindex:

   Convert HiLine SAM alignments to Juicer format

   :homepage: https://pypi.org/project/HiLineToJuicer/0.0.2/
   :license: MIT
   :recipe: /`hilinetojuicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilinetojuicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilinetojuicer/meta.yaml>`_

   


.. conda:package:: hilinetojuicer

   |downloads_hilinetojuicer| |docker_hilinetojuicer|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends click: ``>=8.0.1``
   :depends coreutils: ``>=8.32``
   :depends pysam: ``>=0.17.0``
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hilinetojuicer

   and update with::

      conda update hilinetojuicer

   or use the docker container::

      docker pull quay.io/biocontainers/hilinetojuicer:<tag>

   (see `hilinetojuicer/tags`_ for valid values for ``<tag>``)


.. |downloads_hilinetojuicer| image:: https://img.shields.io/conda/dn/bioconda/hilinetojuicer.svg?style=flat
   :target: https://anaconda.org/bioconda/hilinetojuicer
   :alt:   (downloads)
.. |docker_hilinetojuicer| image:: https://quay.io/repository/biocontainers/hilinetojuicer/status
   :target: https://quay.io/repository/biocontainers/hilinetojuicer
.. _`hilinetojuicer/tags`: https://quay.io/repository/biocontainers/hilinetojuicer?tab=tags


.. raw:: html

    <script>
        var package = "hilinetojuicer";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hilinetojuicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hilinetojuicer/README.html