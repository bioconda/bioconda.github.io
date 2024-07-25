:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unicycler'
.. highlight: bash

unicycler
=========

.. conda:recipe:: unicycler
   :replaces_section_title:
   :noindex:

   Hybrid assembly pipeline for bacterial genomes

   :homepage: https://github.com/rrwick/Unicycler
   :license: GPL / GPL-3.0
   :recipe: /`unicycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicycler/meta.yaml>`_
   :links: biotools: :biotools:`unicycler`, usegalaxy-eu: :usegalaxy-eu:`unicycler`

   


.. conda:package:: unicycler

   |downloads_unicycler| |docker_unicycler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.5.0-5</code>,  <code>0.5.0-4</code>,  <code>0.5.0-3</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.8-5</code>,  <code>0.4.8-4</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.5.0-5``,  ``0.5.0-4``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.8-5``,  ``0.4.8-4``,  ``0.4.8-3``,  ``0.4.8-2``,  ``0.4.8-1``,  ``0.4.8-0``,  ``0.4.7-1``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.4-7``,  ``0.4.4-6``,  ``0.4.4-5``,  ``0.4.4-4``,  ``0.4.4-3``,  ``0.4.4-2``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.1-0``,  ``0.3.0b-1``,  ``0.3.0b-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends miniasm: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends racon: 
   :depends spades: ``>=3.15.4,<4``
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

      mamba install unicycler

   and update with::

      mamba update unicycler

  To create a new environment, run::

      mamba create --name myenvname unicycler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unicycler:<tag>

   (see `unicycler/tags`_ for valid values for ``<tag>``)


.. |downloads_unicycler| image:: https://img.shields.io/conda/dn/bioconda/unicycler.svg?style=flat
   :target: https://anaconda.org/bioconda/unicycler
   :alt:   (downloads)
.. |docker_unicycler| image:: https://quay.io/repository/biocontainers/unicycler/status
   :target: https://quay.io/repository/biocontainers/unicycler
.. _`unicycler/tags`: https://quay.io/repository/biocontainers/unicycler?tab=tags


.. raw:: html

    <script>
        var package = "unicycler";
        var versions = ["0.5.1","0.5.0","0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unicycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unicycler/README.html