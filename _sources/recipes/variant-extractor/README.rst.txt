:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variant-extractor'
.. highlight: bash

variant-extractor
=================

.. conda:recipe:: variant-extractor
   :replaces_section_title:
   :noindex:

   Deterministic and standard extractor of indels\, SNVs and structural variants \(SVs\) from VCF files.

   :homepage: https://pypi.org/project/variant-extractor/
   :license: MIT
   :recipe: /`variant-extractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variant-extractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variant-extractor/meta.yaml>`_

   


.. conda:package:: variant-extractor

   |downloads_variant-extractor| |docker_variant-extractor|

   :versions:
      
      

      ``5.1.0-0``,  ``5.0.0-0``

      

   
   :depends pysam: ``>=0.22.1``
   :depends python: ``>=3.6``
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

      mamba install variant-extractor

   and update with::

      mamba update variant-extractor

  To create a new environment, run::

      mamba create --name myenvname variant-extractor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/variant-extractor:<tag>

   (see `variant-extractor/tags`_ for valid values for ``<tag>``)


.. |downloads_variant-extractor| image:: https://img.shields.io/conda/dn/bioconda/variant-extractor.svg?style=flat
   :target: https://anaconda.org/bioconda/variant-extractor
   :alt:   (downloads)
.. |docker_variant-extractor| image:: https://quay.io/repository/biocontainers/variant-extractor/status
   :target: https://quay.io/repository/biocontainers/variant-extractor
.. _`variant-extractor/tags`: https://quay.io/repository/biocontainers/variant-extractor?tab=tags


.. raw:: html

    <script>
        var package = "variant-extractor";
        var versions = ["5.1.0","5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variant-extractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variant-extractor/README.html