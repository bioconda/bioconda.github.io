:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fishtaco'
.. highlight: bash

fishtaco
========

.. conda:recipe:: fishtaco
   :replaces_section_title:
   :noindex:

   FishTaco\: a metagenomic computational framework\, aiming to identify the taxa that are driving functional shifts in microbiomes.

   :homepage: https://github.com/borenstein-lab/fishtaco/
   :license: BSD-3-Clause
   :recipe: /`fishtaco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fishtaco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fishtaco/meta.yaml>`_

   


.. conda:package:: fishtaco

   |downloads_fishtaco| |docker_fishtaco|

   :versions:
      
      

      ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends musicc: ``>=1.0.2``
   :depends numpy: ``>=1.6.1``
   :depends pandas: ``>=0.14``
   :depends python: 
   :depends scikit-learn: ``>=0.15.2,<0.18.0a0``
   :depends scipy: ``>=0.9``
   :depends statsmodels: ``>=0.5.0``
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

      mamba install fishtaco

   and update with::

      mamba update fishtaco

  To create a new environment, run::

      mamba create --name myenvname fishtaco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fishtaco:<tag>

   (see `fishtaco/tags`_ for valid values for ``<tag>``)


.. |downloads_fishtaco| image:: https://img.shields.io/conda/dn/bioconda/fishtaco.svg?style=flat
   :target: https://anaconda.org/bioconda/fishtaco
   :alt:   (downloads)
.. |docker_fishtaco| image:: https://quay.io/repository/biocontainers/fishtaco/status
   :target: https://quay.io/repository/biocontainers/fishtaco
.. _`fishtaco/tags`: https://quay.io/repository/biocontainers/fishtaco?tab=tags


.. raw:: html

    <script>
        var package = "fishtaco";
        var versions = ["1.0.5","1.0.5","1.0.5"];
    </script>





Notes
-----
With FishTaco 1.1.0 the license has been changed such that 1.1.0 and 1.1.1 cannot be distributed in the Bioconda channel. DO NOT update the recipe to those versions\! See https\:\/\/github.com\/borenstein\-lab\/fishtaco\/issues\/2.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fishtaco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fishtaco/README.html