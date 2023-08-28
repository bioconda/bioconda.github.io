:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasclass'
.. highlight: bash

plasclass
=========

.. conda:recipe:: plasclass
   :replaces_section_title:
   :noindex:

   Classification of plasmid sequences

   :homepage: https://github.com/Shamir-Lab/PlasClass
   :license: MIT / MIT
   :recipe: /`plasclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasclass/meta.yaml>`_

   


.. conda:package:: plasclass

   |downloads_plasclass| |docker_plasclass|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends joblib: ``0.14.*``
   :depends numpy: ``1.17.*``
   :depends python: ``3.7.*``
   :depends scikit-learn: ``0.21.3``
   :depends scipy: ``1.3.2``
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

      mamba install plasclass

   and update with::

      mamba update plasclass

  To create a new environment, run::

      mamba create --name myenvname plasclass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasclass:<tag>

   (see `plasclass/tags`_ for valid values for ``<tag>``)


.. |downloads_plasclass| image:: https://img.shields.io/conda/dn/bioconda/plasclass.svg?style=flat
   :target: https://anaconda.org/bioconda/plasclass
   :alt:   (downloads)
.. |docker_plasclass| image:: https://quay.io/repository/biocontainers/plasclass/status
   :target: https://quay.io/repository/biocontainers/plasclass
.. _`plasclass/tags`: https://quay.io/repository/biocontainers/plasclass?tab=tags


.. raw:: html

    <script>
        var package = "plasclass";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasclass/README.html