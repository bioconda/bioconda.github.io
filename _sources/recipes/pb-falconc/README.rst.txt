:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-falconc'
.. highlight: bash

pb-falconc
==========

.. conda:recipe:: pb-falconc
   :replaces_section_title:
   :noindex:

   C utilities for PacBio assembly \(pbipa etc.\)

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-falconc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falconc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falconc/meta.yaml>`_

   


.. conda:package:: pb-falconc

   |downloads_pb-falconc| |docker_pb-falconc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15.0-2</code>,  <code>1.15.0-1</code>,  <code>1.15.0-0</code>,  <code>1.13.1-2</code>,  <code>1.13.1-1</code>,  <code>1.13.1-0</code>,  <code>1.10.3-0</code>,  <code>1.10.1-0</code>,  <code>0.1.2-1</code>,  </span></summary>
      

      ``1.15.0-2``,  ``1.15.0-1``,  ``1.15.0-0``,  ``1.13.1-2``,  ``1.13.1-1``,  ``1.13.1-0``,  ``1.10.3-0``,  ``1.10.1-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.13``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
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

      mamba install pb-falconc

   and update with::

      mamba update pb-falconc

  To create a new environment, run::

      mamba create --name myenvname pb-falconc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pb-falconc:<tag>

   (see `pb-falconc/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-falconc| image:: https://img.shields.io/conda/dn/bioconda/pb-falconc.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-falconc
   :alt:   (downloads)
.. |docker_pb-falconc| image:: https://quay.io/repository/biocontainers/pb-falconc/status
   :target: https://quay.io/repository/biocontainers/pb-falconc
.. _`pb-falconc/tags`: https://quay.io/repository/biocontainers/pb-falconc?tab=tags


.. raw:: html

    <script>
        var package = "pb-falconc";
        var versions = ["1.15.0","1.15.0","1.15.0","1.13.1","1.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-falconc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-falconc/README.html