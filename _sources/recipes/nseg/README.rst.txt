:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nseg'
.. highlight: bash

nseg
====

.. conda:recipe:: nseg
   :replaces_section_title:
   :noindex:

   nseg identifies and masks regions of low complexity in nucleic acid sequences.

   :homepage: https://github.com/jebrosen/nseg
   :license: Public Domain
   :recipe: /`nseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nseg/meta.yaml>`_
   :links: doi: :doi:`10.1016/0097-8485(93)85006-X`

   


.. conda:package:: nseg

   |downloads_nseg| |docker_nseg|

   :versions:
      
      

      ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc: ``>=12``
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

      mamba install nseg

   and update with::

      mamba update nseg

  To create a new environment, run::

      mamba create --name myenvname nseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nseg:<tag>

   (see `nseg/tags`_ for valid values for ``<tag>``)


.. |downloads_nseg| image:: https://img.shields.io/conda/dn/bioconda/nseg.svg?style=flat
   :target: https://anaconda.org/bioconda/nseg
   :alt:   (downloads)
.. |docker_nseg| image:: https://quay.io/repository/biocontainers/nseg/status
   :target: https://quay.io/repository/biocontainers/nseg
.. _`nseg/tags`: https://quay.io/repository/biocontainers/nseg?tab=tags


.. raw:: html

    <script>
        var package = "nseg";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nseg/README.html