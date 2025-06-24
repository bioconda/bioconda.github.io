:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio-ripser'
.. highlight: bash

bio-ripser
==========

.. conda:recipe:: bio-ripser
   :replaces_section_title:
   :noindex:

   Ripser\: efficient computation of Vietoris–Rips persistence barcodes.

   :homepage: https://ripser.org
   :documentation: https://github.com/Ripser/ripser/blob/v1.2.1/README.md
   
   :developer docs: https://github.com/Ripser/ripser
   :license: MIT / MIT
   :recipe: /`bio-ripser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ripser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ripser/meta.yaml>`_

   


.. conda:package:: bio-ripser

   |downloads_bio-ripser| |docker_bio-ripser|

   :versions:
      
      

      ``1.2.1-0``

      

   
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

      mamba install bio-ripser

   and update with::

      mamba update bio-ripser

  To create a new environment, run::

      mamba create --name myenvname bio-ripser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bio-ripser:<tag>

   (see `bio-ripser/tags`_ for valid values for ``<tag>``)


.. |downloads_bio-ripser| image:: https://img.shields.io/conda/dn/bioconda/bio-ripser.svg?style=flat
   :target: https://anaconda.org/bioconda/bio-ripser
   :alt:   (downloads)
.. |docker_bio-ripser| image:: https://quay.io/repository/biocontainers/bio-ripser/status
   :target: https://quay.io/repository/biocontainers/bio-ripser
.. _`bio-ripser/tags`: https://quay.io/repository/biocontainers/bio-ripser?tab=tags


.. raw:: html

    <script>
        var package = "bio-ripser";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio-ripser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio-ripser/README.html