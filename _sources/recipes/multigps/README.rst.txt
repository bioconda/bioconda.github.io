:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multigps'
.. highlight: bash

multigps
========

.. conda:recipe:: multigps
   :replaces_section_title:
   :noindex:

   MultiGPS is a framework for analyzing collections of multi\-condition ChIP\-seq datasets and characterizing differential binding events between conditions.

   :homepage: http://mahonylab.org/software/multigps/
   :license: MIT
   :recipe: /`multigps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps/meta.yaml>`_

   


.. conda:package:: multigps

   |downloads_multigps| |docker_multigps|

   :versions:
      
      

      ``0.74-3``,  ``0.74-2``,  ``0.74-1``,  ``0.74-0``,  ``0.73-1``,  ``0.73-0``,  ``0.72-1``,  ``0.72-0``,  ``0.5-1``

      

   
   :depends bioconductor-edger: 
   :depends meme: ``>=4.11.2``
   :depends openjdk: ``>=8``
   :depends r-base: 
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

      mamba install multigps

   and update with::

      mamba update multigps

  To create a new environment, run::

      mamba create --name myenvname multigps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multigps:<tag>

   (see `multigps/tags`_ for valid values for ``<tag>``)


.. |downloads_multigps| image:: https://img.shields.io/conda/dn/bioconda/multigps.svg?style=flat
   :target: https://anaconda.org/bioconda/multigps
   :alt:   (downloads)
.. |docker_multigps| image:: https://quay.io/repository/biocontainers/multigps/status
   :target: https://quay.io/repository/biocontainers/multigps
.. _`multigps/tags`: https://quay.io/repository/biocontainers/multigps?tab=tags


.. raw:: html

    <script>
        var package = "multigps";
        var versions = ["0.74","0.74","0.74","0.74","0.73"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multigps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multigps/README.html