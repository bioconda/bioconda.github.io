:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abeona'
.. highlight: bash

abeona
======

.. conda:recipe:: abeona
   :replaces_section_title:
   :noindex:

   A simple transcriptome assembler based on kallisto and Cortex graphs.

   :homepage: https://github.com/winni2k/abeona
   :license: Apache / Apache Software
   :recipe: /`abeona <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abeona>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abeona/meta.yaml>`_

   


.. conda:package:: abeona

   |downloads_abeona| |docker_abeona|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.45.0-1</code>,  <code>0.45.0-0</code>,  <code>0.44.3-0</code>,  <code>0.44.0-0</code>,  <code>0.43.0-0</code>,  <code>0.42.1-0</code>,  <code>0.42.0-0</code>,  <code>0.41.1-0</code>,  <code>0.40.2-0</code>,  </span></summary>
      

      ``0.45.0-1``,  ``0.45.0-0``,  ``0.44.3-0``,  ``0.44.0-0``,  ``0.43.0-0``,  ``0.42.1-0``,  ``0.42.0-0``,  ``0.41.1-0``,  ``0.40.2-0``,  ``0.40.0-0``,  ``0.39.3-0``,  ``0.37.2-0``,  ``0.36.0-2``,  ``0.36.0-1``,  ``0.36.0-0``,  ``0.31.2-0``,  ``0.26.0-0``,  ``0.24.0-2``,  ``0.23.1-2``,  ``0.23.1-0``,  ``0.23.0-1``,  ``0.23.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: 
   :depends cortexpy: ``0.45.7``
   :depends kallisto: ``0.44.0``
   :depends mccortex: ``1.0``
   :depends nextflow: ``19.01.0``
   :depends pandas: 
   :depends progressbar2: 
   :depends python: ``>=3.6``
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

      mamba install abeona

   and update with::

      mamba update abeona

  To create a new environment, run::

      mamba create --name myenvname abeona

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abeona:<tag>

   (see `abeona/tags`_ for valid values for ``<tag>``)


.. |downloads_abeona| image:: https://img.shields.io/conda/dn/bioconda/abeona.svg?style=flat
   :target: https://anaconda.org/bioconda/abeona
   :alt:   (downloads)
.. |docker_abeona| image:: https://quay.io/repository/biocontainers/abeona/status
   :target: https://quay.io/repository/biocontainers/abeona
.. _`abeona/tags`: https://quay.io/repository/biocontainers/abeona?tab=tags


.. raw:: html

    <script>
        var package = "abeona";
        var versions = ["0.45.0","0.45.0","0.44.3","0.44.0","0.43.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abeona/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abeona/README.html