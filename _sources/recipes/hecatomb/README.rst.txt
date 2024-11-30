:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hecatomb'
.. highlight: bash

hecatomb
========

.. conda:recipe:: hecatomb
   :replaces_section_title:
   :noindex:

   Hecatomb\: and end\-to\-end platform for viral metagenomics

   :homepage: https://github.com/shandley/hecatomb
   :documentation: https://hecatomb.readthedocs.io/en/latest/
   
   :license: MIT
   :recipe: /`hecatomb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hecatomb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hecatomb/meta.yaml>`_

   Hecatomb accelerates viral metagenomics research by assembling contigs and accurately identifying viruses from a
   range of sequencing data types.



.. conda:package:: hecatomb

   |downloads_hecatomb| |docker_hecatomb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0.beta.5-0</code>,  <code>1.0.0.beta.4-0</code>,  <code>1.0.0.beta.3-0</code>,  </span></summary>
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0.beta.5-0``,  ``1.0.0.beta.4-0``,  ``1.0.0.beta.3-0``,  ``1.0.0.beta.2-1``,  ``1.0.0.beta.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=8.1.3``
   :depends metasnek: ``>=0.0.7``
   :depends pulp: ``<2.8``
   :depends python: ``>=3.9,<=3.12``
   :depends pyyaml: ``>=6.0``
   :depends snakemake: ``>=7.14.0,<8``
   :depends snaketool-utils: ``>=0.0.4``
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

      mamba install hecatomb

   and update with::

      mamba update hecatomb

  To create a new environment, run::

      mamba create --name myenvname hecatomb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hecatomb:<tag>

   (see `hecatomb/tags`_ for valid values for ``<tag>``)


.. |downloads_hecatomb| image:: https://img.shields.io/conda/dn/bioconda/hecatomb.svg?style=flat
   :target: https://anaconda.org/bioconda/hecatomb
   :alt:   (downloads)
.. |docker_hecatomb| image:: https://quay.io/repository/biocontainers/hecatomb/status
   :target: https://quay.io/repository/biocontainers/hecatomb
.. _`hecatomb/tags`: https://quay.io/repository/biocontainers/hecatomb?tab=tags


.. raw:: html

    <script>
        var package = "hecatomb";
        var versions = ["1.3.2","1.3.1","1.3.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hecatomb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hecatomb/README.html