:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretextannotate'
.. highlight: bash

pretextannotate
===============

.. conda:recipe:: pretextannotate
   :replaces_section_title:
   :noindex:

   A package to annotate a pretext snapshot with size and chromosome information

   :homepage: https://github.com/sanger-tol/pretextannotate
   :license: MIT
   :recipe: /`pretextannotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextannotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextannotate/meta.yaml>`_

   This package uses API calls to NCBI to retrieve chromosome length data
   \(this can instead be given on the CLI\). This data is then used to annotate
   a pretext snapshot with chromosome names and sizes.



.. conda:package:: pretextannotate

   |downloads_pretextannotate| |docker_pretextannotate|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.0-0``

      

   
   :depends pillow: ``>=12.1.0``
   :depends python: ``>=3.12``
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

      mamba install pretextannotate

   and update with::

      mamba update pretextannotate

  To create a new environment, run::

      mamba create --name myenvname pretextannotate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pretextannotate:<tag>

   (see `pretextannotate/tags`_ for valid values for ``<tag>``)


.. |downloads_pretextannotate| image:: https://img.shields.io/conda/dn/bioconda/pretextannotate.svg?style=flat
   :target: https://anaconda.org/bioconda/pretextannotate
   :alt:   (downloads)
.. |docker_pretextannotate| image:: https://quay.io/repository/biocontainers/pretextannotate/status
   :target: https://quay.io/repository/biocontainers/pretextannotate
.. _`pretextannotate/tags`: https://quay.io/repository/biocontainers/pretextannotate?tab=tags


.. raw:: html

    <script>
        var package = "pretextannotate";
        var versions = ["1.1.2","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretextannotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretextannotate/README.html