:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-smap'
.. highlight: bash

ngs-smap
========

.. conda:recipe:: ngs-smap
   :replaces_section_title:
   :noindex:

   SMAP is an analysis tool for stack\-based NGS read mapping

   :homepage: https://gitlab.com/truttink/smap
   :license: CC / CC BY-NC-SA 4.0
   :recipe: /`ngs-smap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-smap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-smap/meta.yaml>`_

   


.. conda:package:: ngs-smap

   |downloads_ngs-smap| |docker_ngs-smap|

   :versions:
      
      

      ``4.5.0-0``

      

   
   :depends colorlog: ``~=6.6.0``
   :depends matplotlib: ``~=3.5.1``
   :depends pandas: ``~=1.4.0``
   :depends pybedtools: ``~=0.9.0``
   :depends pysam: ``~=0.18.0``
   :depends python: ``>=3.8.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngs-smap

   and update with::

      conda update ngs-smap

   or use the docker container::

      docker pull quay.io/biocontainers/ngs-smap:<tag>

   (see `ngs-smap/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-smap| image:: https://img.shields.io/conda/dn/bioconda/ngs-smap.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-smap
   :alt:   (downloads)
.. |docker_ngs-smap| image:: https://quay.io/repository/biocontainers/ngs-smap/status
   :target: https://quay.io/repository/biocontainers/ngs-smap
.. _`ngs-smap/tags`: https://quay.io/repository/biocontainers/ngs-smap?tab=tags


.. raw:: html

    <script>
        var package = "ngs-smap";
        var versions = ["4.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-smap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-smap/README.html