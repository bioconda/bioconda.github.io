:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylipid'
.. highlight: bash

pylipid
=======

.. conda:recipe:: pylipid
   :replaces_section_title:
   :noindex:

   PyLipID \- A Python Library For Lipid Interaction Analysis

   :homepage: https://github.com/wlsong/PyLipID
   :license: MIT
   :recipe: /`pylipid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylipid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylipid/meta.yaml>`_

   


.. conda:package:: pylipid

   |downloads_pylipid| |docker_pylipid|

   :versions:
      
      

      ``1.5.14-0``

      

   
   :depends kneebow: 
   :depends logomaker: 
   :depends matplotlib-base: ``>=3.3.3``
   :depends mdtraj: 
   :depends netcdf4: 
   :depends networkx: 
   :depends numpy: ``>=1.20``
   :depends p-tqdm: 
   :depends pandas: 
   :depends python: ``>=3.6,<4.0``
   :depends python-louvain: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends statsmodels: 
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

      mamba install pylipid

   and update with::

      mamba update pylipid

  To create a new environment, run::

      mamba create --name myenvname pylipid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pylipid:<tag>

   (see `pylipid/tags`_ for valid values for ``<tag>``)


.. |downloads_pylipid| image:: https://img.shields.io/conda/dn/bioconda/pylipid.svg?style=flat
   :target: https://anaconda.org/bioconda/pylipid
   :alt:   (downloads)
.. |docker_pylipid| image:: https://quay.io/repository/biocontainers/pylipid/status
   :target: https://quay.io/repository/biocontainers/pylipid
.. _`pylipid/tags`: https://quay.io/repository/biocontainers/pylipid?tab=tags


.. raw:: html

    <script>
        var package = "pylipid";
        var versions = ["1.5.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylipid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylipid/README.html