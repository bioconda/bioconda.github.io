:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bakta'
.. highlight: bash

bakta
=====

.. conda:recipe:: bakta
   :replaces_section_title:
   :noindex:

   Rapid \& standardized annotation of bacterial genomes\, MAGs \& plasmids.

   :homepage: https://github.com/oschwengers/bakta
   :documentation: https://github.com/oschwengers/bakta/blob/v1.12.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bakta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakta/meta.yaml>`_
   :links: biotools: :biotools:`bakta`, usegalaxy-eu: :usegalaxy-eu:`bakta`, doi: :doi:`10.1099/mgen.0.000685`, doi: :doi:`10.5281/zenodo.4247252`

   


.. conda:package:: bakta

   |downloads_bakta| |docker_bakta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.11.4-0</code>,  <code>1.11.3-0</code>,  <code>1.11.2-0</code>,  <code>1.11.1-0</code>,  <code>1.11.0-0</code>,  <code>1.10.4-1</code>,  <code>1.10.4-0</code>,  <code>1.10.3-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.11.4-0``,  ``1.11.3-0``,  ``1.11.2-0``,  ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.4-1``,  ``1.10.4-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends alive-progress: ``3.0.1``
   :depends aragorn: ``>=1.2.41``
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.17.0``
   :depends diamond: ``>=2.1.21``
   :depends infernal: ``>=1.1.5``
   :depends ncbi-amrfinderplus: ``>=4.2.7``
   :depends piler-cr: 
   :depends pycirclize: ``>=1.7.0``
   :depends pyhmmer: ``>=0.12.0``
   :depends pyrodigal: ``>=3.7.0``
   :depends python: ``>=3.9,<3.14``
   :depends pyyaml: ``>=6.0``
   :depends requests: ``>=2.25.1``
   :depends trnascan-se: ``>=2.0.12``
   :depends xopen: ``>=1.5.0``
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

      mamba install bakta

   and update with::

      mamba update bakta

  To create a new environment, run::

      mamba create --name myenvname bakta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bakta:<tag>

   (see `bakta/tags`_ for valid values for ``<tag>``)


.. |downloads_bakta| image:: https://img.shields.io/conda/dn/bioconda/bakta.svg?style=flat
   :target: https://anaconda.org/bioconda/bakta
   :alt:   (downloads)
.. |docker_bakta| image:: https://quay.io/repository/biocontainers/bakta/status
   :target: https://quay.io/repository/biocontainers/bakta
.. _`bakta/tags`: https://quay.io/repository/biocontainers/bakta?tab=tags


.. raw:: html

    <script>
        var package = "bakta";
        var versions = ["1.12.0","1.11.4","1.11.3","1.11.2","1.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bakta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bakta/README.html