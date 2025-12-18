:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycistopic'
.. highlight: bash

pycistopic
==========

.. conda:recipe:: pycistopic
   :replaces_section_title:
   :noindex:

   pycisTopic is a Python module to simultaneously identify cell states and cis\-regulatory topics from single cell epigenomics data.

   :homepage: https://github.com/aertslab/pycistopic
   :license: OTHER
   :recipe: /`pycistopic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycistopic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycistopic/meta.yaml>`_

   


.. conda:package:: pycistopic

   |downloads_pycistopic| |docker_pycistopic|

   :versions:
      
      

      ``2.0a-0``

      

   
   :depends adjusttext: 
   :depends bbknn: 
   :depends bs4: 
   :depends gensim: 
   :depends harmonypy: 
   :depends igraph: 
   :depends leidenalg: 
   :depends loomxpy: 
   :depends lxml: 
   :depends macs2: 
   :depends matplotlib-base: ``<3.7``
   :depends numpy: ``>=1.20.3``
   :depends pandas: ``>=1.5,<2``
   :depends polars: ``>=0.18.3``
   :depends pyarrow: ``>=8.0.0``
   :depends pybiomart: 
   :depends pyranges: ``<0.0.128``
   :depends pyscenic: 
   :depends python: ``>=3.9``
   :depends ray-default: 
   :depends scanorama: 
   :depends scanpy: 
   :depends scatac-fragment-tools: 
   :depends scikit-learn: 
   :depends scrublet: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends tmtoolkit: 
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

      mamba install pycistopic

   and update with::

      mamba update pycistopic

  To create a new environment, run::

      mamba create --name myenvname pycistopic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pycistopic:<tag>

   (see `pycistopic/tags`_ for valid values for ``<tag>``)


.. |downloads_pycistopic| image:: https://img.shields.io/conda/dn/bioconda/pycistopic.svg?style=flat
   :target: https://anaconda.org/bioconda/pycistopic
   :alt:   (downloads)
.. |docker_pycistopic| image:: https://quay.io/repository/biocontainers/pycistopic/status
   :target: https://quay.io/repository/biocontainers/pycistopic
.. _`pycistopic/tags`: https://quay.io/repository/biocontainers/pycistopic?tab=tags


.. raw:: html

    <script>
        var package = "pycistopic";
        var versions = ["2.0a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycistopic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycistopic/README.html