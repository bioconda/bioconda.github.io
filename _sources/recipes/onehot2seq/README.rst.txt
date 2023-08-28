:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'onehot2seq'
.. highlight: bash

onehot2seq
==========

.. conda:recipe:: onehot2seq
   :replaces_section_title:
   :noindex:

   Decode a one\-hot numpy array to biological sequences

   :homepage: https://github.com/akikuno/onehot2seq
   :license: MIT / MIT
   :recipe: /`onehot2seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/onehot2seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/onehot2seq/meta.yaml>`_

   


.. conda:package:: onehot2seq

   |downloads_onehot2seq| |docker_onehot2seq|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends numpy: 
   :depends python: 
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

      mamba install onehot2seq

   and update with::

      mamba update onehot2seq

  To create a new environment, run::

      mamba create --name myenvname onehot2seq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/onehot2seq:<tag>

   (see `onehot2seq/tags`_ for valid values for ``<tag>``)


.. |downloads_onehot2seq| image:: https://img.shields.io/conda/dn/bioconda/onehot2seq.svg?style=flat
   :target: https://anaconda.org/bioconda/onehot2seq
   :alt:   (downloads)
.. |docker_onehot2seq| image:: https://quay.io/repository/biocontainers/onehot2seq/status
   :target: https://quay.io/repository/biocontainers/onehot2seq
.. _`onehot2seq/tags`: https://quay.io/repository/biocontainers/onehot2seq?tab=tags


.. raw:: html

    <script>
        var package = "onehot2seq";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/onehot2seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/onehot2seq/README.html