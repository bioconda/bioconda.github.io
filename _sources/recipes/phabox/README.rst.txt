:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phabox'
.. highlight: bash

phabox
======

.. conda:recipe:: phabox
   :replaces_section_title:
   :noindex:

   Virus identification and analysis tool set

   :homepage: https://github.com/KennthShang/PhaBOX
   :documentation: https://github.com/KennthShang/PhaBOX/wiki
   
   :license: OTHER / AFL-3.0
   :recipe: /`phabox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phabox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phabox/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioadv/vbad101`, biotools: :biotools:`phabox`

   


.. conda:package:: phabox

   |downloads_phabox| |docker_phabox|

   :versions:
      
      

      ``2.1.10-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.0-0``,  ``2.0.0-0``

      

   
   :depends accelerate: ``>=1.0.1``
   :depends biopython: ``>=1.84``
   :depends blast: ``>=2.16.0``
   :depends datasets: ``>=3``
   :depends diamond: ``0.9.14.*``
   :depends fasttree: ``>=2.1.11``
   :depends kcounter: ``>=0.1.1``
   :depends mafft: ``>=7.525``
   :depends mcl: ``>=22.282``
   :depends networkx: ``>=3.4``
   :depends numpy: ``>=1.26``
   :depends pandas: ``>=2``
   :depends prodigal-gv: ``>=2.11.0``
   :depends pyarrow: ``>=16``
   :depends python: ``>=3.8``
   :depends pytorch: ``>=2.4``
   :depends scipy: ``>=1.14``
   :depends seaborn-base: ``>=0.13.2``
   :depends transformers: ``>=4``
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

      mamba install phabox

   and update with::

      mamba update phabox

  To create a new environment, run::

      mamba create --name myenvname phabox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phabox:<tag>

   (see `phabox/tags`_ for valid values for ``<tag>``)


.. |downloads_phabox| image:: https://img.shields.io/conda/dn/bioconda/phabox.svg?style=flat
   :target: https://anaconda.org/bioconda/phabox
   :alt:   (downloads)
.. |docker_phabox| image:: https://quay.io/repository/biocontainers/phabox/status
   :target: https://quay.io/repository/biocontainers/phabox
.. _`phabox/tags`: https://quay.io/repository/biocontainers/phabox?tab=tags


.. raw:: html

    <script>
        var package = "phabox";
        var versions = ["2.1.10","2.1.9","2.1.8","2.1.7","2.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phabox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phabox/README.html