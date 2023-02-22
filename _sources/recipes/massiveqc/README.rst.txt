:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'massiveqc'
.. highlight: bash

massiveqc
=========

.. conda:recipe:: massiveqc
   :replaces_section_title:
   :noindex:

   Tools for QC massive RNA\-seq samples

   :homepage: https://github.com/shimw6828/MassiveQC
   :license: MIT / MIT
   :recipe: /`massiveqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/massiveqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/massiveqc/meta.yaml>`_

   


.. conda:package:: massiveqc

   |downloads_massiveqc| |docker_massiveqc|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.7-0``,  ``0.0.5-0``

      

   
   :depends atropos: 
   :depends bamtools: 
   :depends fastparquet: 
   :depends fastq-screen: 
   :depends hisat2: 
   :depends more-itertools: 
   :depends numpy: 
   :depends pandas: ``>=1.3.2``
   :depends python: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends shap: 
   :depends subread: 
   :depends tqdm: 
   :depends xopen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install massiveqc

   and update with::

      conda update massiveqc

   or use the docker container::

      docker pull quay.io/biocontainers/massiveqc:<tag>

   (see `massiveqc/tags`_ for valid values for ``<tag>``)


.. |downloads_massiveqc| image:: https://img.shields.io/conda/dn/bioconda/massiveqc.svg?style=flat
   :target: https://anaconda.org/bioconda/massiveqc
   :alt:   (downloads)
.. |docker_massiveqc| image:: https://quay.io/repository/biocontainers/massiveqc/status
   :target: https://quay.io/repository/biocontainers/massiveqc
.. _`massiveqc/tags`: https://quay.io/repository/biocontainers/massiveqc?tab=tags


.. raw:: html

    <script>
        var package = "massiveqc";
        var versions = ["0.1.0","0.0.7","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/massiveqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/massiveqc/README.html