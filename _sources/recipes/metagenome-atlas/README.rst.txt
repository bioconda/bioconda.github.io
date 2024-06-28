:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagenome-atlas'
.. highlight: bash

metagenome-atlas
================

.. conda:recipe:: metagenome-atlas
   :replaces_section_title:
   :noindex:

   ATLAS \- Three commands to start analysing your metagenome data

   :homepage: https://github.com/metagenome-atlas
   :documentation: https://metagenome-atlas.rtfd.io
   
   :developer docs: https://github.com/metagenome-atlas/atlas
   :license: BSD / BSD-3-Clause
   :recipe: /`metagenome-atlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenome-atlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenome-atlas/meta.yaml>`_
   :links: doi: :doi:`10.1101/737528`

   Atlas is a easy to use metagenomic pipeline
   \# Quick Start

   Three commands to start analysing your metagenome data\:
   \`\`\`
       mamba install \-c bioconda \-c conda\-forge metagenome\-atlas
       atlas init \-\-db\-dir databases path\/to\/fastq\/files
       atlas run
   \`\`\`
   All databases and dependencies are installed on the fly in the directory \`db\-dir\`.
   You want to run these three commands on the example\_data on the GitHub repo.
   If you have more time\, then we recommend you configure atlas according to your needs.
     \- check the \`samples.tsv\`
     \- edit the \`config.yaml\`
     \- run atlas on any cluster system
   For more details see documentation.



.. conda:package:: metagenome-atlas

   |downloads_metagenome-atlas| |docker_metagenome-atlas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.1-0</code>,  <code>2.18.0-0</code>,  <code>2.17.2-0</code>,  <code>2.17.1-0</code>,  <code>2.17.0-0</code>,  <code>2.16.3-0</code>,  <code>2.16.2-0</code>,  <code>2.16.1-0</code>,  <code>2.15.2-0</code>,  </span></summary>
      

      ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.2-0``,  ``2.17.1-0``,  ``2.17.0-0``,  ``2.16.3-0``,  ``2.16.2-0``,  ``2.16.1-0``,  ``2.15.2-0``,  ``2.15.1-0``,  ``2.15.0-0``,  ``2.14.3-0``,  ``2.14.2-0``,  ``2.14.0-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6a4-0``,  ``2.6a2-0``,  ``2.6a1-0``,  ``2.5.0-0``,  ``2.4.5-0``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.beta2-0``,  ``2.2.0-0``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.1-0``,  ``2.0.6-1``,  ``2.0.5-1``,  ``2.0.4-1``,  ``2.0.3-1``,  ``2.0.1-1``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: ``>=39.01,<40``
   :depends click: ``>=7``
   :depends cookiecutter: 
   :depends graphviz: 
   :depends mamba: 
   :depends networkx: 
   :depends numpy: ``1.21.*``
   :depends pandas: ``>=1.2,<1.5``
   :depends pathlib: 
   :depends pyarrow: ``>=8``
   :depends pygments: 
   :depends python: ``>=3.8,<3.11``
   :depends ruamel.yaml: ``>=0.17``
   :depends snakemake-minimal: ``>=7.18.1,<7.26``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metagenome-atlas

   and update with::

      mamba update metagenome-atlas

  To create a new environment, run::

      mamba create --name myenvname metagenome-atlas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metagenome-atlas:<tag>

   (see `metagenome-atlas/tags`_ for valid values for ``<tag>``)


.. |downloads_metagenome-atlas| image:: https://img.shields.io/conda/dn/bioconda/metagenome-atlas.svg?style=flat
   :target: https://anaconda.org/bioconda/metagenome-atlas
   :alt:   (downloads)
.. |docker_metagenome-atlas| image:: https://quay.io/repository/biocontainers/metagenome-atlas/status
   :target: https://quay.io/repository/biocontainers/metagenome-atlas
.. _`metagenome-atlas/tags`: https://quay.io/repository/biocontainers/metagenome-atlas?tab=tags


.. raw:: html

    <script>
        var package = "metagenome-atlas";
        var versions = ["2.18.1","2.18.0","2.17.2","2.17.1","2.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagenome-atlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagenome-atlas/README.html