:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasten'
.. highlight: bash

fasten
======

.. conda:recipe:: fasten
   :replaces_section_title:
   :noindex:

   Perform random operations on fastq files\, using unix streaming. Secure your analysis with Fasten\!

   :homepage: https://github.com/lskatz/fasten
   :license: MIT / MIT
   :recipe: /`fasten <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasten>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasten/meta.yaml>`_

   


.. conda:package:: fasten

   |downloads_fasten| |docker_fasten|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.7-0</code>,  <code>0.8.5-0</code>,  <code>0.8.4-1</code>,  <code>0.8.4-0</code>,  <code>0.8.3-1</code>,  <code>0.8.3-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.2-0</code>,  </span></summary>
      

      ``0.8.7-0``,  ``0.8.5-0``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.1-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.1.13-2``,  ``0.1.13-1``,  ``0.1.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fasten

   and update with::

      mamba update fasten

  To create a new environment, run::

      mamba create --name myenvname fasten

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fasten:<tag>

   (see `fasten/tags`_ for valid values for ``<tag>``)


.. |downloads_fasten| image:: https://img.shields.io/conda/dn/bioconda/fasten.svg?style=flat
   :target: https://anaconda.org/bioconda/fasten
   :alt:   (downloads)
.. |docker_fasten| image:: https://quay.io/repository/biocontainers/fasten/status
   :target: https://quay.io/repository/biocontainers/fasten
.. _`fasten/tags`: https://quay.io/repository/biocontainers/fasten?tab=tags


.. raw:: html

    <script>
        var package = "fasten";
        var versions = ["0.8.7","0.8.5","0.8.4","0.8.4","0.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasten/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasten/README.html