:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyclone-vi'
.. highlight: bash

pyclone-vi
==========

.. conda:recipe:: pyclone-vi
   :replaces_section_title:
   :noindex:

   A fast method for inferring clonal population structure

   :homepage: https://github.com/Roth-Lab/pyclone-vi
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pyclone-vi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyclone-vi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyclone-vi/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-020-03919-2`

   


.. conda:package:: pyclone-vi

   |downloads_pyclone-vi| |docker_pyclone-vi|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends click: ``>=8.3``
   :depends h5py: ``>=3.0``
   :depends numba: ``>=0.61.2``
   :depends numpy: ``>=2.0``
   :depends pandas: ``>=2.2.2``
   :depends python: ``>=3.12``
   :depends scipy: 
   :depends threadpoolctl: ``>=3.6.0``
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

      mamba install pyclone-vi

   and update with::

      mamba update pyclone-vi

  To create a new environment, run::

      mamba create --name myenvname pyclone-vi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyclone-vi:<tag>

   (see `pyclone-vi/tags`_ for valid values for ``<tag>``)


.. |downloads_pyclone-vi| image:: https://img.shields.io/conda/dn/bioconda/pyclone-vi.svg?style=flat
   :target: https://anaconda.org/bioconda/pyclone-vi
   :alt:   (downloads)
.. |docker_pyclone-vi| image:: https://quay.io/repository/biocontainers/pyclone-vi/status
   :target: https://quay.io/repository/biocontainers/pyclone-vi
.. _`pyclone-vi/tags`: https://quay.io/repository/biocontainers/pyclone-vi?tab=tags


.. raw:: html

    <script>
        var package = "pyclone-vi";
        var versions = ["0.2.0","0.1.6","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyclone-vi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyclone-vi/README.html