:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'olga'
.. highlight: bash

olga
====

.. conda:recipe:: olga
   :replaces_section_title:
   :noindex:

   OLGA \(Optimized Likelihood estimate of immunoGlobulin Amino\-acid sequences\) is a python 2.7\/3.6 software developed to compute the generation probability of amino acid and in\-frame nucleotide CDR3 sequences from a generative model of V\(D\)J recombination.

   :homepage: https://github.com/zsethna/OLGA
   :license: GPL3 / GPL-3.0-only
   :recipe: /`olga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/olga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/olga/meta.yaml>`_

   


.. conda:package:: olga

   |downloads_olga| |docker_olga|

   :versions:
      
      

      ``1.2.4-0``

      

   
   :depends numpy: ``>=1.20``
   :depends python: 
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

      mamba install olga

   and update with::

      mamba update olga

  To create a new environment, run::

      mamba create --name myenvname olga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/olga:<tag>

   (see `olga/tags`_ for valid values for ``<tag>``)


.. |downloads_olga| image:: https://img.shields.io/conda/dn/bioconda/olga.svg?style=flat
   :target: https://anaconda.org/bioconda/olga
   :alt:   (downloads)
.. |docker_olga| image:: https://quay.io/repository/biocontainers/olga/status
   :target: https://quay.io/repository/biocontainers/olga
.. _`olga/tags`: https://quay.io/repository/biocontainers/olga?tab=tags


.. raw:: html

    <script>
        var package = "olga";
        var versions = ["1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/olga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/olga/README.html