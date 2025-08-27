:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nemo'
.. highlight: bash

nemo
====

.. conda:recipe:: nemo
   :replaces_section_title:
   :noindex:

   Individual\-based forward\-time genetics simulation software

   :homepage: http://nemo2.sourceforge.net
   :license: GPLv2
   :recipe: /`nemo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo/meta.yaml>`_

   


.. conda:package:: nemo

   |downloads_nemo| |docker_nemo|

   :versions:
      
      

      ``2.3.51-2``,  ``2.3.51-1``,  ``2.3.51-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libcxx: ``>=9.0.1``
   :depends openblas: 
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

      mamba install nemo

   and update with::

      mamba update nemo

  To create a new environment, run::

      mamba create --name myenvname nemo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nemo:<tag>

   (see `nemo/tags`_ for valid values for ``<tag>``)


.. |downloads_nemo| image:: https://img.shields.io/conda/dn/bioconda/nemo.svg?style=flat
   :target: https://anaconda.org/bioconda/nemo
   :alt:   (downloads)
.. |docker_nemo| image:: https://quay.io/repository/biocontainers/nemo/status
   :target: https://quay.io/repository/biocontainers/nemo
.. _`nemo/tags`: https://quay.io/repository/biocontainers/nemo?tab=tags


.. raw:: html

    <script>
        var package = "nemo";
        var versions = ["2.3.51","2.3.51","2.3.51"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nemo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nemo/README.html