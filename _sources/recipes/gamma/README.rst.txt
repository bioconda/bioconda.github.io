:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gamma'
.. highlight: bash

gamma
=====

.. conda:recipe:: gamma
   :replaces_section_title:
   :noindex:

   Tool for Gene Allele Mutation Microbial Assessment

   :homepage: https://github.com/rastanton/GAMMA
   :license: APACHE / Apache License 2.0
   :recipe: /`gamma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gamma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gamma/meta.yaml>`_

   


.. conda:package:: gamma

   |downloads_gamma| |docker_gamma|

   :versions:
      
      

      ``2.2-0``,  ``2.1-0``,  ``1.4-0``,  ``1.3-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends blat: 
   :depends python: ``>=3``
   :depends unidecode: 
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

      mamba install gamma

   and update with::

      mamba update gamma

  To create a new environment, run::

      mamba create --name myenvname gamma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gamma:<tag>

   (see `gamma/tags`_ for valid values for ``<tag>``)


.. |downloads_gamma| image:: https://img.shields.io/conda/dn/bioconda/gamma.svg?style=flat
   :target: https://anaconda.org/bioconda/gamma
   :alt:   (downloads)
.. |docker_gamma| image:: https://quay.io/repository/biocontainers/gamma/status
   :target: https://quay.io/repository/biocontainers/gamma
.. _`gamma/tags`: https://quay.io/repository/biocontainers/gamma?tab=tags


.. raw:: html

    <script>
        var package = "gamma";
        var versions = ["2.2","2.1","1.4","1.3","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gamma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gamma/README.html