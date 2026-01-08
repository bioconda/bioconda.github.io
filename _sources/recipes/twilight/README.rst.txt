:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'twilight'
.. highlight: bash

twilight
========

.. conda:recipe:: twilight
   :replaces_section_title:
   :noindex:

   TWILIGHT\: A high throughput tool for tall and wide multiple sequence alignment.

   :homepage: https://github.com/TurakhiaLab/TWILIGHT
   :documentation: https://turakhia.ucsd.edu/TWILIGHT
   
   :license: MIT / MIT
   :recipe: /`twilight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twilight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twilight/meta.yaml>`_

   TWILIGHT \(Tall and Wide Alignments at High Throughput\) is a tool designed for ultrafast and ultralarge multiple sequence alignment. It is able to scale to millions of long nucleotide sequences \(\>10000 bases\).


.. conda:package:: twilight

   |downloads_twilight| |docker_twilight|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.4-0</code>,  <code>0.1.4a-0</code>,  <code>0.1.3-2</code>,  </span></summary>
      

      ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.4a-0``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends tbb: ``>=2021.13.0``
   :depends tbb-devel: 
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

      mamba install twilight

   and update with::

      mamba update twilight

  To create a new environment, run::

      mamba create --name myenvname twilight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/twilight:<tag>

   (see `twilight/tags`_ for valid values for ``<tag>``)


.. |downloads_twilight| image:: https://img.shields.io/conda/dn/bioconda/twilight.svg?style=flat
   :target: https://anaconda.org/bioconda/twilight
   :alt:   (downloads)
.. |docker_twilight| image:: https://quay.io/repository/biocontainers/twilight/status
   :target: https://quay.io/repository/biocontainers/twilight
.. _`twilight/tags`: https://quay.io/repository/biocontainers/twilight?tab=tags


.. raw:: html

    <script>
        var package = "twilight";
        var versions = ["0.2.3","0.2.3","0.2.2","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/twilight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/twilight/README.html