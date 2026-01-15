:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eutils'
.. highlight: bash

eutils
======

.. conda:recipe:: eutils
   :replaces_section_title:
   :noindex:

   Python interface to NCBI\'s eutilities API

   :homepage: https://github.com/biocommons/eutils
   :documentation: https://pythonhosted.org/eutils/
   
   :license: Apache-2.0
   :recipe: /`eutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eutils/meta.yaml>`_

   


.. conda:package:: eutils

   |downloads_eutils| |docker_eutils|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends lxml: 
   :depends python: ``>=3.12``
   :depends requests: 
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

      mamba install eutils

   and update with::

      mamba update eutils

  To create a new environment, run::

      mamba create --name myenvname eutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eutils:<tag>

   (see `eutils/tags`_ for valid values for ``<tag>``)


.. |downloads_eutils| image:: https://img.shields.io/conda/dn/bioconda/eutils.svg?style=flat
   :target: https://anaconda.org/bioconda/eutils
   :alt:   (downloads)
.. |docker_eutils| image:: https://quay.io/repository/biocontainers/eutils/status
   :target: https://quay.io/repository/biocontainers/eutils
.. _`eutils/tags`: https://quay.io/repository/biocontainers/eutils?tab=tags


.. raw:: html

    <script>
        var package = "eutils";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eutils/README.html