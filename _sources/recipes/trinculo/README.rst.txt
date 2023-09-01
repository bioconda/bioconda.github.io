:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trinculo'
.. highlight: bash

trinculo
========

.. conda:recipe:: trinculo
   :replaces_section_title:
   :noindex:

   A toolkit for carrying out genetic association for
   multi\-category phenotypes. Implements multinomial and ordinal
   association incorporating covariates\, conditional analysis\,
   empirical and non\-emperical priors and fine\-mapping.

   :homepage: https://sourceforge.net/projects/trinculo/
   :license: MIT
   :recipe: /`trinculo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinculo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinculo/meta.yaml>`_

   


.. conda:package:: trinculo

   |downloads_trinculo| |docker_trinculo|

   :versions:
      
      

      ``0.96-7``,  ``0.96-6``,  ``0.96-5``,  ``0.96-4``,  ``0.96-3``,  ``0.96-2``,  ``0.96-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install trinculo

   and update with::

      mamba update trinculo

  To create a new environment, run::

      mamba create --name myenvname trinculo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trinculo:<tag>

   (see `trinculo/tags`_ for valid values for ``<tag>``)


.. |downloads_trinculo| image:: https://img.shields.io/conda/dn/bioconda/trinculo.svg?style=flat
   :target: https://anaconda.org/bioconda/trinculo
   :alt:   (downloads)
.. |docker_trinculo| image:: https://quay.io/repository/biocontainers/trinculo/status
   :target: https://quay.io/repository/biocontainers/trinculo
.. _`trinculo/tags`: https://quay.io/repository/biocontainers/trinculo?tab=tags


.. raw:: html

    <script>
        var package = "trinculo";
        var versions = ["0.96","0.96","0.96","0.96","0.96"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trinculo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trinculo/README.html