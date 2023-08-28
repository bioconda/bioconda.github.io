:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpc2'
.. highlight: bash

cpc2
====

.. conda:recipe:: cpc2
   :replaces_section_title:
   :noindex:

   Coding Potential Calculator 2 \(CPC2\)

   :homepage: https://github.com/gao-lab/CPC2_standalone
   :license: MIT
   :recipe: /`cpc2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpc2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpc2/meta.yaml>`_

   CPC2 a fast and accurate coding potential calculator based on sequence intrinsic features.


.. conda:package:: cpc2

   |downloads_cpc2| |docker_cpc2|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends biopython: 
   :depends libsvm: 
   :depends python: 
   :depends six: 
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

      mamba install cpc2

   and update with::

      mamba update cpc2

  To create a new environment, run::

      mamba create --name myenvname cpc2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cpc2:<tag>

   (see `cpc2/tags`_ for valid values for ``<tag>``)


.. |downloads_cpc2| image:: https://img.shields.io/conda/dn/bioconda/cpc2.svg?style=flat
   :target: https://anaconda.org/bioconda/cpc2
   :alt:   (downloads)
.. |docker_cpc2| image:: https://quay.io/repository/biocontainers/cpc2/status
   :target: https://quay.io/repository/biocontainers/cpc2
.. _`cpc2/tags`: https://quay.io/repository/biocontainers/cpc2?tab=tags


.. raw:: html

    <script>
        var package = "cpc2";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpc2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpc2/README.html