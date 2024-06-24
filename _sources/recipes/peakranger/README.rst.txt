:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peakranger'
.. highlight: bash

peakranger
==========

.. conda:recipe:: peakranger
   :replaces_section_title:
   :noindex:

   PeakRanger is a multi\-purporse software suite for analyzing next\-generation sequencing \(NGS\) data.

   :homepage: http://ranger.sourceforge.net
   :license: Artistic License 2.0
   :recipe: /`peakranger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakranger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakranger/meta.yaml>`_
   :links: biotools: :biotools:`peakranger`

   


.. conda:package:: peakranger

   |downloads_peakranger| |docker_peakranger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18-9</code>,  <code>1.18-8</code>,  <code>1.18-7</code>,  <code>1.18-6</code>,  <code>1.18-5</code>,  <code>1.18-4</code>,  <code>1.18-3</code>,  <code>1.18-2</code>,  <code>1.18-1</code>,  </span></summary>
      

      ``1.18-9``,  ``1.18-8``,  ``1.18-7``,  ``1.18-6``,  ``1.18-5``,  ``1.18-4``,  ``1.18-3``,  ``1.18-2``,  ``1.18-1``,  ``1.18-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends r-base: 
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

      mamba install peakranger

   and update with::

      mamba update peakranger

  To create a new environment, run::

      mamba create --name myenvname peakranger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peakranger:<tag>

   (see `peakranger/tags`_ for valid values for ``<tag>``)


.. |downloads_peakranger| image:: https://img.shields.io/conda/dn/bioconda/peakranger.svg?style=flat
   :target: https://anaconda.org/bioconda/peakranger
   :alt:   (downloads)
.. |docker_peakranger| image:: https://quay.io/repository/biocontainers/peakranger/status
   :target: https://quay.io/repository/biocontainers/peakranger
.. _`peakranger/tags`: https://quay.io/repository/biocontainers/peakranger?tab=tags


.. raw:: html

    <script>
        var package = "peakranger";
        var versions = ["1.18","1.18","1.18","1.18","1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakranger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakranger/README.html