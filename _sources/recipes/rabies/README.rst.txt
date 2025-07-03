:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rabies'
.. highlight: bash

rabies
======

.. conda:recipe:: rabies
   :replaces_section_title:
   :noindex:

   RABIES\: Rodent Automated Bold Improvement of EPI Sequences.

   :homepage: https://github.com/CoBrALab/RABIES
   :license: GPL / GPL-2.0-or-later
   :recipe: /`rabies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabies/meta.yaml>`_

   


.. conda:package:: rabies

   |downloads_rabies| |docker_rabies|

   :versions:
      
      

      ``0.5.2-0``,  ``0.5.1-0``

      

   
   :depends etelemetry: ``>=0.2.0``
   :depends matplotlib-base: ``3.3.4``
   :depends networkx: ``<3``
   :depends nibabel: ``3.2.1``
   :depends nilearn: ``0.7.1``
   :depends nipype: ``1.6.1``
   :depends numpy: ``1.20.1``
   :depends pandas: ``1.2.4``
   :depends pathos: ``0.2.7``
   :depends pybids: ``0.16.3``
   :depends python: ``>=3.9``
   :depends qbatch: ``2.3``
   :depends scikit-learn: ``0.24.1``
   :depends scipy: ``1.8.1``
   :depends seaborn-base: ``0.11.1``
   :depends simpleitk: ``2.0.2``
   :depends traits: ``<7.0``
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

      mamba install rabies

   and update with::

      mamba update rabies

  To create a new environment, run::

      mamba create --name myenvname rabies

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rabies:<tag>

   (see `rabies/tags`_ for valid values for ``<tag>``)


.. |downloads_rabies| image:: https://img.shields.io/conda/dn/bioconda/rabies.svg?style=flat
   :target: https://anaconda.org/bioconda/rabies
   :alt:   (downloads)
.. |docker_rabies| image:: https://quay.io/repository/biocontainers/rabies/status
   :target: https://quay.io/repository/biocontainers/rabies
.. _`rabies/tags`: https://quay.io/repository/biocontainers/rabies?tab=tags


.. raw:: html

    <script>
        var package = "rabies";
        var versions = ["0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rabies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rabies/README.html