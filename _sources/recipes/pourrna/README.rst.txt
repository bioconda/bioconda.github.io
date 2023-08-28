:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pourrna'
.. highlight: bash

pourrna
=======

.. conda:recipe:: pourrna
   :replaces_section_title:
   :noindex:

   Compute local minima and respective transition rates of an RNA energy landscape.

   :homepage: https://github.com/ViennaRNA/pourRNA/
   :license: GPLv2
   :recipe: /`pourrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pourrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pourrna/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz583`

   


.. conda:package:: pourrna

   |downloads_pourrna| |docker_pourrna|

   :versions:
      
      

      ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends viennarna: ``>=2.4.14,<3.0.0``
   :depends viennarna: ``>=2.5.1,<2.6.0a0``
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

      mamba install pourrna

   and update with::

      mamba update pourrna

  To create a new environment, run::

      mamba create --name myenvname pourrna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pourrna:<tag>

   (see `pourrna/tags`_ for valid values for ``<tag>``)


.. |downloads_pourrna| image:: https://img.shields.io/conda/dn/bioconda/pourrna.svg?style=flat
   :target: https://anaconda.org/bioconda/pourrna
   :alt:   (downloads)
.. |docker_pourrna| image:: https://quay.io/repository/biocontainers/pourrna/status
   :target: https://quay.io/repository/biocontainers/pourrna
.. _`pourrna/tags`: https://quay.io/repository/biocontainers/pourrna?tab=tags


.. raw:: html

    <script>
        var package = "pourrna";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pourrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pourrna/README.html