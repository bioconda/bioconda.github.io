:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxentpy'
.. highlight: bash

maxentpy
========

.. conda:recipe:: maxentpy
   :replaces_section_title:
   :noindex:

   maxentpy is a python wrapper for MaxEntScan to calculate splice site strength.

   :homepage: https://github.com/kepbod/maxentpy
   :license: MIT / MIT
   :recipe: /`maxentpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxentpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxentpy/meta.yaml>`_

   


.. conda:package:: maxentpy

   |downloads_maxentpy| |docker_maxentpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.02-1</code>,  <code>0.02-0</code>,  <code>0.0.3-4</code>,  <code>0.0.3-2</code>,  <code>0.0.3-1</code>,  <code>0.0.3-0</code>,  <code>0.0.1-5</code>,  <code>0.0.1-4</code>,  <code>0.0.1-3</code>,  </span></summary>
      

      ``0.02-1``,  ``0.02-0``,  ``0.0.3-4``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.1-5``,  ``0.0.1-4``,  ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends msgpack-python: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install maxentpy

   and update with::

      mamba update maxentpy

  To create a new environment, run::

      mamba create --name myenvname maxentpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maxentpy:<tag>

   (see `maxentpy/tags`_ for valid values for ``<tag>``)


.. |downloads_maxentpy| image:: https://img.shields.io/conda/dn/bioconda/maxentpy.svg?style=flat
   :target: https://anaconda.org/bioconda/maxentpy
   :alt:   (downloads)
.. |docker_maxentpy| image:: https://quay.io/repository/biocontainers/maxentpy/status
   :target: https://quay.io/repository/biocontainers/maxentpy
.. _`maxentpy/tags`: https://quay.io/repository/biocontainers/maxentpy?tab=tags


.. raw:: html

    <script>
        var package = "maxentpy";
        var versions = ["0.02","0.02","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxentpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxentpy/README.html