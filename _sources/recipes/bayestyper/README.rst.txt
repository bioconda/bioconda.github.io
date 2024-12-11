:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayestyper'
.. highlight: bash

bayestyper
==========

.. conda:recipe:: bayestyper
   :replaces_section_title:
   :noindex:

   A method for variant graph genotyping based on exact alignment of k\-mers.

   :homepage: https://github.com/bioinformatics-centre/BayesTyper
   :documentation: https://github.com/bioinformatics-centre/BayesTyper/blob/v1.5/README.md
   
   :license: MIT / MIT
   :recipe: /`bayestyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayestyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayestyper/meta.yaml>`_
   :links: biotools: :biotools:`bayestyper`, doi: :doi:`10.1038/s41588-018-0145-5`

   


.. conda:package:: bayestyper

   |downloads_bayestyper| |docker_bayestyper|

   :versions:
      
      

      ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-0``

      

   
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install bayestyper

   and update with::

      mamba update bayestyper

  To create a new environment, run::

      mamba create --name myenvname bayestyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bayestyper:<tag>

   (see `bayestyper/tags`_ for valid values for ``<tag>``)


.. |downloads_bayestyper| image:: https://img.shields.io/conda/dn/bioconda/bayestyper.svg?style=flat
   :target: https://anaconda.org/bioconda/bayestyper
   :alt:   (downloads)
.. |docker_bayestyper| image:: https://quay.io/repository/biocontainers/bayestyper/status
   :target: https://quay.io/repository/biocontainers/bayestyper
.. _`bayestyper/tags`: https://quay.io/repository/biocontainers/bayestyper?tab=tags


.. raw:: html

    <script>
        var package = "bayestyper";
        var versions = ["1.5","1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayestyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayestyper/README.html