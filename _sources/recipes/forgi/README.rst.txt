:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forgi'
.. highlight: bash

forgi
=====

.. conda:recipe:: forgi
   :replaces_section_title:
   :noindex:

   RNA Graph Library

   :homepage: https://viennarna.github.io/forgi/
   :license: GPL 3.0
   :recipe: /`forgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forgi/meta.yaml>`_

   


.. conda:package:: forgi

   |downloads_forgi| |docker_forgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.1.1-4</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.3-1</code>,  <code>2.0.3-0</code>,  </span></summary>
      

      ``2.2.2-1``,  ``2.2.2-0``,  ``2.1.1-4``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0-2``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: ``>=1.4.3``
   :depends beautifulsoup4: ``>=4.6``
   :depends biopython: ``>=1.70``
   :depends future: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends logging_exceptions: ``>=0.1.6``
   :depends matplotlib-base: ``>=2``
   :depends networkx: ``>=2.0``
   :depends numpy: ``>=1.10.0``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: ``>=0.20``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends scipy: ``>=0.19.1``
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

      mamba install forgi

   and update with::

      mamba update forgi

  To create a new environment, run::

      mamba create --name myenvname forgi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/forgi:<tag>

   (see `forgi/tags`_ for valid values for ``<tag>``)


.. |downloads_forgi| image:: https://img.shields.io/conda/dn/bioconda/forgi.svg?style=flat
   :target: https://anaconda.org/bioconda/forgi
   :alt:   (downloads)
.. |docker_forgi| image:: https://quay.io/repository/biocontainers/forgi/status
   :target: https://quay.io/repository/biocontainers/forgi
.. _`forgi/tags`: https://quay.io/repository/biocontainers/forgi?tab=tags


.. raw:: html

    <script>
        var package = "forgi";
        var versions = ["2.2.2","2.2.2","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forgi/README.html