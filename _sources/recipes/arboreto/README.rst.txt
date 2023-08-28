:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arboreto'
.. highlight: bash

arboreto
========

.. conda:recipe:: arboreto
   :replaces_section_title:
   :noindex:

   Scalable gene regulatory network inference using tree\-based ensemble regressors

   :homepage: https://github.com/tmoerman/arboreto
   :license: BSD / BSD 3-Clause License
   :recipe: /`arboreto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arboreto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arboreto/meta.yaml>`_

   


.. conda:package:: arboreto

   |downloads_arboreto| |docker_arboreto|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends dask: 
   :depends distributed: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install arboreto

   and update with::

      mamba update arboreto

  To create a new environment, run::

      mamba create --name myenvname arboreto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arboreto:<tag>

   (see `arboreto/tags`_ for valid values for ``<tag>``)


.. |downloads_arboreto| image:: https://img.shields.io/conda/dn/bioconda/arboreto.svg?style=flat
   :target: https://anaconda.org/bioconda/arboreto
   :alt:   (downloads)
.. |docker_arboreto| image:: https://quay.io/repository/biocontainers/arboreto/status
   :target: https://quay.io/repository/biocontainers/arboreto
.. _`arboreto/tags`: https://quay.io/repository/biocontainers/arboreto?tab=tags


.. raw:: html

    <script>
        var package = "arboreto";
        var versions = ["0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arboreto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arboreto/README.html