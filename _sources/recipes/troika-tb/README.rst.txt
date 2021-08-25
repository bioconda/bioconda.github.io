:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'troika-tb'
.. highlight: bash

troika-tb
=========

.. conda:recipe:: troika-tb
   :replaces_section_title:
   :noindex:

   A pipeline implementing TB\-Profiler for batch detection and reporting of anti\-microbial resistance in TB for public health and clinical use.

   :homepage: https://github.com/kristyhoran/troika
   :license: GPL-3.0
   :recipe: /`troika-tb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/troika-tb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/troika-tb/meta.yaml>`_

   


.. conda:package:: troika-tb

   |downloads_troika-tb| |docker_troika-tb|

   :versions:
      
      

      ``0.0.5-0``

      

   
   :depends amply: 
   :depends appdirs: 
   :depends biopython: ``>=1.70``
   :depends chardet: 
   :depends configargparse: 
   :depends docutils: 
   :depends jinja2: 
   :depends markupsafe: 
   :depends nbformat: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: ``>=1.1.4``
   :depends pluggy: ``>=0.13.1``
   :depends psutil: 
   :depends pyparsing: ``>=2.4.7``
   :depends pytest: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends requests: 
   :depends setuptools-scm: 
   :depends sh: 
   :depends six: 
   :depends snakemake: ``>=5.9.1``
   :depends svgwrite: 
   :depends toml: 
   :depends urllib3: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install troika-tb

   and update with::

      conda update troika-tb

   or use the docker container::

      docker pull quay.io/biocontainers/troika-tb:<tag>

   (see `troika-tb/tags`_ for valid values for ``<tag>``)


.. |downloads_troika-tb| image:: https://img.shields.io/conda/dn/bioconda/troika-tb.svg?style=flat
   :target: https://anaconda.org/bioconda/troika-tb
   :alt:   (downloads)
.. |docker_troika-tb| image:: https://quay.io/repository/biocontainers/troika-tb/status
   :target: https://quay.io/repository/biocontainers/troika-tb
.. _`troika-tb/tags`: https://quay.io/repository/biocontainers/troika-tb?tab=tags


.. raw:: html

    <script>
        var package = "troika-tb";
        var versions = ["0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/troika-tb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/troika-tb/README.html