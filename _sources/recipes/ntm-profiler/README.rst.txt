:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntm-profiler'
.. highlight: bash

ntm-profiler
============

.. conda:recipe:: ntm-profiler
   :replaces_section_title:
   :noindex:

   Profiling tool for NTM to detect species and resistance from WGS data

   :homepage: https://github.com/jodyphelan/NTM-Profiler
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ntm-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntm-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntm-profiler/meta.yaml>`_

   


.. conda:package:: ntm-profiler

   |downloads_ntm-profiler| |docker_ntm-profiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.1-0</code>,  <code>0.1.0-0</code>,  <code>0.0.2-0</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends jinja2: 
   :depends mash: ``2.3.*``
   :depends pathogen-profiler: ``4.1.0.*``
   :depends python: ``>=3.7``
   :depends sourmash: ``>=4.8.3``
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

      mamba install ntm-profiler

   and update with::

      mamba update ntm-profiler

  To create a new environment, run::

      mamba create --name myenvname ntm-profiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntm-profiler:<tag>

   (see `ntm-profiler/tags`_ for valid values for ``<tag>``)


.. |downloads_ntm-profiler| image:: https://img.shields.io/conda/dn/bioconda/ntm-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/ntm-profiler
   :alt:   (downloads)
.. |docker_ntm-profiler| image:: https://quay.io/repository/biocontainers/ntm-profiler/status
   :target: https://quay.io/repository/biocontainers/ntm-profiler
.. _`ntm-profiler/tags`: https://quay.io/repository/biocontainers/ntm-profiler?tab=tags


.. raw:: html

    <script>
        var package = "ntm-profiler";
        var versions = ["0.5.0","0.4.0","0.3.0","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntm-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntm-profiler/README.html