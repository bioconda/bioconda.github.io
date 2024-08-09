:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rhotermpredict'
.. highlight: bash

rhotermpredict
==============

.. conda:recipe:: rhotermpredict
   :replaces_section_title:
   :noindex:

   RhoTermPredict \(Barrick Lab Fork\)

   :homepage: https://github.com/barricklab/RhoTermPredict
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`rhotermpredict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhotermpredict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhotermpredict/meta.yaml>`_

   


.. conda:package:: rhotermpredict

   |downloads_rhotermpredict| |docker_rhotermpredict|

   :versions:
      
      

      ``3.4-0``

      

   
   :depends biopython: ``>=0.1.0``
   :depends numpy: ``>=1.15.4``
   :depends python: 
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

      mamba install rhotermpredict

   and update with::

      mamba update rhotermpredict

  To create a new environment, run::

      mamba create --name myenvname rhotermpredict

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rhotermpredict:<tag>

   (see `rhotermpredict/tags`_ for valid values for ``<tag>``)


.. |downloads_rhotermpredict| image:: https://img.shields.io/conda/dn/bioconda/rhotermpredict.svg?style=flat
   :target: https://anaconda.org/bioconda/rhotermpredict
   :alt:   (downloads)
.. |docker_rhotermpredict| image:: https://quay.io/repository/biocontainers/rhotermpredict/status
   :target: https://quay.io/repository/biocontainers/rhotermpredict
.. _`rhotermpredict/tags`: https://quay.io/repository/biocontainers/rhotermpredict?tab=tags


.. raw:: html

    <script>
        var package = "rhotermpredict";
        var versions = ["3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rhotermpredict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rhotermpredict/README.html