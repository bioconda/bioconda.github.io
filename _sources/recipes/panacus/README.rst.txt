:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panacus'
.. highlight: bash

panacus
=======

.. conda:recipe:: panacus
   :replaces_section_title:
   :noindex:

   panacus is a tool for computing counting statistics for GFA files.

   :homepage: https://github.com/marschall-lab/panacus
   :license: MIT / MIT
   :recipe: /`panacus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacus/meta.yaml>`_

   


.. conda:package:: panacus

   |downloads_panacus| |docker_panacus|

   :versions:
      
      

      ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-2``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn-base: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install panacus

   and update with::

      mamba update panacus

  To create a new environment, run::

      mamba create --name myenvname panacus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panacus:<tag>

   (see `panacus/tags`_ for valid values for ``<tag>``)


.. |downloads_panacus| image:: https://img.shields.io/conda/dn/bioconda/panacus.svg?style=flat
   :target: https://anaconda.org/bioconda/panacus
   :alt:   (downloads)
.. |docker_panacus| image:: https://quay.io/repository/biocontainers/panacus/status
   :target: https://quay.io/repository/biocontainers/panacus
.. _`panacus/tags`: https://quay.io/repository/biocontainers/panacus?tab=tags


.. raw:: html

    <script>
        var package = "panacus";
        var versions = ["0.2.5","0.2.5","0.2.4","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panacus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panacus/README.html