:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxpasta'
.. highlight: bash

taxpasta
========

.. conda:recipe:: taxpasta
   :replaces_section_title:
   :noindex:

   TAXonomic Profile Aggregation and STAndardisation

   :homepage: https://github.com/taxprofiler/taxpasta
   :license: Apache-2.0
   :recipe: /`taxpasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxpasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxpasta/meta.yaml>`_

   


.. conda:package:: taxpasta

   |downloads_taxpasta| |docker_taxpasta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  </span></summary>
      

      ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biom-format: 
   :depends depinfo: ``>=2.1``
   :depends numpy: 
   :depends pandas: 
   :depends pandera: 
   :depends pyarrow: 
   :depends python: ``>=3.8``
   :depends taxopy: 
   :depends typer: 
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

      mamba install taxpasta

   and update with::

      mamba update taxpasta

  To create a new environment, run::

      mamba create --name myenvname taxpasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxpasta:<tag>

   (see `taxpasta/tags`_ for valid values for ``<tag>``)


.. |downloads_taxpasta| image:: https://img.shields.io/conda/dn/bioconda/taxpasta.svg?style=flat
   :target: https://anaconda.org/bioconda/taxpasta
   :alt:   (downloads)
.. |docker_taxpasta| image:: https://quay.io/repository/biocontainers/taxpasta/status
   :target: https://quay.io/repository/biocontainers/taxpasta
.. _`taxpasta/tags`: https://quay.io/repository/biocontainers/taxpasta?tab=tags


.. raw:: html

    <script>
        var package = "taxpasta";
        var versions = ["0.6.1","0.6.0","0.5.0","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxpasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxpasta/README.html