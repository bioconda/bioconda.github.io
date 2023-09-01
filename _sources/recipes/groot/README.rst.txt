:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'groot'
.. highlight: bash

groot
=====

.. conda:recipe:: groot
   :replaces_section_title:
   :noindex:

   A tool for resistome profiling of metagenomic samples.

   :homepage: https://github.com/will-rowe/groot
   :license: MIT
   :recipe: /`groot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groot/meta.yaml>`_

   


.. conda:package:: groot

   |downloads_groot| |docker_groot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  <code>0.8.5-1</code>,  <code>0.8.4-1</code>,  <code>0.8.3-1</code>,  <code>0.8.2-1</code>,  <code>0.8.1-1</code>,  </span></summary>
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``0.8.5-1``,  ``0.8.4-1``,  ``0.8.3-1``,  ``0.8.2-1``,  ``0.8.1-1``,  ``0.7.1-1``,  ``0.7-1``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
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

      mamba install groot

   and update with::

      mamba update groot

  To create a new environment, run::

      mamba create --name myenvname groot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/groot:<tag>

   (see `groot/tags`_ for valid values for ``<tag>``)


.. |downloads_groot| image:: https://img.shields.io/conda/dn/bioconda/groot.svg?style=flat
   :target: https://anaconda.org/bioconda/groot
   :alt:   (downloads)
.. |docker_groot| image:: https://quay.io/repository/biocontainers/groot/status
   :target: https://quay.io/repository/biocontainers/groot
.. _`groot/tags`: https://quay.io/repository/biocontainers/groot?tab=tags


.. raw:: html

    <script>
        var package = "groot";
        var versions = ["1.1.2","1.1.2","1.1.0","1.0.2","0.8.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/groot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/groot/README.html