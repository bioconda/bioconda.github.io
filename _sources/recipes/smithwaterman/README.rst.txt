:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smithwaterman'
.. highlight: bash

smithwaterman
=============

.. conda:recipe:: smithwaterman
   :replaces_section_title:
   :noindex:

   Smith\-waterman\-gotoh alignment algorithm.

   :homepage: https://github.com/ekg/smithwaterman
   :license: MIT / MIT
   :recipe: /`smithwaterman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smithwaterman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smithwaterman/meta.yaml>`_

   


.. conda:package:: smithwaterman

   |downloads_smithwaterman| |docker_smithwaterman|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install smithwaterman

   and update with::

      mamba update smithwaterman

  To create a new environment, run::

      mamba create --name myenvname smithwaterman

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smithwaterman:<tag>

   (see `smithwaterman/tags`_ for valid values for ``<tag>``)


.. |downloads_smithwaterman| image:: https://img.shields.io/conda/dn/bioconda/smithwaterman.svg?style=flat
   :target: https://anaconda.org/bioconda/smithwaterman
   :alt:   (downloads)
.. |docker_smithwaterman| image:: https://quay.io/repository/biocontainers/smithwaterman/status
   :target: https://quay.io/repository/biocontainers/smithwaterman
.. _`smithwaterman/tags`: https://quay.io/repository/biocontainers/smithwaterman?tab=tags


.. raw:: html

    <script>
        var package = "smithwaterman";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smithwaterman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smithwaterman/README.html