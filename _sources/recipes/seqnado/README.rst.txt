:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqnado'
.. highlight: bash

seqnado
=======

.. conda:recipe:: seqnado
   :replaces_section_title:
   :noindex:

   Pipelines for genomics analysis

   :homepage: https://alsmith151.github.io/SeqNado/
   :license: GPL-3.0-or-later
   :recipe: /`seqnado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqnado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqnado/meta.yaml>`_

   


.. conda:package:: seqnado

   |downloads_seqnado| |docker_seqnado|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.7-0</code>,  <code>0.6.6-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  </span></summary>
      

      ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends pandas: 
   :depends pandera: 
   :depends pulp: ``<=2.9.0``
   :depends pydantic: 
   :depends pyranges: 
   :depends python: 
   :depends pyyaml: 
   :depends seaborn: 
   :depends setuptools_scm: 
   :depends snakemake: ``>8,<9``
   :depends snakemake-executor-plugin-slurm: 
   :depends snakemake-wrapper-utils: 
   :depends tracknado: 
   :depends wget: 
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

      mamba install seqnado

   and update with::

      mamba update seqnado

  To create a new environment, run::

      mamba create --name myenvname seqnado

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqnado:<tag>

   (see `seqnado/tags`_ for valid values for ``<tag>``)


.. |downloads_seqnado| image:: https://img.shields.io/conda/dn/bioconda/seqnado.svg?style=flat
   :target: https://anaconda.org/bioconda/seqnado
   :alt:   (downloads)
.. |docker_seqnado| image:: https://quay.io/repository/biocontainers/seqnado/status
   :target: https://quay.io/repository/biocontainers/seqnado
.. _`seqnado/tags`: https://quay.io/repository/biocontainers/seqnado?tab=tags


.. raw:: html

    <script>
        var package = "seqnado";
        var versions = ["0.7.3","0.7.2","0.7.1","0.7.0","0.6.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqnado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqnado/README.html