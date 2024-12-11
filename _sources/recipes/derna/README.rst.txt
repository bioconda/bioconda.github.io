:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'derna'
.. highlight: bash

derna
=====

.. conda:recipe:: derna
   :replaces_section_title:
   :noindex:

   RNA sequence design for a target protein sequence.

   :homepage: https://github.com/elkebir-group/derna
   :documentation: https://github.com/elkebir-group/derna/blob/v1.0.4/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`derna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/derna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/derna/meta.yaml>`_

   


.. conda:package:: derna

   |downloads_derna| |docker_derna|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install derna

   and update with::

      mamba update derna

  To create a new environment, run::

      mamba create --name myenvname derna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/derna:<tag>

   (see `derna/tags`_ for valid values for ``<tag>``)


.. |downloads_derna| image:: https://img.shields.io/conda/dn/bioconda/derna.svg?style=flat
   :target: https://anaconda.org/bioconda/derna
   :alt:   (downloads)
.. |docker_derna| image:: https://quay.io/repository/biocontainers/derna/status
   :target: https://quay.io/repository/biocontainers/derna
.. _`derna/tags`: https://quay.io/repository/biocontainers/derna?tab=tags


.. raw:: html

    <script>
        var package = "derna";
        var versions = ["1.0.4","1.0.4","1.0.3","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/derna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/derna/README.html