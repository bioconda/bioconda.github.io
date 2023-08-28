:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phamb'
.. highlight: bash

phamb
=====

.. conda:recipe:: phamb
   :replaces_section_title:
   :noindex:

   phamb discovery approach used to isolate metagenome derived viromes and High\-quality viral genomes

   :homepage: https://github.com/RasmussenLab/phamb
   :license: MIT / GNU General Public (GPL)
   :recipe: /`phamb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phamb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phamb/meta.yaml>`_

   


.. conda:package:: phamb

   |downloads_phamb| |docker_phamb|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends numpy: ``>=1.14.6``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``1.0.2``
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

      mamba install phamb

   and update with::

      mamba update phamb

  To create a new environment, run::

      mamba create --name myenvname phamb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phamb:<tag>

   (see `phamb/tags`_ for valid values for ``<tag>``)


.. |downloads_phamb| image:: https://img.shields.io/conda/dn/bioconda/phamb.svg?style=flat
   :target: https://anaconda.org/bioconda/phamb
   :alt:   (downloads)
.. |docker_phamb| image:: https://quay.io/repository/biocontainers/phamb/status
   :target: https://quay.io/repository/biocontainers/phamb
.. _`phamb/tags`: https://quay.io/repository/biocontainers/phamb?tab=tags


.. raw:: html

    <script>
        var package = "phamb";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phamb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phamb/README.html