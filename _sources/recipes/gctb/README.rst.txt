:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gctb'
.. highlight: bash

gctb
====

.. conda:recipe:: gctb
   :replaces_section_title:
   :noindex:

   GCTB \(Genome\-wide Complex Trait Bayesian \) is a software tool that comprises a family of Bayesian linear mixed models for complex trait analyses using genome\-wide SNPs.

   :homepage: https://cnsgenomics.com/software/gctb
   :license: MIT / MIT
   :recipe: /`gctb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gctb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gctb/meta.yaml>`_

   


.. conda:package:: gctb

   |downloads_gctb| |docker_gctb|

   :versions:
      
      

      ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends boost-cpp: 
   :depends eigen: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gctb

   and update with::

      mamba update gctb

  To create a new environment, run::

      mamba create --name myenvname gctb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gctb:<tag>

   (see `gctb/tags`_ for valid values for ``<tag>``)


.. |downloads_gctb| image:: https://img.shields.io/conda/dn/bioconda/gctb.svg?style=flat
   :target: https://anaconda.org/bioconda/gctb
   :alt:   (downloads)
.. |docker_gctb| image:: https://quay.io/repository/biocontainers/gctb/status
   :target: https://quay.io/repository/biocontainers/gctb
.. _`gctb/tags`: https://quay.io/repository/biocontainers/gctb?tab=tags


.. raw:: html

    <script>
        var package = "gctb";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gctb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gctb/README.html