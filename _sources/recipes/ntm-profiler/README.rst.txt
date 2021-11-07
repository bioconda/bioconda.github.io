:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntm-profiler'
.. highlight: bash

ntm-profiler
============

.. conda:recipe:: ntm-profiler
   :replaces_section_title:
   :noindex:

   Profiling tool for NTM to detect species from WGS data

   :homepage: https://github.com/jodyphelan/NTM-Profiler
   :license: GPL3
   :recipe: /`ntm-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntm-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntm-profiler/meta.yaml>`_

   


.. conda:package:: ntm-profiler

   |downloads_ntm-profiler| |docker_ntm-profiler|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends dsk: 
   :depends python: ``>=3.6``
   :depends tb-profiler: ``>=4.0.1``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ntm-profiler

   and update with::

      conda update ntm-profiler

   or use the docker container::

      docker pull quay.io/biocontainers/ntm-profiler:<tag>

   (see `ntm-profiler/tags`_ for valid values for ``<tag>``)


.. |downloads_ntm-profiler| image:: https://img.shields.io/conda/dn/bioconda/ntm-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/ntm-profiler
   :alt:   (downloads)
.. |docker_ntm-profiler| image:: https://quay.io/repository/biocontainers/ntm-profiler/status
   :target: https://quay.io/repository/biocontainers/ntm-profiler
.. _`ntm-profiler/tags`: https://quay.io/repository/biocontainers/ntm-profiler?tab=tags


.. raw:: html

    <script>
        var package = "ntm-profiler";
        var versions = ["0.1.0","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntm-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntm-profiler/README.html