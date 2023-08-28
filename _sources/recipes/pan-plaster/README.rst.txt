:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pan-plaster'
.. highlight: bash

pan-plaster
===========

.. conda:recipe:: pan-plaster
   :replaces_section_title:
   :noindex:

   Plaster is a program for quick linear pangenome construction.

   :homepage: https://gitlab.com/treangenlab/plaster
   :license: MIT
   :recipe: /`pan-plaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pan-plaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pan-plaster/meta.yaml>`_

   


.. conda:package:: pan-plaster

   |downloads_pan-plaster| |docker_pan-plaster|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends mummer4: 
   :depends python: ``>=3``
   :depends tqdm: 
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

      mamba install pan-plaster

   and update with::

      mamba update pan-plaster

  To create a new environment, run::

      mamba create --name myenvname pan-plaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pan-plaster:<tag>

   (see `pan-plaster/tags`_ for valid values for ``<tag>``)


.. |downloads_pan-plaster| image:: https://img.shields.io/conda/dn/bioconda/pan-plaster.svg?style=flat
   :target: https://anaconda.org/bioconda/pan-plaster
   :alt:   (downloads)
.. |docker_pan-plaster| image:: https://quay.io/repository/biocontainers/pan-plaster/status
   :target: https://quay.io/repository/biocontainers/pan-plaster
.. _`pan-plaster/tags`: https://quay.io/repository/biocontainers/pan-plaster?tab=tags


.. raw:: html

    <script>
        var package = "pan-plaster";
        var versions = ["1.2.1","1.2.0","1.1.2","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pan-plaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pan-plaster/README.html