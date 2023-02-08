:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-qc'
.. highlight: bash

bactopia-qc
===========

.. conda:recipe:: bactopia-qc
   :replaces_section_title:
   :noindex:

   The methods used in Bactopia for read QC

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia-qc/
   :license: MIT
   :recipe: /`bactopia-qc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-qc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-qc/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia-qc

   |downloads_bactopia-qc| |docker_bactopia-qc|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bbmap: ``>=39.01``
   :depends biopython: ``1.77.*``
   :depends coreutils: 
   :depends fastp: ``>=0.23.2``
   :depends fastq-scan: ``>=1.0.1``
   :depends fastqc: ``>=0.11.9``
   :depends gsl: ``2.6.*``
   :depends lighter: ``>=1.1.2``
   :depends nanoplot: ``>=1.40.2``
   :depends nanoq: ``>=0.9.0``
   :depends pigz: 
   :depends porechop: ``>=0.2.4``
   :depends python: ``>=3.6,<3.11``
   :depends rasusa: ``>=0.7.0``
   :depends rename: 
   :depends sed: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bactopia-qc

   and update with::

      conda update bactopia-qc

   or use the docker container::

      docker pull quay.io/biocontainers/bactopia-qc:<tag>

   (see `bactopia-qc/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia-qc| image:: https://img.shields.io/conda/dn/bioconda/bactopia-qc.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-qc
   :alt:   (downloads)
.. |docker_bactopia-qc| image:: https://quay.io/repository/biocontainers/bactopia-qc/status
   :target: https://quay.io/repository/biocontainers/bactopia-qc
.. _`bactopia-qc/tags`: https://quay.io/repository/biocontainers/bactopia-qc?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-qc";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-qc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-qc/README.html