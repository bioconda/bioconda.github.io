:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calisp'
.. highlight: bash

calisp
======

.. conda:recipe:: calisp
   :replaces_section_title:
   :noindex:

   Estimate isotopic composition of peptides from proteomics mass spectrometry data

   :homepage: https://github.com/kinestetika/Calisp
   :license: MIT
   :recipe: /`calisp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calisp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calisp/meta.yaml>`_

   


.. conda:package:: calisp

   |downloads_calisp| |docker_calisp|

   :versions:
      
      

      ``3.0.12-0``,  ``3.0.11-0``,  ``3.0.10-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends pyarrow: 
   :depends pymzml: 
   :depends python: 
   :depends scipy: 
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

      mamba install calisp

   and update with::

      mamba update calisp

  To create a new environment, run::

      mamba create --name myenvname calisp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/calisp:<tag>

   (see `calisp/tags`_ for valid values for ``<tag>``)


.. |downloads_calisp| image:: https://img.shields.io/conda/dn/bioconda/calisp.svg?style=flat
   :target: https://anaconda.org/bioconda/calisp
   :alt:   (downloads)
.. |docker_calisp| image:: https://quay.io/repository/biocontainers/calisp/status
   :target: https://quay.io/repository/biocontainers/calisp
.. _`calisp/tags`: https://quay.io/repository/biocontainers/calisp?tab=tags


.. raw:: html

    <script>
        var package = "calisp";
        var versions = ["3.0.12","3.0.11","3.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calisp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calisp/README.html