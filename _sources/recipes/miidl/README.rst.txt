:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miidl'
.. highlight: bash

miidl
=====

.. conda:recipe:: miidl
   :replaces_section_title:
   :noindex:

   A Python package for microbial biomarkers identification powered by interpretable deep learning

   :homepage: https://github.com/chunribu/miidl/
   :license: MIT / MIT
   :recipe: /`miidl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miidl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miidl/meta.yaml>`_

   


.. conda:package:: miidl

   |downloads_miidl| |docker_miidl|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.2-0``

      

   
   :depends pandas: 
   :depends python: 
   :depends pytorch: 
   :depends scikit-learn: 
   :depends torchvision: 
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

      mamba install miidl

   and update with::

      mamba update miidl

  To create a new environment, run::

      mamba create --name myenvname miidl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/miidl:<tag>

   (see `miidl/tags`_ for valid values for ``<tag>``)


.. |downloads_miidl| image:: https://img.shields.io/conda/dn/bioconda/miidl.svg?style=flat
   :target: https://anaconda.org/bioconda/miidl
   :alt:   (downloads)
.. |docker_miidl| image:: https://quay.io/repository/biocontainers/miidl/status
   :target: https://quay.io/repository/biocontainers/miidl
.. _`miidl/tags`: https://quay.io/repository/biocontainers/miidl?tab=tags


.. raw:: html

    <script>
        var package = "miidl";
        var versions = ["0.0.5","0.0.4","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miidl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miidl/README.html