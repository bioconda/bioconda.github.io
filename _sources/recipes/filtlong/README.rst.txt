:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'filtlong'
.. highlight: bash

filtlong
========

.. conda:recipe:: filtlong
   :replaces_section_title:
   :noindex:

   Filtlong is a tool for filtering long reads. It can take a set of long reads and produce a smaller\, better subset. It uses both read length \(longer is better\) and read identity \(higher is better\) when choosing which reads pass the filter.

   :homepage: https://github.com/rrwick/Filtlong
   :license: GPL-3.0
   :recipe: /`filtlong <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/filtlong>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/filtlong/meta.yaml>`_

   


.. conda:package:: filtlong

   |downloads_filtlong| |docker_filtlong|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.1-5</code>,  <code>0.2.1-4</code>,  <code>0.2.1-3</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-4</code>,  <code>0.2.0-3</code>,  <code>0.2.0-2</code>,  </span></summary>
      

      ``0.2.1-5``,  ``0.2.1-4``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-4``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install filtlong

   and update with::

      mamba update filtlong

  To create a new environment, run::

      mamba create --name myenvname filtlong

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/filtlong:<tag>

   (see `filtlong/tags`_ for valid values for ``<tag>``)


.. |downloads_filtlong| image:: https://img.shields.io/conda/dn/bioconda/filtlong.svg?style=flat
   :target: https://anaconda.org/bioconda/filtlong
   :alt:   (downloads)
.. |docker_filtlong| image:: https://quay.io/repository/biocontainers/filtlong/status
   :target: https://quay.io/repository/biocontainers/filtlong
.. _`filtlong/tags`: https://quay.io/repository/biocontainers/filtlong?tab=tags


.. raw:: html

    <script>
        var package = "filtlong";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/filtlong/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/filtlong/README.html