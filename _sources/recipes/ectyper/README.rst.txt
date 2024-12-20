:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ectyper'
.. highlight: bash

ectyper
=======

.. conda:recipe:: ectyper
   :replaces_section_title:
   :noindex:

   ECtyper is a python program for serotyping E. coli genomes

   :homepage: https://github.com/phac-nml/ecoli_serotyping
   :license: Apache 2
   :recipe: /`ectyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ectyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ectyper/meta.yaml>`_

   


.. conda:package:: ectyper

   |downloads_ectyper| |docker_ectyper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-0</code>,  <code>0.5.4-2</code>,  <code>0.1-2</code>,  </span></summary>
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.5.4-2``,  ``0.1-2``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.8.*``
   :depends biopython: ``>=1.70.*``
   :depends blast: ``>=2.7.1.*``
   :depends bowtie2: ``>=2.3.*``
   :depends mash: ``>=2.0.*``
   :depends pandas: ``>=0.23.1.*``
   :depends pytest: ``>=3.5``
   :depends python: ``>=3.5``
   :depends requests: ``>=2.*.*``
   :depends samtools: ``>=1.8.*``
   :depends seqtk: ``>=1.2.*``
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

      mamba install ectyper

   and update with::

      mamba update ectyper

  To create a new environment, run::

      mamba create --name myenvname ectyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ectyper:<tag>

   (see `ectyper/tags`_ for valid values for ``<tag>``)


.. |downloads_ectyper| image:: https://img.shields.io/conda/dn/bioconda/ectyper.svg?style=flat
   :target: https://anaconda.org/bioconda/ectyper
   :alt:   (downloads)
.. |docker_ectyper| image:: https://quay.io/repository/biocontainers/ectyper/status
   :target: https://quay.io/repository/biocontainers/ectyper
.. _`ectyper/tags`: https://quay.io/repository/biocontainers/ectyper?tab=tags


.. raw:: html

    <script>
        var package = "ectyper";
        var versions = ["2.0.0","2.0.0","1.0.0","1.0.0","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ectyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ectyper/README.html