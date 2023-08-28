:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pprodigal'
.. highlight: bash

pprodigal
=========

.. conda:recipe:: pprodigal
   :replaces_section_title:
   :noindex:

   PProdigal \- Parallelized gene prediction based on Prodigal.

   :homepage: https://github.com/sjaenick/pprodigal
   :license: MIT
   :recipe: /`pprodigal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pprodigal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pprodigal/meta.yaml>`_

   


.. conda:package:: pprodigal

   |downloads_pprodigal| |docker_pprodigal|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3``
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

      mamba install pprodigal

   and update with::

      mamba update pprodigal

  To create a new environment, run::

      mamba create --name myenvname pprodigal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pprodigal:<tag>

   (see `pprodigal/tags`_ for valid values for ``<tag>``)


.. |downloads_pprodigal| image:: https://img.shields.io/conda/dn/bioconda/pprodigal.svg?style=flat
   :target: https://anaconda.org/bioconda/pprodigal
   :alt:   (downloads)
.. |docker_pprodigal| image:: https://quay.io/repository/biocontainers/pprodigal/status
   :target: https://quay.io/repository/biocontainers/pprodigal
.. _`pprodigal/tags`: https://quay.io/repository/biocontainers/pprodigal?tab=tags


.. raw:: html

    <script>
        var package = "pprodigal";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pprodigal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pprodigal/README.html