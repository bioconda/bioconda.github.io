:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svsolver'
.. highlight: bash

svsolver
========

.. conda:recipe:: svsolver
   :replaces_section_title:
   :noindex:

   The svSolver includes three executable programs\: Presolver\(svpre\)\, Flowsolver\(svsolver\)\, Postsolver\(svpost\).

   :homepage: https://simtk.org/projects/simvascular/
   :developer docs: https://github.com/SimVascular/svSolver
   :license: BSD / BSD
   :recipe: /`svsolver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svsolver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svsolver/meta.yaml>`_

   


.. conda:package:: svsolver

   |downloads_svsolver| |docker_svsolver|

   :versions:
      
      

      ``2022.07.20-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends mpich: ``>=3.4.3,<5.0a0``
   :depends tbb: ``>=2020.2,<2021.0.0a0``
   :depends vtk: ``>=8.1.1,<8.1.2.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install svsolver

   and update with::

      mamba update svsolver

  To create a new environment, run::

      mamba create --name myenvname svsolver

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svsolver:<tag>

   (see `svsolver/tags`_ for valid values for ``<tag>``)


.. |downloads_svsolver| image:: https://img.shields.io/conda/dn/bioconda/svsolver.svg?style=flat
   :target: https://anaconda.org/bioconda/svsolver
   :alt:   (downloads)
.. |docker_svsolver| image:: https://quay.io/repository/biocontainers/svsolver/status
   :target: https://quay.io/repository/biocontainers/svsolver
.. _`svsolver/tags`: https://quay.io/repository/biocontainers/svsolver?tab=tags


.. raw:: html

    <script>
        var package = "svsolver";
        var versions = ["2022.07.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svsolver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svsolver/README.html