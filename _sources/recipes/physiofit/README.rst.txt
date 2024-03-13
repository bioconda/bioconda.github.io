:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'physiofit'
.. highlight: bash

physiofit
=========

.. conda:recipe:: physiofit
   :replaces_section_title:
   :noindex:

   Calculate extracellular fluxes from metabolite concentrations and biomass data

   :homepage: https://github.com/MetaSys-LISBP/PhysioFit
   :documentation: https://physiofit.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`physiofit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.10.12.561695`

   


.. conda:package:: physiofit

   |downloads_physiofit| |docker_physiofit|

   :versions:
      
      

      ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-1``,  ``3.1.0-0``

      

   
   :depends matplotlib-base: ``>=3.7.1``
   :depends numpy: ``>=1.24.2``
   :depends pandas: ``>=2.0.1``
   :depends pyarrow: ``>=14.0.1,<15.0.0``
   :depends python: ``>=3.8,<3.9.7|>3.9.7,<3.12``
   :depends pyyaml: ``>=6.0.0``
   :depends scipy: ``>=1.10.1``
   :depends streamlit: ``>=1.20.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install physiofit

   and update with::

      mamba update physiofit

  To create a new environment, run::

      mamba create --name myenvname physiofit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/physiofit:<tag>

   (see `physiofit/tags`_ for valid values for ``<tag>``)


.. |downloads_physiofit| image:: https://img.shields.io/conda/dn/bioconda/physiofit.svg?style=flat
   :target: https://anaconda.org/bioconda/physiofit
   :alt:   (downloads)
.. |docker_physiofit| image:: https://quay.io/repository/biocontainers/physiofit/status
   :target: https://quay.io/repository/biocontainers/physiofit
.. _`physiofit/tags`: https://quay.io/repository/biocontainers/physiofit?tab=tags


.. raw:: html

    <script>
        var package = "physiofit";
        var versions = ["3.3.4","3.3.3","3.3.2","3.3.1","3.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/physiofit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/physiofit/README.html