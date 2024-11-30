:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flowcraft'
.. highlight: bash

flowcraft
=========

.. conda:recipe:: flowcraft
   :replaces_section_title:
   :noindex:

   A Nextflow pipeline assembler for genomics. Pick your modules. Assemble them. Run the pipeline.

   :homepage: https://github.com/assemblerflow/flowcraft
   :documentation: http://assemblerflow.readthedocs.io/en/latest/
   
   :developer docs: http://assemblerflow.readthedocs.io/en/latest/
   :license: GPL3 / GPL3
   :recipe: /`flowcraft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flowcraft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flowcraft/meta.yaml>`_

   


.. conda:package:: flowcraft

   |downloads_flowcraft| |docker_flowcraft|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-2</code>,  <code>1.4.1-1</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.1-1</code>,  <code>1.3.0-1</code>,  <code>1.2.2-1</code>,  <code>1.2.1-1</code>,  <code>1.2.0.post1-1</code>,  </span></summary>
      

      ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-1``,  ``1.3.0-1``,  ``1.2.2-1``,  ``1.2.1-1``,  ``1.2.0.post1-1``,  ``1.2.0.post1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends jinja2: 
   :depends nextflow: ``>=0.28``
   :depends pympler: 
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends requests: 
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

      mamba install flowcraft

   and update with::

      mamba update flowcraft

  To create a new environment, run::

      mamba create --name myenvname flowcraft

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flowcraft:<tag>

   (see `flowcraft/tags`_ for valid values for ``<tag>``)


.. |downloads_flowcraft| image:: https://img.shields.io/conda/dn/bioconda/flowcraft.svg?style=flat
   :target: https://anaconda.org/bioconda/flowcraft
   :alt:   (downloads)
.. |docker_flowcraft| image:: https://quay.io/repository/biocontainers/flowcraft/status
   :target: https://quay.io/repository/biocontainers/flowcraft
.. _`flowcraft/tags`: https://quay.io/repository/biocontainers/flowcraft?tab=tags


.. raw:: html

    <script>
        var package = "flowcraft";
        var versions = ["1.4.1","1.4.1","1.4.0","1.4.0","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flowcraft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flowcraft/README.html