:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fpa'
.. highlight: bash

fpa
===

.. conda:recipe:: fpa
   :replaces_section_title:
   :noindex:

   Filter Pairwise Alignment filter long read mapping information to save disk space

   :homepage: https://github.com/natir/yacrd
   :license: MIT / MIT
   :recipe: /`fpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fpa/meta.yaml>`_

   


.. conda:package:: fpa

   |downloads_fpa| |docker_fpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-5</code>,  <code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5-2</code>,  <code>0.5-1</code>,  <code>0.4-8</code>,  </span></summary>
      

      ``0.5.1-5``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5-2``,  ``0.5-1``,  ``0.4-8``,  ``0.4-7``,  ``0.4-6``,  ``0.4-5``,  ``0.4-4``,  ``0.4-3``,  ``0.4-2``,  ``0.4-0``,  ``0.3-0``,  ``0.2-1``,  ``0.1.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install fpa

   and update with::

      mamba update fpa

  To create a new environment, run::

      mamba create --name myenvname fpa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fpa:<tag>

   (see `fpa/tags`_ for valid values for ``<tag>``)


.. |downloads_fpa| image:: https://img.shields.io/conda/dn/bioconda/fpa.svg?style=flat
   :target: https://anaconda.org/bioconda/fpa
   :alt:   (downloads)
.. |docker_fpa| image:: https://quay.io/repository/biocontainers/fpa/status
   :target: https://quay.io/repository/biocontainers/fpa
.. _`fpa/tags`: https://quay.io/repository/biocontainers/fpa?tab=tags


.. raw:: html

    <script>
        var package = "fpa";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fpa/README.html