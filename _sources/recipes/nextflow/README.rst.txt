:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextflow'
.. highlight: bash

nextflow
========

.. conda:recipe:: nextflow
   :replaces_section_title:
   :noindex:

   A DSL for data\-driven computational pipelines http\:\/\/nextflow.io

   :homepage: https://github.com/nextflow-io/nextflow
   :license: Apache-2.0
   :recipe: /`nextflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextflow/meta.yaml>`_

   


.. conda:package:: nextflow

   |downloads_nextflow| |docker_nextflow|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>24.10.6-0</code>,  <code>24.10.5-1</code>,  <code>24.10.5-0</code>,  <code>24.10.4-0</code>,  <code>24.10.3-0</code>,  <code>24.10.2-0</code>,  <code>24.10.1-0</code>,  <code>24.10.0-0</code>,  <code>24.04.4-0</code>,  </span></summary>
      

      ``24.10.6-0``,  ``24.10.5-1``,  ``24.10.5-0``,  ``24.10.4-0``,  ``24.10.3-0``,  ``24.10.2-0``,  ``24.10.1-0``,  ``24.10.0-0``,  ``24.04.4-0``,  ``24.04.3-0``,  ``24.04.2-0``,  ``24.04.1-0``,  ``23.10.1-0``,  ``23.10.0-0``,  ``23.04.4-0``,  ``23.04.3-0``,  ``23.04.1-3``,  ``23.04.1-2``,  ``23.04.1-1``,  ``23.04.1-0``,  ``22.10.6-0``,  ``22.10.4-0``,  ``22.10.1-0``,  ``22.10.0-0``,  ``22.04.5-0``,  ``22.04.0-0``,  ``21.10.6-0``,  ``21.10.0-0``,  ``21.04.0-0``,  ``20.10.0-1``,  ``20.10.0-0``,  ``20.07.1-0``,  ``20.04.1-1``,  ``20.04.1-0``,  ``20.01.0-0``,  ``19.10.0-0``,  ``19.07.0-0``,  ``19.04.1-1``,  ``19.04.0-0``,  ``19.01.0-4``,  ``19.01.0-3``,  ``18.10.1-3``,  ``18.10.1-2``,  ``18.10.1-1``,  ``0.32.0-1``,  ``0.31.1-1``,  ``0.31.1-0``,  ``0.31.0-2``,  ``0.30.2-2``,  ``0.30.1-0``,  ``0.30.0-0``,  ``0.29.1-0``,  ``0.29.0-0``,  ``0.28.2-0``,  ``0.28.1-0``,  ``0.28.0-0``,  ``0.27.6-0``,  ``0.27.5-0``,  ``0.27.4-0``,  ``0.27.2-0``,  ``0.27.1-0``,  ``0.27.0-0``,  ``0.25.1-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.23.4-0``,  ``0.21.3-0``,  ``0.19.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends coreutils: 
   :depends curl: 
   :depends openjdk: ``>=11,<=23``
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

      mamba install nextflow

   and update with::

      mamba update nextflow

  To create a new environment, run::

      mamba create --name myenvname nextflow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nextflow:<tag>

   (see `nextflow/tags`_ for valid values for ``<tag>``)


.. |downloads_nextflow| image:: https://img.shields.io/conda/dn/bioconda/nextflow.svg?style=flat
   :target: https://anaconda.org/bioconda/nextflow
   :alt:   (downloads)
.. |docker_nextflow| image:: https://quay.io/repository/biocontainers/nextflow/status
   :target: https://quay.io/repository/biocontainers/nextflow
.. _`nextflow/tags`: https://quay.io/repository/biocontainers/nextflow?tab=tags


.. raw:: html

    <script>
        var package = "nextflow";
        var versions = ["24.10.6","24.10.5","24.10.5","24.10.4","24.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextflow/README.html