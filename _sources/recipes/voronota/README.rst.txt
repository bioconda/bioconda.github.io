:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'voronota'
.. highlight: bash

voronota
========

.. conda:recipe:: voronota
   :replaces_section_title:
   :noindex:

   Compute Voronoi diagram vertices for macromolecular structures

   :homepage: https://www.voronota.com/
   :developer docs: https://github.com/kliment-olechnovic/voronota
   :license: MIT / MIT
   :recipe: /`voronota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voronota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voronota/meta.yaml>`_
   :links: doi: :doi:`10.1002/jcc.23538`

   The analysis of macromolecular structures often requires a comprehensive definition of atomic neighborhoods.
   Such a definition can be based on the Voronoi diagram of balls\, where each ball represents an atom of some van der Waals radius.
   Voronota is a software tool for finding all the vertices of the Voronoi diagram of balls.
   Such vertices correspond to the centers of the empty tangent spheres defined by quadruples of balls.
   Voronota is especially suitable for processing three\-dimensional structures of biological macromolecules such as proteins and RNA.

   Since version 1.2 Voronota also uses the Voronoi vertices to construct inter\-atom contact surfaces and solvent accessible surfaces.
   Voronota provides tools to query contacts\, generate contacts graphics\, compare contacts and evaluate quality of protein structural models using contacts.

   Most of the new developments are happening in the expansions of Voronota\: Voronota\-JS\, Voronota\-LT and Voronota\-GL.

   Voronota and its expansions are developed by Kliment Olechnovic \(https\:\/\/www.kliment.lt\).



.. conda:package:: voronota

   |downloads_voronota| |docker_voronota|

   :versions:
      
      

      ``1.29.4370-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends glew: ``>=2.1.0,<2.2.0a0``
   :depends glfw: ``>=3.4,<4.0a0``
   :depends libegl: ``>=1.7.0,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libgl: ``>=1.7.0,<2.0a0``
   :depends libgles: ``>=1.7.0,<2.0a0``
   :depends libglx: ``>=1.7.0,<2.0a0``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libxcb: ``>=1.17.0,<2.0a0``
   :depends mesalib: ``>=25.0.5,<25.1.0a0``
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

      mamba install voronota

   and update with::

      mamba update voronota

  To create a new environment, run::

      mamba create --name myenvname voronota

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/voronota:<tag>

   (see `voronota/tags`_ for valid values for ``<tag>``)


.. |downloads_voronota| image:: https://img.shields.io/conda/dn/bioconda/voronota.svg?style=flat
   :target: https://anaconda.org/bioconda/voronota
   :alt:   (downloads)
.. |docker_voronota| image:: https://quay.io/repository/biocontainers/voronota/status
   :target: https://quay.io/repository/biocontainers/voronota
.. _`voronota/tags`: https://quay.io/repository/biocontainers/voronota?tab=tags


.. raw:: html

    <script>
        var package = "voronota";
        var versions = ["1.29.4370"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/voronota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/voronota/README.html