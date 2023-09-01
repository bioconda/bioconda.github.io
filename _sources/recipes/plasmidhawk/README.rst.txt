:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidhawk'
.. highlight: bash

plasmidhawk
===========

.. conda:recipe:: plasmidhawk
   :replaces_section_title:
   :noindex:

   Plasmidhawk is a program for detecting lab\-of\-origin of input plasmids by building an annotated pangenome of training plasmids.

   :homepage: https://gitlab.com/treangenlab/plasmidhawk
   :license: MIT
   :recipe: /`plasmidhawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidhawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidhawk/meta.yaml>`_

   


.. conda:package:: plasmidhawk

   |downloads_plasmidhawk| |docker_plasmidhawk|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends biopython: 
   :depends mummer4: 
   :depends pan-plaster: ``>=1.1.2``
   :depends python: ``>=3``
   :depends tqdm: 
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

      mamba install plasmidhawk

   and update with::

      mamba update plasmidhawk

  To create a new environment, run::

      mamba create --name myenvname plasmidhawk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasmidhawk:<tag>

   (see `plasmidhawk/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidhawk| image:: https://img.shields.io/conda/dn/bioconda/plasmidhawk.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidhawk
   :alt:   (downloads)
.. |docker_plasmidhawk| image:: https://quay.io/repository/biocontainers/plasmidhawk/status
   :target: https://quay.io/repository/biocontainers/plasmidhawk
.. _`plasmidhawk/tags`: https://quay.io/repository/biocontainers/plasmidhawk?tab=tags


.. raw:: html

    <script>
        var package = "plasmidhawk";
        var versions = ["1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidhawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidhawk/README.html