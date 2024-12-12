:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadarida-d'
.. highlight: bash

tadarida-d
==========

.. conda:recipe:: tadarida-d
   :replaces_section_title:
   :noindex:

   Tadarida\-D \(Toolbox for Animal Detection on Acoustic Recordings \- Detection and Feature extraction part\) for Galaxy use.

   :homepage: https://github.com/YvesBas/Tadarida-D
   :license: LGPL / LGPL-3.0
   :recipe: /`tadarida-d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-d/meta.yaml>`_

   


.. conda:package:: tadarida-d

   |downloads_tadarida-d| |docker_tadarida-d|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.03-9</code>,  <code>1.03-8</code>,  <code>1.03-7</code>,  <code>1.03-6</code>,  <code>1.03-5</code>,  <code>1.03-4</code>,  <code>1.03-3</code>,  <code>1.03-1</code>,  <code>1.03-0</code>,  </span></summary>
      

      ``1.03-9``,  ``1.03-8``,  ``1.03-7``,  ``1.03-6``,  ``1.03-5``,  ``1.03-4``,  ``1.03-3``,  ``1.03-1``,  ``1.03-0``,  ``1.02-0``,  ``1.01-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends fftw: ``>=3.3.10,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libsndfile: ``>=1.2.2,<1.3.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends qt: ``<5``
   :depends xorg-libsm: 
   :depends xorg-libx11: 
   :depends xorg-libxau: 
   :depends xorg-libxdmcp: 
   :depends xorg-libxext: 
   :depends xorg-libxrender: 
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

      mamba install tadarida-d

   and update with::

      mamba update tadarida-d

  To create a new environment, run::

      mamba create --name myenvname tadarida-d

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tadarida-d:<tag>

   (see `tadarida-d/tags`_ for valid values for ``<tag>``)


.. |downloads_tadarida-d| image:: https://img.shields.io/conda/dn/bioconda/tadarida-d.svg?style=flat
   :target: https://anaconda.org/bioconda/tadarida-d
   :alt:   (downloads)
.. |docker_tadarida-d| image:: https://quay.io/repository/biocontainers/tadarida-d/status
   :target: https://quay.io/repository/biocontainers/tadarida-d
.. _`tadarida-d/tags`: https://quay.io/repository/biocontainers/tadarida-d?tab=tags


.. raw:: html

    <script>
        var package = "tadarida-d";
        var versions = ["1.03","1.03","1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadarida-d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadarida-d/README.html