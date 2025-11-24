:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tortoize'
.. highlight: bash

tortoize
========

.. conda:recipe:: tortoize
   :replaces_section_title:
   :noindex:

   Application to calculate ramachandran z\-scores.

   :homepage: https://github.com/PDB-REDO/tortoize
   :documentation: https://github.com/PDB-REDO/tortoize/blob/trunk/doc/tortoize.pdf
   
   :license: BSD / BSD-2-Clause
   :recipe: /`tortoize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tortoize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tortoize/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.str.2020.08.005`

   Tortoize validates protein structure models by checking the Ramachandran plot and side\-chain rotamer
   distributions. Quality Z\-scores are given at the residue level and at the model level \(ramachandran\-z and
   torsions\-z\). Higher scores are better. To compare models or to describe the reliability of the model Z\-scores
   jackknife\- based standard deviations are also reported \(ramachandran\-jackknife\-sd and torsion\-jackknife\-sd\).



.. conda:package:: tortoize

   |downloads_tortoize| |docker_tortoize|

   :versions:
      
      

      ``2.0.16-0``,  ``2.0.15-1``,  ``2.0.15-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends dssp: ``>=4.5.6,<4.6.0a0``
   :depends libboost: ``>=1.86.0,<1.87.0a0``
   :depends libcifpp: ``>=8.0.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install tortoize

   and update with::

      mamba update tortoize

  To create a new environment, run::

      mamba create --name myenvname tortoize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tortoize:<tag>

   (see `tortoize/tags`_ for valid values for ``<tag>``)


.. |downloads_tortoize| image:: https://img.shields.io/conda/dn/bioconda/tortoize.svg?style=flat
   :target: https://anaconda.org/bioconda/tortoize
   :alt:   (downloads)
.. |docker_tortoize| image:: https://quay.io/repository/biocontainers/tortoize/status
   :target: https://quay.io/repository/biocontainers/tortoize
.. _`tortoize/tags`: https://quay.io/repository/biocontainers/tortoize?tab=tags


.. raw:: html

    <script>
        var package = "tortoize";
        var versions = ["2.0.16","2.0.15","2.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tortoize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tortoize/README.html