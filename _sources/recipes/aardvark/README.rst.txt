:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aardvark'
.. highlight: bash

aardvark
========

.. conda:recipe:: aardvark
   :replaces_section_title:
   :noindex:

   A tool for sniffing out the differences in vari\-Ants.

   :homepage: https://github.com/PacificBiosciences/aardvark
   :license: MIT / MIT
   :recipe: /`aardvark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aardvark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aardvark/meta.yaml>`_

   


.. conda:package:: aardvark

   |downloads_aardvark| |docker_aardvark|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  </span></summary>
      

      ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install aardvark

   and update with::

      mamba update aardvark

  To create a new environment, run::

      mamba create --name myenvname aardvark

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aardvark:<tag>

   (see `aardvark/tags`_ for valid values for ``<tag>``)


.. |downloads_aardvark| image:: https://img.shields.io/conda/dn/bioconda/aardvark.svg?style=flat
   :target: https://anaconda.org/bioconda/aardvark
   :alt:   (downloads)
.. |docker_aardvark| image:: https://quay.io/repository/biocontainers/aardvark/status
   :target: https://quay.io/repository/biocontainers/aardvark
.. _`aardvark/tags`: https://quay.io/repository/biocontainers/aardvark?tab=tags


.. raw:: html

    <script>
        var package = "aardvark";
        var versions = ["0.10.3","0.10.2","0.10.1","0.9.0","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aardvark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aardvark/README.html