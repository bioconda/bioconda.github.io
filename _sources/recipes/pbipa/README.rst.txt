:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbipa'
.. highlight: bash

pbipa
=====

.. conda:recipe:: pbipa
   :replaces_section_title:
   :noindex:

   Improved Phased Assembly

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pbipa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbipa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbipa/meta.yaml>`_

   


.. conda:package:: pbipa

   |downloads_pbipa| |docker_pbipa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.5.0-3</code>,  <code>1.5.0-2</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends minimap2: 
   :depends networkx: 
   :depends pb-falconc: ``>=1.15``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends racon: 
   :depends samtools: ``>=1.15``
   :depends snakemake-minimal: ``>=7.0.4``
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

      mamba install pbipa

   and update with::

      mamba update pbipa

  To create a new environment, run::

      mamba create --name myenvname pbipa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbipa:<tag>

   (see `pbipa/tags`_ for valid values for ``<tag>``)


.. |downloads_pbipa| image:: https://img.shields.io/conda/dn/bioconda/pbipa.svg?style=flat
   :target: https://anaconda.org/bioconda/pbipa
   :alt:   (downloads)
.. |docker_pbipa| image:: https://quay.io/repository/biocontainers/pbipa/status
   :target: https://quay.io/repository/biocontainers/pbipa
.. _`pbipa/tags`: https://quay.io/repository/biocontainers/pbipa?tab=tags


.. raw:: html

    <script>
        var package = "pbipa";
        var versions = ["1.8.0","1.8.0","1.8.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbipa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbipa/README.html