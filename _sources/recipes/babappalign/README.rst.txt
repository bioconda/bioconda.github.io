:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'babappalign'
.. highlight: bash

babappalign
===========

.. conda:recipe:: babappalign
   :replaces_section_title:
   :noindex:

   Deep learning–based progressive multiple sequence alignment engine with learned residue scoring

   :homepage: https://github.com/sinhakrishnendu/BABAPPAlign
   :license: MIT
   :recipe: /`babappalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/babappalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/babappalign/meta.yaml>`_

   


.. conda:package:: babappalign

   |downloads_babappalign| |docker_babappalign|

   :versions:
      
      

      ``1.1.3-0``,  ``1.0.4-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends fair-esm: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.13,<3.14.0a0``
   :depends python_abi: ``3.13.* *_cp313``
   :depends pytorch: ``>=1.12``
   :depends scipy: 
   :depends tqdm: 
   :depends transformers: ``>=4.30``
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

      mamba install babappalign

   and update with::

      mamba update babappalign

  To create a new environment, run::

      mamba create --name myenvname babappalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/babappalign:<tag>

   (see `babappalign/tags`_ for valid values for ``<tag>``)


.. |downloads_babappalign| image:: https://img.shields.io/conda/dn/bioconda/babappalign.svg?style=flat
   :target: https://anaconda.org/bioconda/babappalign
   :alt:   (downloads)
.. |docker_babappalign| image:: https://quay.io/repository/biocontainers/babappalign/status
   :target: https://quay.io/repository/biocontainers/babappalign
.. _`babappalign/tags`: https://quay.io/repository/biocontainers/babappalign?tab=tags


.. raw:: html

    <script>
        var package = "babappalign";
        var versions = ["1.1.3","1.0.4","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/babappalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/babappalign/README.html