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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends cattrs: 
   :depends interval-binning: 
   :depends logzero: 
   :depends pysam: ``>=0.15.1``
   :depends python: ``>=3.5``
   :depends python-dateutil: 
   :depends snakemake-minimal: ``>=5.3.0``
   :depends tqdm: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install clinvar-tsv

   and update with::

      mamba update clinvar-tsv

  To create a new environment, run::

      mamba create --name myenvname clinvar-tsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.6.3","0.6.2","0.6.0","0.5.0","0.4.1"];
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