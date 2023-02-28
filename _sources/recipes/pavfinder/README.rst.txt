:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pavfinder'
.. highlight: bash

pavfinder
=========

.. conda:recipe:: pavfinder
   :replaces_section_title:
   :noindex:

   PAVFinder is a Python package that detects structural variants from de novo assemblies.

   :homepage: https://github.com/bcgsc/pavfinder
   :license: GPL-3.0
   :recipe: /`pavfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pavfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pavfinder/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12920-018-0402-6`, doi: :doi:`10.1093/bioinformatics/btz902`

   


.. conda:package:: pavfinder

   |downloads_pavfinder| |docker_pavfinder|

   :versions:
      
      

      ``1.8.5-0``

      

   
   :depends bash: 
   :depends biobloomtools: 
   :depends biopython: 
   :depends blast: 
   :depends bwa: 
   :depends gmap: 
   :depends intspan: ``>=0.701``
   :depends make: 
   :depends pybedtools: ``>=0.6.9``
   :depends pysam: ``>=0.8.1``
   :depends python: ``>=3``
   :depends rnabloom: 
   :depends ruffus: 
   :depends samtools: 
   :depends transabyss: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pavfinder

   and update with::

      conda update pavfinder

   or use the docker container::

      docker pull quay.io/biocontainers/pavfinder:<tag>

   (see `pavfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_pavfinder| image:: https://img.shields.io/conda/dn/bioconda/pavfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/pavfinder
   :alt:   (downloads)
.. |docker_pavfinder| image:: https://quay.io/repository/biocontainers/pavfinder/status
   :target: https://quay.io/repository/biocontainers/pavfinder
.. _`pavfinder/tags`: https://quay.io/repository/biocontainers/pavfinder?tab=tags


.. raw:: html

    <script>
        var package = "pavfinder";
        var versions = ["1.8.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pavfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pavfinder/README.html