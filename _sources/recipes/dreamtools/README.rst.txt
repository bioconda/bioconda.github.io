:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dreamtools'
.. highlight: bash

dreamtools
==========

.. conda:recipe:: dreamtools
   :replaces_section_title:
   :noindex:

   Scoring functions for the DREAM \/ SAGE challenges

   :homepage: https://github.com/dreamtools/dreamtools
   :license: BSD License
   :recipe: /`dreamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dreamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dreamtools/meta.yaml>`_

   


.. conda:package:: dreamtools

   |downloads_dreamtools| |docker_dreamtools|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.5-0``

      

   
   :depends biokit: 
   :depends bioservices: ``>=1.4.5``
   :depends colormap: 
   :depends cython: 
   :depends easydev: ``>=0.9.14``
   :depends fitter: 
   :depends numexpr: 
   :depends pandas: 
   :depends python: ``2.7*``
   :depends scikit-learn: 
   :depends scipy: 
   :depends synapseclient: 
   :depends tabulate: 
   :depends xlrd: 
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

      mamba install dreamtools

   and update with::

      mamba update dreamtools

  To create a new environment, run::

      mamba create --name myenvname dreamtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dreamtools:<tag>

   (see `dreamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_dreamtools| image:: https://img.shields.io/conda/dn/bioconda/dreamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/dreamtools
   :alt:   (downloads)
.. |docker_dreamtools| image:: https://quay.io/repository/biocontainers/dreamtools/status
   :target: https://quay.io/repository/biocontainers/dreamtools
.. _`dreamtools/tags`: https://quay.io/repository/biocontainers/dreamtools?tab=tags


.. raw:: html

    <script>
        var package = "dreamtools";
        var versions = ["1.3.0","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dreamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dreamtools/README.html