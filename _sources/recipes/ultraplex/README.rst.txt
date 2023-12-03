:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultraplex'
.. highlight: bash

ultraplex
=========

.. conda:recipe:: ultraplex
   :replaces_section_title:
   :noindex:

   fastq demultiplexer

   :homepage: https://github.com/ulelab/ultraplex.git
   :license: MIT / MIT
   :recipe: /`ultraplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraplex/meta.yaml>`_

   


.. conda:package:: ultraplex

   |downloads_ultraplex| |docker_ultraplex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.9-1</code>,  <code>1.2.9-0</code>,  <code>1.2.5-2</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  </span></summary>
      

      ``1.2.9-1``,  ``1.2.9-0``,  ``1.2.5-2``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends dnaio: ``>=0.5.0``
   :depends libgcc-ng: ``>=12``
   :depends multiprocess: 
   :depends pigz: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends setuptools_scm: ``>8``
   :depends xopen: ``>=1.0.0``
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

      mamba install ultraplex

   and update with::

      mamba update ultraplex

  To create a new environment, run::

      mamba create --name myenvname ultraplex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ultraplex:<tag>

   (see `ultraplex/tags`_ for valid values for ``<tag>``)


.. |downloads_ultraplex| image:: https://img.shields.io/conda/dn/bioconda/ultraplex.svg?style=flat
   :target: https://anaconda.org/bioconda/ultraplex
   :alt:   (downloads)
.. |docker_ultraplex| image:: https://quay.io/repository/biocontainers/ultraplex/status
   :target: https://quay.io/repository/biocontainers/ultraplex
.. _`ultraplex/tags`: https://quay.io/repository/biocontainers/ultraplex?tab=tags


.. raw:: html

    <script>
        var package = "ultraplex";
        var versions = ["1.2.9","1.2.9","1.2.5","1.2.5","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultraplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultraplex/README.html