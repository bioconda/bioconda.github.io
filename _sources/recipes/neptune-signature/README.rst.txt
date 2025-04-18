:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neptune-signature'
.. highlight: bash

neptune-signature
=================

.. conda:recipe:: neptune-signature
   :replaces_section_title:
   :noindex:

   Neptune\: Genomic Signature Discovery

   :homepage: https://github.com/phac-nml/neptune
   :license: APACHE / Apache-2.0
   :recipe: /`neptune-signature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neptune-signature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neptune-signature/meta.yaml>`_

   


.. conda:package:: neptune-signature

   |downloads_neptune-signature| |docker_neptune-signature|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends numpy: 
   :depends python: ``>=3.10``
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

      mamba install neptune-signature

   and update with::

      mamba update neptune-signature

  To create a new environment, run::

      mamba create --name myenvname neptune-signature

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/neptune-signature:<tag>

   (see `neptune-signature/tags`_ for valid values for ``<tag>``)


.. |downloads_neptune-signature| image:: https://img.shields.io/conda/dn/bioconda/neptune-signature.svg?style=flat
   :target: https://anaconda.org/bioconda/neptune-signature
   :alt:   (downloads)
.. |docker_neptune-signature| image:: https://quay.io/repository/biocontainers/neptune-signature/status
   :target: https://quay.io/repository/biocontainers/neptune-signature
.. _`neptune-signature/tags`: https://quay.io/repository/biocontainers/neptune-signature?tab=tags


.. raw:: html

    <script>
        var package = "neptune-signature";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neptune-signature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neptune-signature/README.html