:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gpsw'
.. highlight: bash

gpsw
====

.. conda:recipe:: gpsw
   :replaces_section_title:
   :noindex:

   GPSW is a tool for analysing Global Protein Stability Profiling data.

   :homepage: https://github.com/niekwit/gps-orfeome
   :documentation: https://gps-orfeome.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`gpsw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gpsw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gpsw/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.15473715`

   GPSW is a wrapper around a Snakemake workflow that analyses Global Protein Stability \(GPS\) Profiling data. GPS profiling is a powerfull genetic technique to study degron or protein stability at a massive scale in an unbiased manner.



.. conda:package:: gpsw

   |downloads_gpsw| |docker_gpsw|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.3-0``

      

   
   :depends apptainer: ``1.4.0``
   :depends conda: ``24.7.1``
   :depends numpy: ``2.2.6``
   :depends pandas: ``2.2.3``
   :depends pydot: ``3.0.4``
   :depends pygithub: ``2.6.1``
   :depends pygments: 
   :depends python: ``3.12``
   :depends snakemake-minimal: ``8.25.5``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gpsw

   and update with::

      mamba update gpsw

  To create a new environment, run::

      mamba create --name myenvname gpsw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gpsw:<tag>

   (see `gpsw/tags`_ for valid values for ``<tag>``)


.. |downloads_gpsw| image:: https://img.shields.io/conda/dn/bioconda/gpsw.svg?style=flat
   :target: https://anaconda.org/bioconda/gpsw
   :alt:   (downloads)
.. |docker_gpsw| image:: https://quay.io/repository/biocontainers/gpsw/status
   :target: https://quay.io/repository/biocontainers/gpsw
.. _`gpsw/tags`: https://quay.io/repository/biocontainers/gpsw?tab=tags


.. raw:: html

    <script>
        var package = "gpsw";
        var versions = ["0.7.0","0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gpsw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gpsw/README.html