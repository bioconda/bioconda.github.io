:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flye'
.. highlight: bash

flye
====

.. conda:recipe:: flye
   :replaces_section_title:
   :noindex:

   Fast and accurate de novo assembler for single molecule sequencing reads

   :homepage: https://github.com/fenderglass/Flye/
   :license: BSD-3-Clause
   :recipe: /`flye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye/meta.yaml>`_

   


.. conda:package:: flye

   |downloads_flye| |docker_flye|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9.2-2</code>,  <code>2.9.2-1</code>,  <code>2.9.2-0</code>,  <code>2.9.1-0</code>,  <code>2.9-1</code>,  <code>2.9-0</code>,  <code>2.8.3-1</code>,  <code>2.8.3-0</code>,  <code>2.8.2-0</code>,  </span></summary>
      

      ``2.9.2-2``,  ``2.9.2-1``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.9-1``,  ``2.9-0``,  ``2.8.3-1``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.8-0``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4-0``,  ``2.3.7-0``,  ``2.3.6-3``,  ``2.3.5-3``,  ``2.3.4-2``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
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

      mamba install flye

   and update with::

      mamba update flye

  To create a new environment, run::

      mamba create --name myenvname flye

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flye:<tag>

   (see `flye/tags`_ for valid values for ``<tag>``)


.. |downloads_flye| image:: https://img.shields.io/conda/dn/bioconda/flye.svg?style=flat
   :target: https://anaconda.org/bioconda/flye
   :alt:   (downloads)
.. |docker_flye| image:: https://quay.io/repository/biocontainers/flye/status
   :target: https://quay.io/repository/biocontainers/flye
.. _`flye/tags`: https://quay.io/repository/biocontainers/flye?tab=tags


.. raw:: html

    <script>
        var package = "flye";
        var versions = ["2.9.2","2.9.2","2.9.2","2.9.1","2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flye/README.html