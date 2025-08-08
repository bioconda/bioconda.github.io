:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gocr'
.. highlight: bash

gocr
====

.. conda:recipe:: gocr
   :replaces_section_title:
   :noindex:

   GOCR is an OCR \(Optical Character Recognition\) program.

   :homepage: https://jocr.sourceforge.net
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gocr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gocr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gocr/meta.yaml>`_

   


.. conda:package:: gocr

   |downloads_gocr| |docker_gocr|

   :versions:
      
      

      ``0.52-0``,  ``0.50-7``,  ``0.50-6``,  ``0.50-5``,  ``0.50-4``,  ``0.50-3``,  ``0.50-2``,  ``0.50-1``,  ``0.50-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install gocr

   and update with::

      mamba update gocr

  To create a new environment, run::

      mamba create --name myenvname gocr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gocr:<tag>

   (see `gocr/tags`_ for valid values for ``<tag>``)


.. |downloads_gocr| image:: https://img.shields.io/conda/dn/bioconda/gocr.svg?style=flat
   :target: https://anaconda.org/bioconda/gocr
   :alt:   (downloads)
.. |docker_gocr| image:: https://quay.io/repository/biocontainers/gocr/status
   :target: https://quay.io/repository/biocontainers/gocr
.. _`gocr/tags`: https://quay.io/repository/biocontainers/gocr?tab=tags


.. raw:: html

    <script>
        var package = "gocr";
        var versions = ["0.52","0.50","0.50","0.50","0.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gocr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gocr/README.html