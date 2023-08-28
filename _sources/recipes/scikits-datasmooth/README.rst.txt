:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scikits-datasmooth'
.. highlight: bash

scikits-datasmooth
==================

.. conda:recipe:: scikits-datasmooth
   :replaces_section_title:
   :noindex:

   Scikits data smoothing package

   :homepage: https://github.com/jjstickel/scikit-datasmooth/
   :license: BSD / BSD
   :recipe: /`scikits-datasmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scikits-datasmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scikits-datasmooth/meta.yaml>`_

   


.. conda:package:: scikits-datasmooth

   |downloads_scikits-datasmooth| |docker_scikits-datasmooth|

   :versions:
      
      

      ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``

      

   
   :depends cvxopt: 
   :depends numpy: 
   :depends python: 
   :depends scipy: 
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

      mamba install scikits-datasmooth

   and update with::

      mamba update scikits-datasmooth

  To create a new environment, run::

      mamba create --name myenvname scikits-datasmooth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scikits-datasmooth:<tag>

   (see `scikits-datasmooth/tags`_ for valid values for ``<tag>``)


.. |downloads_scikits-datasmooth| image:: https://img.shields.io/conda/dn/bioconda/scikits-datasmooth.svg?style=flat
   :target: https://anaconda.org/bioconda/scikits-datasmooth
   :alt:   (downloads)
.. |docker_scikits-datasmooth| image:: https://quay.io/repository/biocontainers/scikits-datasmooth/status
   :target: https://quay.io/repository/biocontainers/scikits-datasmooth
.. _`scikits-datasmooth/tags`: https://quay.io/repository/biocontainers/scikits-datasmooth?tab=tags


.. raw:: html

    <script>
        var package = "scikits-datasmooth";
        var versions = ["0.7.1","0.7.1","0.7.1","0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scikits-datasmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scikits-datasmooth/README.html