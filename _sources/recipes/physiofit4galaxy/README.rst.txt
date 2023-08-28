:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'physiofit4galaxy'
.. highlight: bash

physiofit4galaxy
================

.. conda:recipe:: physiofit4galaxy
   :replaces_section_title:
   :noindex:

   Calculate extracellular fluxes from metabolite concentrations and biomass data

   :homepage: https://github.com/MetaSys-LISBP/PhysioFit4Galaxy
   :license: GPL-3.0
   :recipe: /`physiofit4galaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit4galaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit4galaxy/meta.yaml>`_

   


.. conda:package:: physiofit4galaxy

   |downloads_physiofit4galaxy| |docker_physiofit4galaxy|

   :versions:
      
      

      ``2.2.1-1``,  ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.4-0``

      

   
   :depends matplotlib-base: ``>=3.5.2``
   :depends numpy: ``>=1.21.6``
   :depends openpyxl: ``>=3.0.9``
   :depends pandas: ``>=1.3.5``
   :depends python: ``>=3.7``
   :depends scipy: ``>=1.7.3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install physiofit4galaxy

   and update with::

      mamba update physiofit4galaxy

  To create a new environment, run::

      mamba create --name myenvname physiofit4galaxy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/physiofit4galaxy:<tag>

   (see `physiofit4galaxy/tags`_ for valid values for ``<tag>``)


.. |downloads_physiofit4galaxy| image:: https://img.shields.io/conda/dn/bioconda/physiofit4galaxy.svg?style=flat
   :target: https://anaconda.org/bioconda/physiofit4galaxy
   :alt:   (downloads)
.. |docker_physiofit4galaxy| image:: https://quay.io/repository/biocontainers/physiofit4galaxy/status
   :target: https://quay.io/repository/biocontainers/physiofit4galaxy
.. _`physiofit4galaxy/tags`: https://quay.io/repository/biocontainers/physiofit4galaxy?tab=tags


.. raw:: html

    <script>
        var package = "physiofit4galaxy";
        var versions = ["2.2.1","2.2.1","2.1.0","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/physiofit4galaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/physiofit4galaxy/README.html