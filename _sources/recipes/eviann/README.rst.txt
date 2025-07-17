:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eviann'
.. highlight: bash

eviann
======

.. conda:recipe:: eviann
   :replaces_section_title:
   :noindex:

   Evidence\-based eukaryotic genome annotation software.

   :homepage: https://github.com/alekseyzimin/EviAnn_release
   :documentation: https://github.com/alekseyzimin/EviAnn_release/blob/v2.0.3/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`eviann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eviann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eviann/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.05.07.652745v1`

   


.. conda:package:: eviann

   |downloads_eviann| |docker_eviann|

   :versions:
      
      

      ``2.0.3-0``

      

   
   :depends blast: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends hisat2: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends minimap2: 
   :depends miniprot: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends samtools: 
   :depends stringtie: 
   :depends wget: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install eviann

   and update with::

      mamba update eviann

  To create a new environment, run::

      mamba create --name myenvname eviann

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eviann:<tag>

   (see `eviann/tags`_ for valid values for ``<tag>``)


.. |downloads_eviann| image:: https://img.shields.io/conda/dn/bioconda/eviann.svg?style=flat
   :target: https://anaconda.org/bioconda/eviann
   :alt:   (downloads)
.. |docker_eviann| image:: https://quay.io/repository/biocontainers/eviann/status
   :target: https://quay.io/repository/biocontainers/eviann
.. _`eviann/tags`: https://quay.io/repository/biocontainers/eviann?tab=tags


.. raw:: html

    <script>
        var package = "eviann";
        var versions = ["2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eviann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eviann/README.html