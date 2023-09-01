:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'acdc'
.. highlight: bash

acdc
====

.. conda:recipe:: acdc
   :replaces_section_title:
   :noindex:

   \(a\)utomated \(c\)ontamination \(d\)etection and \(c\)onfidence estimation for single\-cell genome data

   :homepage: https://github.com/mlux86/acdc
   :documentation: https://github.com/mlux86/acdc#readme
   
   :license: MIT / MIT
   :recipe: /`acdc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acdc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acdc/meta.yaml>`_

   


.. conda:package:: acdc

   |downloads_acdc| |docker_acdc|

   :versions:
      
      

      ``1.02-0``

      

   
   :depends boost-cpp: ``>=1.82.0,<1.82.1.0a0``
   :depends kraken: ``>=0.10.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install acdc

   and update with::

      mamba update acdc

  To create a new environment, run::

      mamba create --name myenvname acdc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/acdc:<tag>

   (see `acdc/tags`_ for valid values for ``<tag>``)


.. |downloads_acdc| image:: https://img.shields.io/conda/dn/bioconda/acdc.svg?style=flat
   :target: https://anaconda.org/bioconda/acdc
   :alt:   (downloads)
.. |docker_acdc| image:: https://quay.io/repository/biocontainers/acdc/status
   :target: https://quay.io/repository/biocontainers/acdc
.. _`acdc/tags`: https://quay.io/repository/biocontainers/acdc?tab=tags


.. raw:: html

    <script>
        var package = "acdc";
        var versions = ["1.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/acdc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/acdc/README.html