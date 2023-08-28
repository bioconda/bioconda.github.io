:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytabix'
.. highlight: bash

pytabix
=======

.. conda:recipe:: pytabix
   :replaces_section_title:
   :noindex:

   Fast random access to sorted files compressed with bgzip and indexed by tabix.

   :homepage: https://github.com/slowkow/pytabix
   :license: MIT
   :recipe: /`pytabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytabix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytabix/meta.yaml>`_

   


.. conda:package:: pytabix

   |downloads_pytabix| |docker_pytabix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1-4</code>,  <code>0.1-3</code>,  <code>0.1-2</code>,  <code>0.1-1</code>,  <code>0.1-0</code>,  <code>0.0.2-8</code>,  <code>0.0.2-7</code>,  <code>0.0.2-6</code>,  <code>0.0.2-5</code>,  </span></summary>
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``,  ``0.0.2-8``,  ``0.0.2-7``,  ``0.0.2-6``,  ``0.0.2-5``,  ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-2``,  ``0.0.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pytabix

   and update with::

      mamba update pytabix

  To create a new environment, run::

      mamba create --name myenvname pytabix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytabix:<tag>

   (see `pytabix/tags`_ for valid values for ``<tag>``)


.. |downloads_pytabix| image:: https://img.shields.io/conda/dn/bioconda/pytabix.svg?style=flat
   :target: https://anaconda.org/bioconda/pytabix
   :alt:   (downloads)
.. |docker_pytabix| image:: https://quay.io/repository/biocontainers/pytabix/status
   :target: https://quay.io/repository/biocontainers/pytabix
.. _`pytabix/tags`: https://quay.io/repository/biocontainers/pytabix?tab=tags


.. raw:: html

    <script>
        var package = "pytabix";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytabix/README.html