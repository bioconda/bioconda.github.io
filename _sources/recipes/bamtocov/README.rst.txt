:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamtocov'
.. highlight: bash

bamtocov
========

.. conda:recipe:: bamtocov
   :replaces_section_title:
   :noindex:

   Extract coverage information from BAM files\, supporting stranded and physical coverage and streams.

   :homepage: https://github.com/telatin/bamtocov
   :license: MIT
   :recipe: /`bamtocov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtocov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamtocov/meta.yaml>`_
   :links: biotools: :biotools:`bamtocov`, doi: :doi:`10.3390/bioengineering8050059`

   A collection of tools to extract coverage information from BAM and CRAM files\,
   supporting target \(BED\, GFF\) and reporting the output in bedGraph \(BED\) or WIG format.



.. conda:package:: bamtocov

   |downloads_bamtocov| |docker_bamtocov|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-2</code>,  <code>2.7.0-1</code>,  <code>2.7.0-0</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.7.0-2``,  ``2.7.0-1``,  ``2.7.0-0``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.4-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.001-0``,  ``2.0.000-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
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

      mamba install bamtocov

   and update with::

      mamba update bamtocov

  To create a new environment, run::

      mamba create --name myenvname bamtocov

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamtocov:<tag>

   (see `bamtocov/tags`_ for valid values for ``<tag>``)


.. |downloads_bamtocov| image:: https://img.shields.io/conda/dn/bioconda/bamtocov.svg?style=flat
   :target: https://anaconda.org/bioconda/bamtocov
   :alt:   (downloads)
.. |docker_bamtocov| image:: https://quay.io/repository/biocontainers/bamtocov/status
   :target: https://quay.io/repository/biocontainers/bamtocov
.. _`bamtocov/tags`: https://quay.io/repository/biocontainers/bamtocov?tab=tags


.. raw:: html

    <script>
        var package = "bamtocov";
        var versions = ["2.7.0","2.7.0","2.7.0","2.6.1","2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamtocov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamtocov/README.html