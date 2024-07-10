:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamtools'
.. highlight: bash

bamtools
========

.. conda:recipe:: bamtools
   :replaces_section_title:
   :noindex:

   C\+\+ API \& command\-line toolkit for working with BAM data

   :homepage: https://github.com/pezmaster31/bamtools
   :license: MIT
   :recipe: /`bamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtools/meta.yaml>`_
   :links: biotools: :biotools:`bamtools`

   


.. conda:package:: bamtools

   |downloads_bamtools| |docker_bamtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.2-4</code>,  <code>2.5.2-3</code>,  <code>2.5.2-2</code>,  <code>2.5.2-1</code>,  <code>2.5.2-0</code>,  <code>2.5.1-10</code>,  <code>2.5.1-9</code>,  <code>2.5.1-7</code>,  <code>2.5.1-6</code>,  </span></summary>
      

      ``2.5.2-4``,  ``2.5.2-3``,  ``2.5.2-2``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-10``,  ``2.5.1-9``,  ``2.5.1-7``,  ``2.5.1-6``,  ``2.5.1-5``,  ``2.5.1-4``,  ``2.5.1-3``,  ``2.5.1-2``,  ``2.5.1-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=16``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install bamtools

   and update with::

      mamba update bamtools

  To create a new environment, run::

      mamba create --name myenvname bamtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamtools:<tag>

   (see `bamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bamtools| image:: https://img.shields.io/conda/dn/bioconda/bamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bamtools
   :alt:   (downloads)
.. |docker_bamtools| image:: https://quay.io/repository/biocontainers/bamtools/status
   :target: https://quay.io/repository/biocontainers/bamtools
.. _`bamtools/tags`: https://quay.io/repository/biocontainers/bamtools?tab=tags


.. raw:: html

    <script>
        var package = "bamtools";
        var versions = ["2.5.2","2.5.2","2.5.2","2.5.2","2.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamtools/README.html