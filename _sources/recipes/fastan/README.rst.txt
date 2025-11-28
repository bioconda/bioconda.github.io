:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastan'
.. highlight: bash

fastan
======

.. conda:recipe:: fastan
   :replaces_section_title:
   :noindex:

   Fast Tandem Repeat Finder.

   :homepage: https://github.com/thegenemyers/FASTAN
   :license: Custom
   :recipe: /`fastan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastan/meta.yaml>`_

   


.. conda:package:: fastan

   |downloads_fastan| |docker_fastan|

   :versions:
      
      

      

      

   
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

      mamba install fastan

   and update with::

      mamba update fastan

  To create a new environment, run::

      mamba create --name myenvname fastan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastan:<tag>

   (see `fastan/tags`_ for valid values for ``<tag>``)


.. |downloads_fastan| image:: https://img.shields.io/conda/dn/bioconda/fastan.svg?style=flat
   :target: https://anaconda.org/bioconda/fastan
   :alt:   (downloads)
.. |docker_fastan| image:: https://quay.io/repository/biocontainers/fastan/status
   :target: https://quay.io/repository/biocontainers/fastan
.. _`fastan/tags`: https://quay.io/repository/biocontainers/fastan?tab=tags


.. raw:: html

    <script>
        var package = "fastan";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastan/README.html