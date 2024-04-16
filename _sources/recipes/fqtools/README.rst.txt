:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqtools'
.. highlight: bash

fqtools
=======

.. conda:recipe:: fqtools
   :replaces_section_title:
   :noindex:

   An efficient FASTQ manipulation suite.

   :homepage: https://github.com/alastair-droop/fqtools
   :license: GPLv3
   :recipe: /`fqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtools/meta.yaml>`_

   


.. conda:package:: fqtools

   |downloads_fqtools| |docker_fqtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0-12</code>,  <code>2.0-11</code>,  <code>2.0-10</code>,  <code>2.0-9</code>,  <code>2.0-8</code>,  <code>2.0-7</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  </span></summary>
      

      ``2.0-12``,  ``2.0-11``,  ``2.0-10``,  ``2.0-9``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install fqtools

   and update with::

      mamba update fqtools

  To create a new environment, run::

      mamba create --name myenvname fqtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fqtools:<tag>

   (see `fqtools/tags`_ for valid values for ``<tag>``)


.. |downloads_fqtools| image:: https://img.shields.io/conda/dn/bioconda/fqtools.svg?style=flat
   :target: https://anaconda.org/bioconda/fqtools
   :alt:   (downloads)
.. |docker_fqtools| image:: https://quay.io/repository/biocontainers/fqtools/status
   :target: https://quay.io/repository/biocontainers/fqtools
.. _`fqtools/tags`: https://quay.io/repository/biocontainers/fqtools?tab=tags


.. raw:: html

    <script>
        var package = "fqtools";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtools/README.html