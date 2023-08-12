:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-gather'
.. highlight: bash

bactopia-gather
===============

.. conda:recipe:: bactopia-gather
   :replaces_section_title:
   :noindex:

   The methods used in Bactopia to gather all samples into one place

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia-gather/
   :license: MIT
   :recipe: /`bactopia-gather <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-gather>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-gather/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia-gather

   |downloads_bactopia-gather| |docker_bactopia-gather|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends art: ``>=2016.06.05``
   :depends bbmap: ``>=39.01``
   :depends biopython: ``1.77.*``
   :depends coreutils: 
   :depends fastq-dl: ``>=2.0.4``
   :depends fastq-scan: ``>=1.0.1``
   :depends gsl: ``2.6.*``
   :depends mash: ``>=2.3``
   :depends ncbi-genome-download: ``>=0.3.3``
   :depends pigz: 
   :depends python: ``>=3.8,<3.11``
   :depends rename: 
   :depends sed: 
   :depends sra-tools: ``>=3.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bactopia-gather

   and update with::

      conda update bactopia-gather

   or use the docker container::

      docker pull quay.io/biocontainers/bactopia-gather:<tag>

   (see `bactopia-gather/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia-gather| image:: https://img.shields.io/conda/dn/bioconda/bactopia-gather.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-gather
   :alt:   (downloads)
.. |docker_bactopia-gather| image:: https://quay.io/repository/biocontainers/bactopia-gather/status
   :target: https://quay.io/repository/biocontainers/bactopia-gather
.. _`bactopia-gather/tags`: https://quay.io/repository/biocontainers/bactopia-gather?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-gather";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-gather/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-gather/README.html