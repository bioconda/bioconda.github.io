:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bammap2'
.. highlight: bash

bammap2
=======

.. conda:recipe:: bammap2
   :replaces_section_title:
   :noindex:

   A fast BAM file mapping tool

   :homepage: https://github.com/wangyibin/bammap2
   :license: BSD / BSD 3-Clause
   :recipe: /`bammap2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bammap2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bammap2/meta.yaml>`_

   


.. conda:package:: bammap2

   |downloads_bammap2| |docker_bammap2|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.1-0``

      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bammap2

   and update with::

      mamba update bammap2

  To create a new environment, run::

      mamba create --name myenvname bammap2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bammap2:<tag>

   (see `bammap2/tags`_ for valid values for ``<tag>``)


.. |downloads_bammap2| image:: https://img.shields.io/conda/dn/bioconda/bammap2.svg?style=flat
   :target: https://anaconda.org/bioconda/bammap2
   :alt:   (downloads)
.. |docker_bammap2| image:: https://quay.io/repository/biocontainers/bammap2/status
   :target: https://quay.io/repository/biocontainers/bammap2
.. _`bammap2/tags`: https://quay.io/repository/biocontainers/bammap2?tab=tags


.. raw:: html

    <script>
        var package = "bammap2";
        var versions = ["0.1.4","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bammap2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bammap2/README.html