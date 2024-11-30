:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micropita'
.. highlight: bash

micropita
=========

.. conda:recipe:: micropita
   :replaces_section_title:
   :noindex:

   microPITA is a computational tool enabling sample selection in two\-stage \(tiered\) studies.

   :homepage: http://huttenhower.sph.harvard.edu/micropita
   :license: MIT / MIT
   :recipe: /`micropita <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micropita>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micropita/meta.yaml>`_
   :links: biotools: :biotools:`micropita`, doi: :doi:`10.1038/ismej.2013.139`

   


.. conda:package:: micropita

   |downloads_micropita| |docker_micropita|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends biom-format: 
   :depends blist: 
   :depends cogent: 
   :depends machine-learning-py: 
   :depends mpi4py: 
   :depends numpy: 
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install micropita

   and update with::

      mamba update micropita

  To create a new environment, run::

      mamba create --name myenvname micropita

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/micropita:<tag>

   (see `micropita/tags`_ for valid values for ``<tag>``)


.. |downloads_micropita| image:: https://img.shields.io/conda/dn/bioconda/micropita.svg?style=flat
   :target: https://anaconda.org/bioconda/micropita
   :alt:   (downloads)
.. |docker_micropita| image:: https://quay.io/repository/biocontainers/micropita/status
   :target: https://quay.io/repository/biocontainers/micropita
.. _`micropita/tags`: https://quay.io/repository/biocontainers/micropita?tab=tags


.. raw:: html

    <script>
        var package = "micropita";
        var versions = ["1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micropita/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micropita/README.html