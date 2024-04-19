:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atropos'
.. highlight: bash

atropos
=======

.. conda:recipe:: atropos
   :replaces_section_title:
   :noindex:

   trim adapters from high\-throughput sequencing reads

   :homepage: https://github.com/jdidion/atropos
   :documentation: https://atropos.readthedocs.io
   
   :license: CC0 and partly MIT
   :recipe: /`atropos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atropos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atropos/meta.yaml>`_

   


.. conda:package:: atropos

   |downloads_atropos| |docker_atropos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.32-1</code>,  <code>1.1.32-0</code>,  <code>1.1.31-3</code>,  <code>1.1.31-2</code>,  <code>1.1.31-1</code>,  <code>1.1.31-0</code>,  <code>1.1.29-1</code>,  <code>1.1.29-0</code>,  <code>1.1.28-1</code>,  </span></summary>
      

      ``1.1.32-1``,  ``1.1.32-0``,  ``1.1.31-3``,  ``1.1.31-2``,  ``1.1.31-1``,  ``1.1.31-0``,  ``1.1.29-1``,  ``1.1.29-0``,  ``1.1.28-1``,  ``1.1.28-0``,  ``1.1.27-0``,  ``1.1.26-0``,  ``1.1.25-0``,  ``1.1.24-0``,  ``1.1.23-0``,  ``1.1.22-1``,  ``1.1.22-0``,  ``1.1.21-0``,  ``1.1.19-0``,  ``1.1.18-1``,  ``1.1.18-0``,  ``1.1.16-0``,  ``1.1.10-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.0.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends jinja2: 
   :depends libgcc-ng: ``>=12``
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends tqdm: 
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

      mamba install atropos

   and update with::

      mamba update atropos

  To create a new environment, run::

      mamba create --name myenvname atropos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atropos:<tag>

   (see `atropos/tags`_ for valid values for ``<tag>``)


.. |downloads_atropos| image:: https://img.shields.io/conda/dn/bioconda/atropos.svg?style=flat
   :target: https://anaconda.org/bioconda/atropos
   :alt:   (downloads)
.. |docker_atropos| image:: https://quay.io/repository/biocontainers/atropos/status
   :target: https://quay.io/repository/biocontainers/atropos
.. _`atropos/tags`: https://quay.io/repository/biocontainers/atropos?tab=tags


.. raw:: html

    <script>
        var package = "atropos";
        var versions = ["1.1.32","1.1.32","1.1.31","1.1.31","1.1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atropos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atropos/README.html