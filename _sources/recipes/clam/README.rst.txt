:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clam'
.. highlight: bash

clam
====

.. conda:recipe:: clam
   :replaces_section_title:
   :noindex:

   clam is a tool for classification of callable loci intervals\, and accurate estimation of population genetic statistics.

   :homepage: https://github.com/cademirch/clam
   :license: MIT / MIT
   :recipe: /`clam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clam/meta.yaml>`_

   


.. conda:package:: clam

   |downloads_clam| |docker_clam|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
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

      mamba install clam

   and update with::

      mamba update clam

  To create a new environment, run::

      mamba create --name myenvname clam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clam:<tag>

   (see `clam/tags`_ for valid values for ``<tag>``)


.. |downloads_clam| image:: https://img.shields.io/conda/dn/bioconda/clam.svg?style=flat
   :target: https://anaconda.org/bioconda/clam
   :alt:   (downloads)
.. |docker_clam| image:: https://quay.io/repository/biocontainers/clam/status
   :target: https://quay.io/repository/biocontainers/clam
.. _`clam/tags`: https://quay.io/repository/biocontainers/clam?tab=tags


.. raw:: html

    <script>
        var package = "clam";
        var versions = ["0.2.1","0.2.0","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clam/README.html