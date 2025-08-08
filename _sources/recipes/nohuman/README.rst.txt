:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nohuman'
.. highlight: bash

nohuman
=======

.. conda:recipe:: nohuman
   :replaces_section_title:
   :noindex:

   Remove human reads from a sequencing run.

   :homepage: https://github.com/mbhall88/nohuman
   :documentation: https://github.com/mbhall88/nohuman/blob/0.4.0/README.md
   
   :license: MIT / MIT
   :recipe: /`nohuman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nohuman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nohuman/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giae010`

   


.. conda:package:: nohuman

   |downloads_nohuman| |docker_nohuman|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends kraken2: ``2.1.6.*``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
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

      mamba install nohuman

   and update with::

      mamba update nohuman

  To create a new environment, run::

      mamba create --name myenvname nohuman

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nohuman:<tag>

   (see `nohuman/tags`_ for valid values for ``<tag>``)


.. |downloads_nohuman| image:: https://img.shields.io/conda/dn/bioconda/nohuman.svg?style=flat
   :target: https://anaconda.org/bioconda/nohuman
   :alt:   (downloads)
.. |docker_nohuman| image:: https://quay.io/repository/biocontainers/nohuman/status
   :target: https://quay.io/repository/biocontainers/nohuman
.. _`nohuman/tags`: https://quay.io/repository/biocontainers/nohuman?tab=tags


.. raw:: html

    <script>
        var package = "nohuman";
        var versions = ["0.4.0","0.3.0","0.3.0","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nohuman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nohuman/README.html