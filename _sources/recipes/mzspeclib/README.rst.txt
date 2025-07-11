:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzspeclib'
.. highlight: bash

mzspeclib
=========

.. conda:recipe:: mzspeclib
   :replaces_section_title:
   :noindex:

   HUPO\-PSI Spectral library format

   :homepage: https://github.com/HUPO-PSI/mzSpecLib
   :documentation: https://mzspeclib-py.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/HUPO-PSI/mzspeclib-py
   :license: APACHE / Apache-2.0
   :recipe: /`mzspeclib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzspeclib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzspeclib/meta.yaml>`_

   


.. conda:package:: mzspeclib

   |downloads_mzspeclib| |docker_mzspeclib|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends click: 
   :depends mzpaf: 
   :depends psims: ``>=1.3.4``
   :depends pyteomics: ``>=4.5.3``
   :depends python: ``>=3.8``
   :depends sqlalchemy: 
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

      mamba install mzspeclib

   and update with::

      mamba update mzspeclib

  To create a new environment, run::

      mamba create --name myenvname mzspeclib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mzspeclib:<tag>

   (see `mzspeclib/tags`_ for valid values for ``<tag>``)


.. |downloads_mzspeclib| image:: https://img.shields.io/conda/dn/bioconda/mzspeclib.svg?style=flat
   :target: https://anaconda.org/bioconda/mzspeclib
   :alt:   (downloads)
.. |docker_mzspeclib| image:: https://quay.io/repository/biocontainers/mzspeclib/status
   :target: https://quay.io/repository/biocontainers/mzspeclib
.. _`mzspeclib/tags`: https://quay.io/repository/biocontainers/mzspeclib?tab=tags


.. raw:: html

    <script>
        var package = "mzspeclib";
        var versions = ["1.0.7","1.0.5","1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzspeclib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzspeclib/README.html