:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'convert_zero_one_based'
.. highlight: bash

convert_zero_one_based
======================

.. conda:recipe:: convert_zero_one_based
   :replaces_section_title:
   :noindex:

   Convert between zero and one based coordinate systems

   :homepage: https://github.com/griffithlab/convert_zero_one_based.git
   :license: MIT
   :recipe: /`convert_zero_one_based <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/convert_zero_one_based>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/convert_zero_one_based/meta.yaml>`_

   


.. conda:package:: convert_zero_one_based

   |downloads_convert_zero_one_based| |docker_convert_zero_one_based|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends click: 
   :depends python: ``>=3.6``
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

      mamba install convert_zero_one_based

   and update with::

      mamba update convert_zero_one_based

  To create a new environment, run::

      mamba create --name myenvname convert_zero_one_based

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/convert_zero_one_based:<tag>

   (see `convert_zero_one_based/tags`_ for valid values for ``<tag>``)


.. |downloads_convert_zero_one_based| image:: https://img.shields.io/conda/dn/bioconda/convert_zero_one_based.svg?style=flat
   :target: https://anaconda.org/bioconda/convert_zero_one_based
   :alt:   (downloads)
.. |docker_convert_zero_one_based| image:: https://quay.io/repository/biocontainers/convert_zero_one_based/status
   :target: https://quay.io/repository/biocontainers/convert_zero_one_based
.. _`convert_zero_one_based/tags`: https://quay.io/repository/biocontainers/convert_zero_one_based?tab=tags


.. raw:: html

    <script>
        var package = "convert_zero_one_based";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/convert_zero_one_based/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/convert_zero_one_based/README.html