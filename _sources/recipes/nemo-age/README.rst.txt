:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nemo-age'
.. highlight: bash

nemo-age
========

.. conda:recipe:: nemo-age
   :replaces_section_title:
   :noindex:

   In Nemo\-age\, it is possible to model genetic and phenotypic evolution in populations with\, for instance\, overlapping generations\, a seed bank\, and multiple age classes with stage\-specific transition rates\, fecundities\, selection pressures\, and dispersal rates\, among other things.

   :homepage: https://bitbucket.org/ecoevo/nemo-age-release
   :license: GPL3 / GPL-3
   :recipe: /`nemo-age <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo-age>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo-age/meta.yaml>`_

   


.. conda:package:: nemo-age

   |downloads_nemo-age| |docker_nemo-age|

   :versions:
      
      

      ``0.30.0-5``,  ``0.30.0-4``,  ``0.30.0-3``,  ``0.30.0-2``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.29.0-1``,  ``0.29.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install nemo-age

   and update with::

      mamba update nemo-age

  To create a new environment, run::

      mamba create --name myenvname nemo-age

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nemo-age:<tag>

   (see `nemo-age/tags`_ for valid values for ``<tag>``)


.. |downloads_nemo-age| image:: https://img.shields.io/conda/dn/bioconda/nemo-age.svg?style=flat
   :target: https://anaconda.org/bioconda/nemo-age
   :alt:   (downloads)
.. |docker_nemo-age| image:: https://quay.io/repository/biocontainers/nemo-age/status
   :target: https://quay.io/repository/biocontainers/nemo-age
.. _`nemo-age/tags`: https://quay.io/repository/biocontainers/nemo-age?tab=tags


.. raw:: html

    <script>
        var package = "nemo-age";
        var versions = ["0.30.0","0.30.0","0.30.0","0.30.0","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nemo-age/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nemo-age/README.html