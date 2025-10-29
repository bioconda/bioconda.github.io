:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enzbert'
.. highlight: bash

enzbert
=======

.. conda:recipe:: enzbert
   :replaces_section_title:
   :noindex:

   Run EnzBert model that predicts the functional annotation of enzymes from protein sequences

   :homepage: https://gitlab.inria.fr/nbuton/tfpc/-/tree/EnzBert_conda
   :license: AGPL-3
   :recipe: /`enzbert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enzbert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enzbert/meta.yaml>`_

   


.. conda:package:: enzbert

   |downloads_enzbert| |docker_enzbert|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends biopython: 
   :depends captum: 
   :depends goatools: 
   :depends ijson: 
   :depends lime: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pytorch: ``1.9.1``
   :depends requests: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends streamlit: 
   :depends sty: 
   :depends torchmetrics: 
   :depends tqdm: 
   :depends transformers: ``4.2.2``
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

      mamba install enzbert

   and update with::

      mamba update enzbert

  To create a new environment, run::

      mamba create --name myenvname enzbert

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/enzbert:<tag>

   (see `enzbert/tags`_ for valid values for ``<tag>``)


.. |downloads_enzbert| image:: https://img.shields.io/conda/dn/bioconda/enzbert.svg?style=flat
   :target: https://anaconda.org/bioconda/enzbert
   :alt:   (downloads)
.. |docker_enzbert| image:: https://quay.io/repository/biocontainers/enzbert/status
   :target: https://quay.io/repository/biocontainers/enzbert
.. _`enzbert/tags`: https://quay.io/repository/biocontainers/enzbert?tab=tags


.. raw:: html

    <script>
        var package = "enzbert";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enzbert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enzbert/README.html