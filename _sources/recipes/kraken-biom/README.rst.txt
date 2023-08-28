:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken-biom'
.. highlight: bash

kraken-biom
===========

.. conda:recipe:: kraken-biom
   :replaces_section_title:
   :noindex:

   Create BIOM\-format tables from Kraken output.

   :homepage: https://github.com/smdabdoub/kraken-biom
   :license: MIT / MIT License
   :recipe: /`kraken-biom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken-biom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken-biom/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`kraken_biom`

   


.. conda:package:: kraken-biom

   |downloads_kraken-biom| |docker_kraken-biom|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-2``,  ``1.0.1-0``

      

   
   :depends biom-format: ``>=2.1.5``
   :depends python: 
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

      mamba install kraken-biom

   and update with::

      mamba update kraken-biom

  To create a new environment, run::

      mamba create --name myenvname kraken-biom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kraken-biom:<tag>

   (see `kraken-biom/tags`_ for valid values for ``<tag>``)


.. |downloads_kraken-biom| image:: https://img.shields.io/conda/dn/bioconda/kraken-biom.svg?style=flat
   :target: https://anaconda.org/bioconda/kraken-biom
   :alt:   (downloads)
.. |docker_kraken-biom| image:: https://quay.io/repository/biocontainers/kraken-biom/status
   :target: https://quay.io/repository/biocontainers/kraken-biom
.. _`kraken-biom/tags`: https://quay.io/repository/biocontainers/kraken-biom?tab=tags


.. raw:: html

    <script>
        var package = "kraken-biom";
        var versions = ["1.2.0","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken-biom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken-biom/README.html