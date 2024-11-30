:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leviosam'
.. highlight: bash

leviosam
========

.. conda:recipe:: leviosam
   :replaces_section_title:
   :noindex:

   lift\-over of alignments for variant\-aware references

   :homepage: https://github.com/alshai/levioSAM
   :license: MIT
   :recipe: /`leviosam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam/meta.yaml>`_

   


.. conda:package:: leviosam

   |downloads_leviosam| |docker_leviosam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.2.1-2</code>,  <code>5.2.1-1</code>,  <code>5.2.1-0</code>,  <code>3.1.1-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``5.2.1-2``,  ``5.2.1-1``,  ``5.2.1-0``,  ``3.1.1-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends sdsl-lite: ``>=2.1.1``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install leviosam

   and update with::

      mamba update leviosam

  To create a new environment, run::

      mamba create --name myenvname leviosam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/leviosam:<tag>

   (see `leviosam/tags`_ for valid values for ``<tag>``)


.. |downloads_leviosam| image:: https://img.shields.io/conda/dn/bioconda/leviosam.svg?style=flat
   :target: https://anaconda.org/bioconda/leviosam
   :alt:   (downloads)
.. |docker_leviosam| image:: https://quay.io/repository/biocontainers/leviosam/status
   :target: https://quay.io/repository/biocontainers/leviosam
.. _`leviosam/tags`: https://quay.io/repository/biocontainers/leviosam?tab=tags


.. raw:: html

    <script>
        var package = "leviosam";
        var versions = ["5.2.1","5.2.1","5.2.1","3.1.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leviosam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leviosam/README.html