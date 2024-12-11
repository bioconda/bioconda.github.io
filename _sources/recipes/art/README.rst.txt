:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'art'
.. highlight: bash

art
===

.. conda:recipe:: art
   :replaces_section_title:
   :noindex:

   Illumina\, 454 and Solid read simulator

   :homepage: http://www.niehs.nih.gov/research/resources/software/biostatistics/art/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`art <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art/meta.yaml>`_

   


.. conda:package:: art

   |downloads_art| |docker_art|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2016.06.05-13</code>,  <code>2016.06.05-12</code>,  <code>2016.06.05-11</code>,  <code>2016.06.05-9</code>,  <code>2016.06.05-8</code>,  <code>2016.06.05-7</code>,  <code>2016.06.05-6</code>,  <code>2016.06.05-5</code>,  <code>2016.06.05-4</code>,  </span></summary>
      

      ``2016.06.05-13``,  ``2016.06.05-12``,  ``2016.06.05-11``,  ``2016.06.05-9``,  ``2016.06.05-8``,  ``2016.06.05-7``,  ``2016.06.05-6``,  ``2016.06.05-5``,  ``2016.06.05-4``,  ``2016.06.05-3``,  ``2016.06.05-2``,  ``2016.06.05-1``,  ``2016.06.05-0``,  ``3.19.15-1``,  ``3.11.14-1``,  ``3.11.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install art

   and update with::

      mamba update art

  To create a new environment, run::

      mamba create --name myenvname art

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/art:<tag>

   (see `art/tags`_ for valid values for ``<tag>``)


.. |downloads_art| image:: https://img.shields.io/conda/dn/bioconda/art.svg?style=flat
   :target: https://anaconda.org/bioconda/art
   :alt:   (downloads)
.. |docker_art| image:: https://quay.io/repository/biocontainers/art/status
   :target: https://quay.io/repository/biocontainers/art
.. _`art/tags`: https://quay.io/repository/biocontainers/art?tab=tags


.. raw:: html

    <script>
        var package = "art";
        var versions = ["2016.06.05","2016.06.05","2016.06.05","2016.06.05","2016.06.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/art/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/art/README.html