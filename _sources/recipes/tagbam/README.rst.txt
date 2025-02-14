:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagbam'
.. highlight: bash

tagbam
======

.. conda:recipe:: tagbam
   :replaces_section_title:
   :noindex:

   A tool for tagging BAM files.

   :homepage: https://github.com/fellen31/tagbam
   :license: MIT
   :recipe: /`tagbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagbam/meta.yaml>`_

   


.. conda:package:: tagbam

   |downloads_tagbam| |docker_tagbam|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install tagbam

   and update with::

      mamba update tagbam

  To create a new environment, run::

      mamba create --name myenvname tagbam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tagbam:<tag>

   (see `tagbam/tags`_ for valid values for ``<tag>``)


.. |downloads_tagbam| image:: https://img.shields.io/conda/dn/bioconda/tagbam.svg?style=flat
   :target: https://anaconda.org/bioconda/tagbam
   :alt:   (downloads)
.. |docker_tagbam| image:: https://quay.io/repository/biocontainers/tagbam/status
   :target: https://quay.io/repository/biocontainers/tagbam
.. _`tagbam/tags`: https://quay.io/repository/biocontainers/tagbam?tab=tags


.. raw:: html

    <script>
        var package = "tagbam";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagbam/README.html