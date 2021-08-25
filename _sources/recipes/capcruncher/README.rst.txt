:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'capcruncher'
.. highlight: bash

capcruncher
===========

.. conda:recipe:: capcruncher
   :replaces_section_title:
   :noindex:

   An end\-to\-end solution for processing Capture\-C\, Tri\-C and Tiled\-C data.

   :homepage: https://github.com/sims-lab/CapCruncher.git
   :license: GPL-3.0
   :recipe: /`capcruncher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capcruncher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capcruncher/meta.yaml>`_

   


.. conda:package:: capcruncher

   |downloads_capcruncher| |docker_capcruncher|

   :versions:
      
      

      ``0.1.0a2-0``

      

   
   :depends apsw: 
   :depends bowtie2: 
   :depends cgatcore: ``>=0.6.7``
   :depends click: 
   :depends cooler: 
   :depends drmaa: 
   :depends fastqc: 
   :depends flash: 
   :depends gevent: 
   :depends iced: 
   :depends ipykernel: 
   :depends joblib: 
   :depends multiqc: 
   :depends natsort: 
   :depends pandas: ``>=1``
   :depends papermill: ``>=2.1.1``
   :depends paramiko: ``>=2.7.1``
   :depends plotly: ``>=4.8.0``
   :depends pybedtools: ``>=0.8.1``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.8``
   :depends python-xxhash: 
   :depends ruffus: 
   :depends samtools: 
   :depends seaborn: 
   :depends sqlalchemy: ``>=1.3.18``
   :depends trackhub: 
   :depends trim-galore: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-fatotwobit: 
   :depends ucsc-fetchchromsizes: 
   :depends ujson: 
   :depends xopen: ``>=0.7.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install capcruncher

   and update with::

      conda update capcruncher

   or use the docker container::

      docker pull quay.io/biocontainers/capcruncher:<tag>

   (see `capcruncher/tags`_ for valid values for ``<tag>``)


.. |downloads_capcruncher| image:: https://img.shields.io/conda/dn/bioconda/capcruncher.svg?style=flat
   :target: https://anaconda.org/bioconda/capcruncher
   :alt:   (downloads)
.. |docker_capcruncher| image:: https://quay.io/repository/biocontainers/capcruncher/status
   :target: https://quay.io/repository/biocontainers/capcruncher
.. _`capcruncher/tags`: https://quay.io/repository/biocontainers/capcruncher?tab=tags


.. raw:: html

    <script>
        var package = "capcruncher";
        var versions = ["0.1.0a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/capcruncher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/capcruncher/README.html