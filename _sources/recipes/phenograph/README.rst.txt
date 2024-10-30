:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phenograph'
.. highlight: bash

phenograph
==========

.. conda:recipe:: phenograph
   :replaces_section_title:
   :noindex:

   Graph\-based clustering for high\-dimensional single\-cell data.

   :homepage: https://github.com/dpeerlab/PhenoGraph
   :documentation: https://github.com/dpeerlab/PhenoGraph/blob/v1.5.7/README.md
   
   :license: MIT / MIT
   :recipe: /`phenograph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenograph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenograph/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cell.2015.05.047`

   


.. conda:package:: phenograph

   |downloads_phenograph| |docker_phenograph|

   :versions:
      
      

      ``1.5.7-0``

      

   
   :depends leidenalg: ``>=0.8.2``
   :depends numpy: ``>=1.12``
   :depends psutil: ``>4``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.17``
   :depends scipy: ``>=1.5.1``
   :depends setuptools: ``>=18.0.1``
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

      mamba install phenograph

   and update with::

      mamba update phenograph

  To create a new environment, run::

      mamba create --name myenvname phenograph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phenograph:<tag>

   (see `phenograph/tags`_ for valid values for ``<tag>``)


.. |downloads_phenograph| image:: https://img.shields.io/conda/dn/bioconda/phenograph.svg?style=flat
   :target: https://anaconda.org/bioconda/phenograph
   :alt:   (downloads)
.. |docker_phenograph| image:: https://quay.io/repository/biocontainers/phenograph/status
   :target: https://quay.io/repository/biocontainers/phenograph
.. _`phenograph/tags`: https://quay.io/repository/biocontainers/phenograph?tab=tags


.. raw:: html

    <script>
        var package = "phenograph";
        var versions = ["1.5.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phenograph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phenograph/README.html