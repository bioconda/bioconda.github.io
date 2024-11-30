:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocount'
.. highlight: bash

nanocount
=========

.. conda:recipe:: nanocount
   :replaces_section_title:
   :noindex:

   Transcript abundance estimation from Nanopore \*direct\-RNA sequencing\* datasets

   :homepage: https://github.com/a-slide/NanoCount/
   :documentation: https://a-slide.github.io/NanoCount/
   
   :license: MIT
   :recipe: /`nanocount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocount/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkab1129`

   NanoCount estimates transcripts abundance from Oxford Nanopore \*direct\-RNA sequencing\* datasets\, using an expectation\-maximization approach like RSEM\, Kallisto\, salmon\, etc to handle the uncertainty of multi\-mapping reads


.. conda:package:: nanocount

   |downloads_nanocount| |docker_nanocount|

   :versions:
      
      

      ``1.0.0.post6-0``

      

   
   :depends colorlog: ``>=4.1.0``
   :depends numpy: ``>=1.19.4``
   :depends pandas: ``>=1.1.4``
   :depends pysam: ``>=0.16.0``
   :depends python: ``>=3.6``
   :depends tqdm: ``>=4.51.0``
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

      mamba install nanocount

   and update with::

      mamba update nanocount

  To create a new environment, run::

      mamba create --name myenvname nanocount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanocount:<tag>

   (see `nanocount/tags`_ for valid values for ``<tag>``)


.. |downloads_nanocount| image:: https://img.shields.io/conda/dn/bioconda/nanocount.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocount
   :alt:   (downloads)
.. |docker_nanocount| image:: https://quay.io/repository/biocontainers/nanocount/status
   :target: https://quay.io/repository/biocontainers/nanocount
.. _`nanocount/tags`: https://quay.io/repository/biocontainers/nanocount?tab=tags


.. raw:: html

    <script>
        var package = "nanocount";
        var versions = ["1.0.0.post6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocount/README.html