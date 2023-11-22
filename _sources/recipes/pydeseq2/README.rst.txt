:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydeseq2'
.. highlight: bash

pydeseq2
========

.. conda:recipe:: pydeseq2
   :replaces_section_title:
   :noindex:

   A python implementation of DESeq2.

   :homepage: https://github.com/owkin/PyDESeq2
   :license: MIT / MIT
   :recipe: /`pydeseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydeseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydeseq2/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.12.14.520412`

   


.. conda:package:: pydeseq2

   |downloads_pydeseq2| |docker_pydeseq2|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``

      

   
   :depends anndata: ``>=0.8.0``
   :depends ipython: 
   :depends jupyter: 
   :depends matplotlib-base: ``>=3.6.2``
   :depends numpy: ``>=1.23.0``
   :depends pandas: ``>=1.4.0``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=1.1.0``
   :depends scipy: ``>=1.8.0``
   :depends statsmodels: 
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

      mamba install pydeseq2

   and update with::

      mamba update pydeseq2

  To create a new environment, run::

      mamba create --name myenvname pydeseq2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydeseq2:<tag>

   (see `pydeseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_pydeseq2| image:: https://img.shields.io/conda/dn/bioconda/pydeseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/pydeseq2
   :alt:   (downloads)
.. |docker_pydeseq2| image:: https://quay.io/repository/biocontainers/pydeseq2/status
   :target: https://quay.io/repository/biocontainers/pydeseq2
.. _`pydeseq2/tags`: https://quay.io/repository/biocontainers/pydeseq2?tab=tags


.. raw:: html

    <script>
        var package = "pydeseq2";
        var versions = ["0.4.2","0.4.1","0.4.0","0.3.6","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydeseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydeseq2/README.html