:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinvar-tsv'
.. highlight: bash

clinvar-tsv
===========

.. conda:recipe:: clinvar-tsv
   :replaces_section_title:
   :noindex:

   A Snakemake\-based program to download ClinVar and convert to easy\-to\-use TSV files.

   :homepage: https://github.com/bihealth/clinvar-tsv
   :license: MIT
   :recipe: /`clinvar-tsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-tsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-tsv/meta.yaml>`_

   


.. conda:package:: clinvar-tsv

   |downloads_clinvar-tsv| |docker_clinvar-tsv|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends cattrs: 
   :depends interval-binning: 
   :depends logzero: 
   :depends pysam: ``>=0.15.1``
   :depends python: ``>=3.5``
   :depends python-dateutil: 
   :depends snakemake-minimal: ``>=5.3.0``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clinvar-tsv

   and update with::

      conda update clinvar-tsv

   or use the docker container::

      docker pull quay.io/biocontainers/clinvar-tsv:<tag>

   (see `clinvar-tsv/tags`_ for valid values for ``<tag>``)


.. |downloads_clinvar-tsv| image:: https://img.shields.io/conda/dn/bioconda/clinvar-tsv.svg?style=flat
   :target: https://anaconda.org/bioconda/clinvar-tsv
   :alt:   (downloads)
.. |docker_clinvar-tsv| image:: https://quay.io/repository/biocontainers/clinvar-tsv/status
   :target: https://quay.io/repository/biocontainers/clinvar-tsv
.. _`clinvar-tsv/tags`: https://quay.io/repository/biocontainers/clinvar-tsv?tab=tags


.. raw:: html

    <script>
        var package = "clinvar-tsv";
        var versions = ["0.6.0","0.5.0","0.4.1","0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinvar-tsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinvar-tsv/README.html