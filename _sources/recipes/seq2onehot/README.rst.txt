:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2onehot'
.. highlight: bash

seq2onehot
==========

.. conda:recipe:: seq2onehot
   :replaces_section_title:
   :noindex:

   Encode biological sequences to a one\-hot numpy array

   :homepage: https://github.com/akikuno/seq2onehot
   :license: MIT / MIT
   :recipe: /`seq2onehot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2onehot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2onehot/meta.yaml>`_

   


.. conda:package:: seq2onehot

   |downloads_seq2onehot| |docker_seq2onehot|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends numpy: 
   :depends python: 
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

      mamba install seq2onehot

   and update with::

      mamba update seq2onehot

  To create a new environment, run::

      mamba create --name myenvname seq2onehot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seq2onehot:<tag>

   (see `seq2onehot/tags`_ for valid values for ``<tag>``)


.. |downloads_seq2onehot| image:: https://img.shields.io/conda/dn/bioconda/seq2onehot.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2onehot
   :alt:   (downloads)
.. |docker_seq2onehot| image:: https://quay.io/repository/biocontainers/seq2onehot/status
   :target: https://quay.io/repository/biocontainers/seq2onehot
.. _`seq2onehot/tags`: https://quay.io/repository/biocontainers/seq2onehot?tab=tags


.. raw:: html

    <script>
        var package = "seq2onehot";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2onehot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2onehot/README.html