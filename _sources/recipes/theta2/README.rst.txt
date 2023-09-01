:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'theta2'
.. highlight: bash

theta2
======

.. conda:recipe:: theta2
   :replaces_section_title:
   :noindex:

   Estimate tumor purity and clonal\/subclonal copy number aberrations directly from high\-throughput DNA sequencing data

   :homepage: https://github.com/raphael-group/THetA
   :license: Modified MIT (no inclusion in commercial tools)
   :recipe: /`theta2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theta2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theta2/meta.yaml>`_

   


.. conda:package:: theta2

   |downloads_theta2| |docker_theta2|

   :versions:
      
      

      ``0.7-3``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``

      

   
   :depends joblib: 
   :depends matplotlib: 
   :depends numexpr: 
   :depends numpy: 
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install theta2

   and update with::

      mamba update theta2

  To create a new environment, run::

      mamba create --name myenvname theta2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/theta2:<tag>

   (see `theta2/tags`_ for valid values for ``<tag>``)


.. |downloads_theta2| image:: https://img.shields.io/conda/dn/bioconda/theta2.svg?style=flat
   :target: https://anaconda.org/bioconda/theta2
   :alt:   (downloads)
.. |docker_theta2| image:: https://quay.io/repository/biocontainers/theta2/status
   :target: https://quay.io/repository/biocontainers/theta2
.. _`theta2/tags`: https://quay.io/repository/biocontainers/theta2?tab=tags


.. raw:: html

    <script>
        var package = "theta2";
        var versions = ["0.7","0.7","0.7","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/theta2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/theta2/README.html