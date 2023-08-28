:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verkko'
.. highlight: bash

verkko
======

.. conda:recipe:: verkko
   :replaces_section_title:
   :noindex:

   Assembler for hybrid combinations of long reads

   :homepage: https://github.com/marbl/verkko
   :license: CC0
   :recipe: /`verkko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verkko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verkko/meta.yaml>`_

   


.. conda:package:: verkko

   |downloads_verkko| |docker_verkko|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.4-0</code>,  <code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2-0</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.4-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends biopython: 
   :depends bwa: ``>=0.7.17``
   :depends findutils: ``>=4.6.0``
   :depends graphaligner: ``>=1.0.17b``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends mashmap: ``>=3.0.6``
   :depends mbg: ``>=1.0.15``
   :depends networkx: ``>=2.6.3``
   :depends parasail-python: ``>=1.3.3``
   :depends perl: ``>=5.6``
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.17``
   :depends snakemake-minimal: ``>=7.8.0``
   :depends winnowmap: ``>=2.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install verkko

   and update with::

      mamba update verkko

  To create a new environment, run::

      mamba create --name myenvname verkko

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/verkko:<tag>

   (see `verkko/tags`_ for valid values for ``<tag>``)


.. |downloads_verkko| image:: https://img.shields.io/conda/dn/bioconda/verkko.svg?style=flat
   :target: https://anaconda.org/bioconda/verkko
   :alt:   (downloads)
.. |docker_verkko| image:: https://quay.io/repository/biocontainers/verkko/status
   :target: https://quay.io/repository/biocontainers/verkko
.. _`verkko/tags`: https://quay.io/repository/biocontainers/verkko?tab=tags


.. raw:: html

    <script>
        var package = "verkko";
        var versions = ["1.4.1","1.4","1.3.1","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verkko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verkko/README.html