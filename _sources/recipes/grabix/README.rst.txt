:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grabix'
.. highlight: bash

grabix
======

.. conda:recipe:: grabix
   :replaces_section_title:
   :noindex:

   a wee tool for random access into BGZF files.

   :homepage: https://github.com/arq5x/grabix
   :license: MIT
   :recipe: /`grabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grabix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grabix/meta.yaml>`_

   


.. conda:package:: grabix

   |downloads_grabix| |docker_grabix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.8-10</code>,  <code>0.1.8-9</code>,  <code>0.1.8-8</code>,  <code>0.1.8-7</code>,  <code>0.1.8-6</code>,  <code>0.1.8-5</code>,  <code>0.1.8-4</code>,  <code>0.1.8-3</code>,  <code>0.1.8-2</code>,  </span></summary>
      

      ``0.1.8-10``,  ``0.1.8-9``,  ``0.1.8-8``,  ``0.1.8-7``,  ``0.1.8-6``,  ``0.1.8-5``,  ``0.1.8-4``,  ``0.1.8-3``,  ``0.1.8-2``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.3-1``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install grabix

   and update with::

      mamba update grabix

  To create a new environment, run::

      mamba create --name myenvname grabix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grabix:<tag>

   (see `grabix/tags`_ for valid values for ``<tag>``)


.. |downloads_grabix| image:: https://img.shields.io/conda/dn/bioconda/grabix.svg?style=flat
   :target: https://anaconda.org/bioconda/grabix
   :alt:   (downloads)
.. |docker_grabix| image:: https://quay.io/repository/biocontainers/grabix/status
   :target: https://quay.io/repository/biocontainers/grabix
.. _`grabix/tags`: https://quay.io/repository/biocontainers/grabix?tab=tags


.. raw:: html

    <script>
        var package = "grabix";
        var versions = ["0.1.8","0.1.8","0.1.8","0.1.8","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grabix/README.html