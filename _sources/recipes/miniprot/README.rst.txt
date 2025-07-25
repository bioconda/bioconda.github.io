:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miniprot'
.. highlight: bash

miniprot
========

.. conda:recipe:: miniprot
   :replaces_section_title:
   :noindex:

   Miniprot aligns a protein sequence against a genome with affine gap penalty\, splicing and frameshift. It is primarily intended for annotating protein\-coding genes in a new species using known genes from other species.

   :homepage: https://github.com/lh3/miniprot
   :documentation: https://lh3.github.io/miniprot/miniprot.html
   
   :license: MIT / MIT
   :recipe: /`miniprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniprot/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad014`, biotools: :biotools:`miniprot`, usegalaxy-eu: :usegalaxy-eu:`miniprot`, usegalaxy-eu: :usegalaxy-eu:`miniprot_index`

   


.. conda:package:: miniprot

   |downloads_miniprot| |docker_miniprot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18-0</code>,  <code>0.17-0</code>,  <code>0.16-0</code>,  <code>0.15-0</code>,  <code>0.14-0</code>,  <code>0.13-2</code>,  <code>0.13-1</code>,  <code>0.13-0</code>,  <code>0.12-0</code>,  </span></summary>
      

      ``0.18-0``,  ``0.17-0``,  ``0.16-0``,  ``0.15-0``,  ``0.14-0``,  ``0.13-2``,  ``0.13-1``,  ``0.13-0``,  ``0.12-0``,  ``0.11-2``,  ``0.11-1``,  ``0.11-0``,  ``0.10-0``,  ``0.9-0``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install miniprot

   and update with::

      mamba update miniprot

  To create a new environment, run::

      mamba create --name myenvname miniprot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/miniprot:<tag>

   (see `miniprot/tags`_ for valid values for ``<tag>``)


.. |downloads_miniprot| image:: https://img.shields.io/conda/dn/bioconda/miniprot.svg?style=flat
   :target: https://anaconda.org/bioconda/miniprot
   :alt:   (downloads)
.. |docker_miniprot| image:: https://quay.io/repository/biocontainers/miniprot/status
   :target: https://quay.io/repository/biocontainers/miniprot
.. _`miniprot/tags`: https://quay.io/repository/biocontainers/miniprot?tab=tags


.. raw:: html

    <script>
        var package = "miniprot";
        var versions = ["0.18","0.17","0.16","0.15","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miniprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miniprot/README.html