:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'obitools'
.. highlight: bash

obitools
========

.. conda:recipe:: obitools
   :replaces_section_title:
   :noindex:

   The OBITools package is a set of programs specifically designed for analyzing NGS data in a DNA metabarcoding context\, taking into account taxonomic information

   :homepage: http://metabarcoding.org/obitools
   :license: CeCILL-V2
   :recipe: /`obitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obitools/meta.yaml>`_

   


.. conda:package:: obitools

   |downloads_obitools| |docker_obitools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.13-4</code>,  <code>1.2.13-3</code>,  <code>1.2.13-2</code>,  <code>1.2.13-1</code>,  <code>1.2.13-0</code>,  <code>1.2.11-1</code>,  <code>1.2.11-0</code>,  <code>1.2.10-2</code>,  <code>1.2.10-1</code>,  </span></summary>
      

      ``1.2.13-4``,  ``1.2.13-3``,  ``1.2.13-2``,  ``1.2.13-1``,  ``1.2.13-0``,  ``1.2.11-1``,  ``1.2.11-0``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.0.010-2``,  ``1.0.010-1``,  ``1.0.010-0``

      
      .. raw:: html

         </details>
      

   
   :depends ipython: ``>=3.0.0,<6.0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends xorg-libx11: 
   :depends xorg-libxau: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install obitools

   and update with::

      mamba update obitools

  To create a new environment, run::

      mamba create --name myenvname obitools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/obitools:<tag>

   (see `obitools/tags`_ for valid values for ``<tag>``)


.. |downloads_obitools| image:: https://img.shields.io/conda/dn/bioconda/obitools.svg?style=flat
   :target: https://anaconda.org/bioconda/obitools
   :alt:   (downloads)
.. |docker_obitools| image:: https://quay.io/repository/biocontainers/obitools/status
   :target: https://quay.io/repository/biocontainers/obitools
.. _`obitools/tags`: https://quay.io/repository/biocontainers/obitools?tab=tags


.. raw:: html

    <script>
        var package = "obitools";
        var versions = ["1.2.13","1.2.13","1.2.13","1.2.13","1.2.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/obitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/obitools/README.html