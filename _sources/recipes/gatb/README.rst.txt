:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatb'
.. highlight: bash

gatb
====

.. conda:recipe:: gatb
   :replaces_section_title:
   :noindex:

   The Genome Analysis Toolbox with de\-Bruijn graph

   :homepage: https://gatb.inria.fr/
   :license: AGPL 3.0
   :recipe: /`gatb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatb/meta.yaml>`_

   


.. conda:package:: gatb

   |downloads_gatb| |docker_gatb|

   :versions:
      
      

      ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      

   
   :depends boost: ``>=1.78.0,<1.78.1.0a0``
   :depends hdf5: ``>=1.12.2,<1.12.3.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install gatb

   and update with::

      mamba update gatb

  To create a new environment, run::

      mamba create --name myenvname gatb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gatb:<tag>

   (see `gatb/tags`_ for valid values for ``<tag>``)


.. |downloads_gatb| image:: https://img.shields.io/conda/dn/bioconda/gatb.svg?style=flat
   :target: https://anaconda.org/bioconda/gatb
   :alt:   (downloads)
.. |docker_gatb| image:: https://quay.io/repository/biocontainers/gatb/status
   :target: https://quay.io/repository/biocontainers/gatb
.. _`gatb/tags`: https://quay.io/repository/biocontainers/gatb?tab=tags


.. raw:: html

    <script>
        var package = "gatb";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatb/README.html