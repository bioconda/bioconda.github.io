:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyclone'
.. highlight: bash

pyclone
=======

.. conda:recipe:: pyclone
   :replaces_section_title:
   :noindex:

   PyClone\: A probabilistic model for inferring clonal population structure from deep NGS sequencing.

   :homepage: https://github.com/Roth-Lab/pyclone/
   :license: custom
   :recipe: /`pyclone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyclone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyclone/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.2883`

   PyClone is statistical model and software tool designed to infer the prevalence of point mutations in heterogeneous cancer samples. The input data for PyClone consists of a set read counts from a deep sequencing experiment\, the copy number of the genomic region containing the mutation and an estimate of tumour content.


.. conda:package:: pyclone

   |downloads_pyclone| |docker_pyclone|

   :versions:
      
      

      ``0.13.1-0``

      

   
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends pydp: ``>=0.2.4``
   :depends python: ``<3``
   :depends pyyaml: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install pyclone

   and update with::

      mamba update pyclone

  To create a new environment, run::

      mamba create --name myenvname pyclone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyclone:<tag>

   (see `pyclone/tags`_ for valid values for ``<tag>``)


.. |downloads_pyclone| image:: https://img.shields.io/conda/dn/bioconda/pyclone.svg?style=flat
   :target: https://anaconda.org/bioconda/pyclone
   :alt:   (downloads)
.. |docker_pyclone| image:: https://quay.io/repository/biocontainers/pyclone/status
   :target: https://quay.io/repository/biocontainers/pyclone
.. _`pyclone/tags`: https://quay.io/repository/biocontainers/pyclone?tab=tags


.. raw:: html

    <script>
        var package = "pyclone";
        var versions = ["0.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyclone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyclone/README.html