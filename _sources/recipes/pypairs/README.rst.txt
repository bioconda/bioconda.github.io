:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypairs'
.. highlight: bash

pypairs
=======

.. conda:recipe:: pypairs
   :replaces_section_title:
   :noindex:

   A python scRNA\-Seq classifier

   :homepage: https://github.com/rfechtner/pypairs
   :documentation: https://pypairs.readthedocs.io/
   
   :license: BSD / BSD
   :recipe: /`pypairs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypairs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypairs/meta.yaml>`_

   


.. conda:package:: pypairs

   |downloads_pypairs| |docker_pypairs|

   :versions:
      
      

      ``3.2.3-0``,  ``3.2.2-0``,  ``3.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.9-0``,  ``2.0.6-0``,  ``2.0.5-0``

      

   
   :depends anndata: ``>=0.6.13``
   :depends colorama: 
   :depends h5py: ``>=2.8.0``
   :depends numba: ``>=0.40.1``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=0.23.4``
   :depends psutil: 
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends tqdm: 
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

      mamba install pypairs

   and update with::

      mamba update pypairs

  To create a new environment, run::

      mamba create --name myenvname pypairs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pypairs:<tag>

   (see `pypairs/tags`_ for valid values for ``<tag>``)


.. |downloads_pypairs| image:: https://img.shields.io/conda/dn/bioconda/pypairs.svg?style=flat
   :target: https://anaconda.org/bioconda/pypairs
   :alt:   (downloads)
.. |docker_pypairs| image:: https://quay.io/repository/biocontainers/pypairs/status
   :target: https://quay.io/repository/biocontainers/pypairs
.. _`pypairs/tags`: https://quay.io/repository/biocontainers/pypairs?tab=tags


.. raw:: html

    <script>
        var package = "pypairs";
        var versions = ["3.2.3","3.2.2","3.2","3.1.1","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypairs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypairs/README.html