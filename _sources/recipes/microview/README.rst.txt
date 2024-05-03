:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microview'
.. highlight: bash

microview
=========

.. conda:recipe:: microview
   :replaces_section_title:
   :noindex:

   Generate reports from taxonomic classification data

   :homepage: https://github.com/jvfe/microview
   :license: BSD-3-Clause
   :recipe: /`microview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microview/meta.yaml>`_

   


.. conda:package:: microview

   |downloads_microview| |docker_microview|

   :versions:
      
      

      ``0.11.0-0``,  ``0.10.1-0``

      

   
   :depends click-option-group: 
   :depends cython: 
   :depends decorator: 
   :depends frictionless: ``>=4.32.0,<5``
   :depends jinja2: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python_abi: ``3.12.* *_cp312``
   :depends rich: 
   :depends rich-click: 
   :depends scikit-bio: 
   :depends scipy: 
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

      mamba install microview

   and update with::

      mamba update microview

  To create a new environment, run::

      mamba create --name myenvname microview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/microview:<tag>

   (see `microview/tags`_ for valid values for ``<tag>``)


.. |downloads_microview| image:: https://img.shields.io/conda/dn/bioconda/microview.svg?style=flat
   :target: https://anaconda.org/bioconda/microview
   :alt:   (downloads)
.. |docker_microview| image:: https://quay.io/repository/biocontainers/microview/status
   :target: https://quay.io/repository/biocontainers/microview
.. _`microview/tags`: https://quay.io/repository/biocontainers/microview?tab=tags


.. raw:: html

    <script>
        var package = "microview";
        var versions = ["0.11.0","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microview/README.html