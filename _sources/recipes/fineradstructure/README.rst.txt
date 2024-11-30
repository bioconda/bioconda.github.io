:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fineradstructure'
.. highlight: bash

fineradstructure
================

.. conda:recipe:: fineradstructure
   :replaces_section_title:
   :noindex:

   Inference of population structure from RAD datasets

   :homepage: http://cichlid.gurdon.cam.ac.uk/fineRADstructure.html
   :license: Attribution-NonCommercial-NoDerivs 3.0 Creative Commons Licence
   :recipe: /`fineradstructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fineradstructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fineradstructure/meta.yaml>`_

   


.. conda:package:: fineradstructure

   |downloads_fineradstructure| |docker_fineradstructure|

   :versions:
      
      

      ``0.3.2r109-6``,  ``0.3.2r109-5``,  ``0.3.2r109-4``,  ``0.3.2r109-3``,  ``0.3.2r109-2``,  ``0.3.2r109-1``,  ``0.3.2r109-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install fineradstructure

   and update with::

      mamba update fineradstructure

  To create a new environment, run::

      mamba create --name myenvname fineradstructure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fineradstructure:<tag>

   (see `fineradstructure/tags`_ for valid values for ``<tag>``)


.. |downloads_fineradstructure| image:: https://img.shields.io/conda/dn/bioconda/fineradstructure.svg?style=flat
   :target: https://anaconda.org/bioconda/fineradstructure
   :alt:   (downloads)
.. |docker_fineradstructure| image:: https://quay.io/repository/biocontainers/fineradstructure/status
   :target: https://quay.io/repository/biocontainers/fineradstructure
.. _`fineradstructure/tags`: https://quay.io/repository/biocontainers/fineradstructure?tab=tags


.. raw:: html

    <script>
        var package = "fineradstructure";
        var versions = ["0.3.2r109","0.3.2r109","0.3.2r109","0.3.2r109","0.3.2r109"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fineradstructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fineradstructure/README.html