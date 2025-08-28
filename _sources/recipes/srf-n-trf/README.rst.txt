:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srf-n-trf'
.. highlight: bash

srf-n-trf
=========

.. conda:recipe:: srf-n-trf
   :replaces_section_title:
   :noindex:

   Extract specific monomers\, motifs\, and regions from srf and trf output

   :homepage: https://github.com/koisland/srf-n-trf
   :license: MIT / MIT
   :recipe: /`srf-n-trf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srf-n-trf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srf-n-trf/meta.yaml>`_

   


.. conda:package:: srf-n-trf

   |downloads_srf-n-trf| |docker_srf-n-trf|

   :versions:
      
      

      ``0.1.1-0``

      

   
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

      mamba install srf-n-trf

   and update with::

      mamba update srf-n-trf

  To create a new environment, run::

      mamba create --name myenvname srf-n-trf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/srf-n-trf:<tag>

   (see `srf-n-trf/tags`_ for valid values for ``<tag>``)


.. |downloads_srf-n-trf| image:: https://img.shields.io/conda/dn/bioconda/srf-n-trf.svg?style=flat
   :target: https://anaconda.org/bioconda/srf-n-trf
   :alt:   (downloads)
.. |docker_srf-n-trf| image:: https://quay.io/repository/biocontainers/srf-n-trf/status
   :target: https://quay.io/repository/biocontainers/srf-n-trf
.. _`srf-n-trf/tags`: https://quay.io/repository/biocontainers/srf-n-trf?tab=tags


.. raw:: html

    <script>
        var package = "srf-n-trf";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srf-n-trf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srf-n-trf/README.html