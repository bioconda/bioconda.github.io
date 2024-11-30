:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gxf2bed'
.. highlight: bash

gxf2bed
=======

.. conda:recipe:: gxf2bed
   :replaces_section_title:
   :noindex:

   Fastest GTF\/GFF\-to\-BED converter chilling around

   :homepage: https://github.com/alejandrogzi/gxf2bed
   :license: MIT / MIT
   :recipe: /`gxf2bed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gxf2bed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gxf2bed/meta.yaml>`_

   


.. conda:package:: gxf2bed

   |downloads_gxf2bed| |docker_gxf2bed|

   :versions:
      
      

      ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install gxf2bed

   and update with::

      mamba update gxf2bed

  To create a new environment, run::

      mamba create --name myenvname gxf2bed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gxf2bed:<tag>

   (see `gxf2bed/tags`_ for valid values for ``<tag>``)


.. |downloads_gxf2bed| image:: https://img.shields.io/conda/dn/bioconda/gxf2bed.svg?style=flat
   :target: https://anaconda.org/bioconda/gxf2bed
   :alt:   (downloads)
.. |docker_gxf2bed| image:: https://quay.io/repository/biocontainers/gxf2bed/status
   :target: https://quay.io/repository/biocontainers/gxf2bed
.. _`gxf2bed/tags`: https://quay.io/repository/biocontainers/gxf2bed?tab=tags


.. raw:: html

    <script>
        var package = "gxf2bed";
        var versions = ["0.2.3","0.2.3","0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gxf2bed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gxf2bed/README.html