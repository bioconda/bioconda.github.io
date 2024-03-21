:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prokbert'
.. highlight: bash

prokbert
========

.. conda:recipe:: prokbert
   :replaces_section_title:
   :noindex:

   ProkBERT is a genomic language model specifically designed for microbiome applications. It leverages the power of machine learning to decipher complex microbial interactions\, predict functionalities\, and uncover novel patterns in extensive datasets. The ProkBERT model family\, built on transfer learning and self\-supervised methodologies\, capitalizes on the abundant genomic data available.

   :homepage: https://github.com/nbrg-ppcu/prokbert
   :documentation: https://prokbert.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`prokbert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokbert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokbert/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.11.09.566411`

   


.. conda:package:: prokbert

   |downloads_prokbert| |docker_prokbert|

   :versions:
      
      

      ``0.0.44-0``,  ``0.0.40-0``

      

   
   :depends biopython: 
   :depends datasets: ``>=2.0.1``
   :depends h5py: ``>=3.7.0``
   :depends pandas: ``>=2.0.0``
   :depends python: ``>=3.10``
   :depends pytorch: 
   :depends scikit-learn: ``>=1.2.2``
   :depends scipy: ``>=1.10.0``
   :depends tables: ``>=3.8.0``
   :depends torchvision: 
   :depends transformers: ``>=4.23``
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

      mamba install prokbert

   and update with::

      mamba update prokbert

  To create a new environment, run::

      mamba create --name myenvname prokbert

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prokbert:<tag>

   (see `prokbert/tags`_ for valid values for ``<tag>``)


.. |downloads_prokbert| image:: https://img.shields.io/conda/dn/bioconda/prokbert.svg?style=flat
   :target: https://anaconda.org/bioconda/prokbert
   :alt:   (downloads)
.. |docker_prokbert| image:: https://quay.io/repository/biocontainers/prokbert/status
   :target: https://quay.io/repository/biocontainers/prokbert
.. _`prokbert/tags`: https://quay.io/repository/biocontainers/prokbert?tab=tags


.. raw:: html

    <script>
        var package = "prokbert";
        var versions = ["0.0.44","0.0.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prokbert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prokbert/README.html