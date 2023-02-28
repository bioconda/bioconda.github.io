:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sctagger'
.. highlight: bash

sctagger
========

.. conda:recipe:: sctagger
   :replaces_section_title:
   :noindex:

   Fast and accurate matching of cellular barcodes across short\- and long\-reads of single\-cell RNA\-seq experiments

   :homepage: https://github.com/vpc-ccg/sctagger
   :license: MIT
   :recipe: /`sctagger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sctagger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sctagger/meta.yaml>`_

   


.. conda:package:: sctagger

   |downloads_sctagger| |docker_sctagger|

   :versions:
      
      

      ``1.1-0``,  ``1.0.1-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.16``
   :depends pandas: 
   :depends pyahocorasick: 
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.8``
   :depends python-edlib: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sctagger

   and update with::

      conda update sctagger

   or use the docker container::

      docker pull quay.io/biocontainers/sctagger:<tag>

   (see `sctagger/tags`_ for valid values for ``<tag>``)


.. |downloads_sctagger| image:: https://img.shields.io/conda/dn/bioconda/sctagger.svg?style=flat
   :target: https://anaconda.org/bioconda/sctagger
   :alt:   (downloads)
.. |docker_sctagger| image:: https://quay.io/repository/biocontainers/sctagger/status
   :target: https://quay.io/repository/biocontainers/sctagger
.. _`sctagger/tags`: https://quay.io/repository/biocontainers/sctagger?tab=tags


.. raw:: html

    <script>
        var package = "sctagger";
        var versions = ["1.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sctagger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sctagger/README.html