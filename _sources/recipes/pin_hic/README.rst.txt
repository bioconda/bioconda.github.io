:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pin_hic'
.. highlight: bash

pin_hic
=======

.. conda:recipe:: pin_hic
   :replaces_section_title:
   :noindex:

   A Hi\-C scaffolding method

   :homepage: https://github.com/dfguan/pin_hic/
   :license: MIT
   :recipe: /`pin_hic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pin_hic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pin_hic/meta.yaml>`_

   


.. conda:package:: pin_hic

   |downloads_pin_hic| |docker_pin_hic|

   :versions:
      
      

      ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install pin_hic

   and update with::

      mamba update pin_hic

  To create a new environment, run::

      mamba create --name myenvname pin_hic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pin_hic:<tag>

   (see `pin_hic/tags`_ for valid values for ``<tag>``)


.. |downloads_pin_hic| image:: https://img.shields.io/conda/dn/bioconda/pin_hic.svg?style=flat
   :target: https://anaconda.org/bioconda/pin_hic
   :alt:   (downloads)
.. |docker_pin_hic| image:: https://quay.io/repository/biocontainers/pin_hic/status
   :target: https://quay.io/repository/biocontainers/pin_hic
.. _`pin_hic/tags`: https://quay.io/repository/biocontainers/pin_hic?tab=tags


.. raw:: html

    <script>
        var package = "pin_hic";
        var versions = ["3.0.0","3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pin_hic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pin_hic/README.html