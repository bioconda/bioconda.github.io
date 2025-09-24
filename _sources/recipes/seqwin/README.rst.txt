:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqwin'
.. highlight: bash

seqwin
======

.. conda:recipe:: seqwin
   :replaces_section_title:
   :noindex:

   Ultrafast identification of signature sequences in microbial genomes via minimizer graphs

   :homepage: https://github.com/treangenlab/seqwin
   :license: GPL3 / GPL-3.0-only
   :recipe: /`seqwin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwin/meta.yaml>`_

   


.. conda:package:: seqwin

   |downloads_seqwin| |docker_seqwin|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends blast: 
   :depends btllib: 
   :depends mash: 
   :depends ncbi-datasets-cli: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: ``>=2``
   :depends pandas: ``>=2``
   :depends pydantic: 
   :depends python: ``>=3.10``
   :depends typer: 
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

      mamba install seqwin

   and update with::

      mamba update seqwin

  To create a new environment, run::

      mamba create --name myenvname seqwin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqwin:<tag>

   (see `seqwin/tags`_ for valid values for ``<tag>``)


.. |downloads_seqwin| image:: https://img.shields.io/conda/dn/bioconda/seqwin.svg?style=flat
   :target: https://anaconda.org/bioconda/seqwin
   :alt:   (downloads)
.. |docker_seqwin| image:: https://quay.io/repository/biocontainers/seqwin/status
   :target: https://quay.io/repository/biocontainers/seqwin
.. _`seqwin/tags`: https://quay.io/repository/biocontainers/seqwin?tab=tags


.. raw:: html

    <script>
        var package = "seqwin";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqwin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqwin/README.html