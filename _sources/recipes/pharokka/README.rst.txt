:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pharokka'
.. highlight: bash

pharokka
========

.. conda:recipe:: pharokka
   :replaces_section_title:
   :noindex:

   Fast Phage Annotation Program

   :homepage: https://github.com/gbouras13/pharokka
   :documentation: https://pharokka.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pharokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pharokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pharokka/meta.yaml>`_

   


.. conda:package:: pharokka

   |downloads_pharokka| |docker_pharokka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.5-2</code>,  <code>1.7.5-1</code>,  <code>1.7.5-0</code>,  <code>1.7.4-0</code>,  <code>1.7.3-0</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.1-1</code>,  </span></summary>
      

      ``1.7.5-2``,  ``1.7.5-1``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends alive-progress: ``>=3.0.1``
   :depends aragorn: ``>=1.2.41``
   :depends bcbio-gff: ``>=0.7.0``
   :depends biopython: ``>=1.80``
   :depends black: ``>=22.3.0``
   :depends dnaapler: ``>=1.0.1``
   :depends isort: ``>=5.10.1``
   :depends loguru: ``>=0.5.4``
   :depends mash: ``>=2.2``
   :depends minced: ``>=0.4.2``
   :depends mmseqs2: ``>=1.6f452``
   :depends phanotate: ``1.6.7.*``
   :depends pycirclize: ``>=0.3.1``
   :depends pyhmmer: ``>=0.11.0``
   :depends pyrodigal: ``>=3.1.0``
   :depends pyrodigal-gv: ``>=0.2.0``
   :depends pytest: ``>=6.2.5``
   :depends pytest-cov: ``>=3.0.0``
   :depends python: ``>=3.5``
   :depends pyyaml: ``>=6.0``
   :depends requests: ``>=2.25.1``
   :depends trnascan-se: ``>=2.0.9``
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

      mamba install pharokka

   and update with::

      mamba update pharokka

  To create a new environment, run::

      mamba create --name myenvname pharokka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pharokka:<tag>

   (see `pharokka/tags`_ for valid values for ``<tag>``)


.. |downloads_pharokka| image:: https://img.shields.io/conda/dn/bioconda/pharokka.svg?style=flat
   :target: https://anaconda.org/bioconda/pharokka
   :alt:   (downloads)
.. |docker_pharokka| image:: https://quay.io/repository/biocontainers/pharokka/status
   :target: https://quay.io/repository/biocontainers/pharokka
.. _`pharokka/tags`: https://quay.io/repository/biocontainers/pharokka?tab=tags


.. raw:: html

    <script>
        var package = "pharokka";
        var versions = ["1.7.5","1.7.5","1.7.5","1.7.4","1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pharokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pharokka/README.html