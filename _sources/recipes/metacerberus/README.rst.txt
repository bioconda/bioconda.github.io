:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacerberus'
.. highlight: bash

metacerberus
============

.. conda:recipe:: metacerberus
   :replaces_section_title:
   :noindex:

   Versatile Functional Ontology Assignments for Metagenomes via Hidden Markov Model \(HMM\) searching with environmental focus of shotgun meta\'omics data

   :homepage: https://github.com/raw-lab/metacerberus
   :license: BSD / BSD-3-Clause
   :recipe: /`metacerberus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus/meta.yaml>`_

   


.. conda:package:: metacerberus

   |downloads_metacerberus| |docker_metacerberus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2-0</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.2-1</code>,  <code>0.2-0</code>,  </span></summary>
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: 
   :depends configargparse: 
   :depends dominate: 
   :depends fastp: 
   :depends fastqc: 
   :depends flash2: 
   :depends grpcio: ``1.43.*``
   :depends hmmer: 
   :depends metaomestats: 
   :depends pandas: 
   :depends phanotate: 
   :depends plotly: 
   :depends porechop: 
   :depends prodigal: 
   :depends prodigal-gv: 
   :depends psutil: 
   :depends python: ``>=3.8``
   :depends python-kaleido: 
   :depends ray-core: 
   :depends ray-dashboard: 
   :depends ray-default: 
   :depends ray-tune: 
   :depends scikit-learn: 
   :depends trnascan-se: 
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

      mamba install metacerberus

   and update with::

      mamba update metacerberus

  To create a new environment, run::

      mamba create --name myenvname metacerberus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metacerberus:<tag>

   (see `metacerberus/tags`_ for valid values for ``<tag>``)


.. |downloads_metacerberus| image:: https://img.shields.io/conda/dn/bioconda/metacerberus.svg?style=flat
   :target: https://anaconda.org/bioconda/metacerberus
   :alt:   (downloads)
.. |docker_metacerberus| image:: https://quay.io/repository/biocontainers/metacerberus/status
   :target: https://quay.io/repository/biocontainers/metacerberus
.. _`metacerberus/tags`: https://quay.io/repository/biocontainers/metacerberus?tab=tags


.. raw:: html

    <script>
        var package = "metacerberus";
        var versions = ["1.2.1","1.2.1","1.2","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacerberus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacerberus/README.html