:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssm'
.. highlight: bash

ssm
===

.. conda:recipe:: ssm
   :replaces_section_title:
   :noindex:

   Secondary\-structure matching\, tool for fast protein structure alignment

   :homepage: https://www.ccp4.ac.uk
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`ssm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssm/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444904026460`

   SSM is a macromolecular coordinate superposition library\, written by Eugene Krissinel of the EBI.
   The library implements the SSM algorithm of protein structure comparison in three dimensions\,
   which includes an original procedure of matching graphs built on the protein\'s secondary\-structure elements\,
   followed by an iterative three\-dimensional alignment of protein backbone Calpha atoms.



.. conda:package:: ssm

   |downloads_ssm| |docker_ssm|

   :versions:
      
      

      ``1.4-0``

      

   
   :depends libccp4: ``>=8.0.0,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends mmdb2: ``>=2.0.22,<3.0a0``
   :depends pkg-config: 
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

      mamba install ssm

   and update with::

      mamba update ssm

  To create a new environment, run::

      mamba create --name myenvname ssm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ssm:<tag>

   (see `ssm/tags`_ for valid values for ``<tag>``)


.. |downloads_ssm| image:: https://img.shields.io/conda/dn/bioconda/ssm.svg?style=flat
   :target: https://anaconda.org/bioconda/ssm
   :alt:   (downloads)
.. |docker_ssm| image:: https://quay.io/repository/biocontainers/ssm/status
   :target: https://quay.io/repository/biocontainers/ssm
.. _`ssm/tags`: https://quay.io/repository/biocontainers/ssm?tab=tags


.. raw:: html

    <script>
        var package = "ssm";
        var versions = ["1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssm/README.html