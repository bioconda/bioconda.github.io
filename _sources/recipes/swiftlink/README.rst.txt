:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swiftlink'
.. highlight: bash

swiftlink
=========

.. conda:recipe:: swiftlink
   :replaces_section_title:
   :noindex:

   A multipoint parametric linkage analysis tool for large consanguineous pedigrees and is primarily targeted at pedigrees that cannot be analysed by a Lander\-Green algorithm based program\, i.e. many markers\, but larger pedigrees.

   :homepage: https://github.com/ajm/swiftlink
   :license: GPLv3
   :recipe: /`swiftlink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swiftlink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swiftlink/meta.yaml>`_

   


.. conda:package:: swiftlink

   |downloads_swiftlink| |docker_swiftlink|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends gsl: ``>=2.2.1,<2.3.0a0``
   :depends libgcc-ng: ``>=4.9``
   :depends libstdcxx-ng: ``>=4.9``
   :depends openblas: ``>=0.2.20,<0.2.21.0a0``
   :depends openmp: 
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

      mamba install swiftlink

   and update with::

      mamba update swiftlink

  To create a new environment, run::

      mamba create --name myenvname swiftlink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/swiftlink:<tag>

   (see `swiftlink/tags`_ for valid values for ``<tag>``)


.. |downloads_swiftlink| image:: https://img.shields.io/conda/dn/bioconda/swiftlink.svg?style=flat
   :target: https://anaconda.org/bioconda/swiftlink
   :alt:   (downloads)
.. |docker_swiftlink| image:: https://quay.io/repository/biocontainers/swiftlink/status
   :target: https://quay.io/repository/biocontainers/swiftlink
.. _`swiftlink/tags`: https://quay.io/repository/biocontainers/swiftlink?tab=tags


.. raw:: html

    <script>
        var package = "swiftlink";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swiftlink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swiftlink/README.html