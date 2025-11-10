:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimick'
.. highlight: bash

mimick
======

.. conda:recipe:: mimick
   :replaces_section_title:
   :noindex:

   Simulate linked\-read data

   :homepage: https://github.com/pdimens/mimick
   :documentation: https://pdimens.github.io/mimick
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mimick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimick/meta.yaml>`_

   Mimick\, formerly known as XENIA from the VISOR project\, is a simple but effective way of
   simulating linked\-read FASTQ data \(10x\, haplotagging\, stlfr\, tellseq\). Mimick allows
   you to simulate an arbitrary number of haplotypes\, set overall coverage\, molecule coverage\,
   and mix\-match barcodes with linked\-read chemistries.



.. conda:package:: mimick

   |downloads_mimick| |docker_mimick|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0-0</code>,  <code>2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0.1-0</code>,  <code>2.0-0</code>,  <code>1.3-0</code>,  </span></summary>
      

      ``3.0-0``,  ``2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=8``
   :depends numpy: ``>=1.15.3``
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.11``
   :depends pywgsim: ``>=0.6``
   :depends rich-click: ``>=1.8``
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

      mamba install mimick

   and update with::

      mamba update mimick

  To create a new environment, run::

      mamba create --name myenvname mimick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mimick:<tag>

   (see `mimick/tags`_ for valid values for ``<tag>``)


.. |downloads_mimick| image:: https://img.shields.io/conda/dn/bioconda/mimick.svg?style=flat
   :target: https://anaconda.org/bioconda/mimick
   :alt:   (downloads)
.. |docker_mimick| image:: https://quay.io/repository/biocontainers/mimick/status
   :target: https://quay.io/repository/biocontainers/mimick
.. _`mimick/tags`: https://quay.io/repository/biocontainers/mimick?tab=tags


.. raw:: html

    <script>
        var package = "mimick";
        var versions = ["3.0","2.3","2.2.2","2.2.1","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimick/README.html