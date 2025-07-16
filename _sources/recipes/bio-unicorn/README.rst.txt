:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio-unicorn'
.. highlight: bash

bio-unicorn
===========

.. conda:recipe:: bio-unicorn
   :replaces_section_title:
   :noindex:

   A tool for computing statistics on short read alignments.

   :homepage: https://github.com/GeoGenetics/unicorn
   :documentation: https://github.com/GeoGenetics/unicorn/blob/v1.0.0/README.md
   
   :license: MIT / MIT
   :recipe: /`bio-unicorn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-unicorn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-unicorn/meta.yaml>`_

   


.. conda:package:: bio-unicorn

   |downloads_bio-unicorn| |docker_bio-unicorn|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends htslib: ``>=1.10``
   :depends htslib: ``>=1.22.1,<1.23.0a0``
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

      mamba install bio-unicorn

   and update with::

      mamba update bio-unicorn

  To create a new environment, run::

      mamba create --name myenvname bio-unicorn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bio-unicorn:<tag>

   (see `bio-unicorn/tags`_ for valid values for ``<tag>``)


.. |downloads_bio-unicorn| image:: https://img.shields.io/conda/dn/bioconda/bio-unicorn.svg?style=flat
   :target: https://anaconda.org/bioconda/bio-unicorn
   :alt:   (downloads)
.. |docker_bio-unicorn| image:: https://quay.io/repository/biocontainers/bio-unicorn/status
   :target: https://quay.io/repository/biocontainers/bio-unicorn
.. _`bio-unicorn/tags`: https://quay.io/repository/biocontainers/bio-unicorn?tab=tags


.. raw:: html

    <script>
        var package = "bio-unicorn";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio-unicorn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio-unicorn/README.html