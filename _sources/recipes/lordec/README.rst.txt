:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lordec'
.. highlight: bash

lordec
======

.. conda:recipe:: lordec
   :replaces_section_title:
   :noindex:

   A hybrid error correction program for long\, PacBio reads

   :homepage: http://www.atgc-montpellier.fr/lordec/
   :license: CeCILL A license
   :recipe: /`lordec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lordec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lordec/meta.yaml>`_

   


.. conda:package:: lordec

   |downloads_lordec| |docker_lordec|

   :versions:
      
      

      ``0.9-3``,  ``0.9-2``,  ``0.9-1``,  ``0.9-0``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``

      

   
   :depends boost: ``>=1.74.0,<1.74.1.0a0``
   :depends gatb: ``1.4.1.*``
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install lordec

   and update with::

      mamba update lordec

  To create a new environment, run::

      mamba create --name myenvname lordec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lordec:<tag>

   (see `lordec/tags`_ for valid values for ``<tag>``)


.. |downloads_lordec| image:: https://img.shields.io/conda/dn/bioconda/lordec.svg?style=flat
   :target: https://anaconda.org/bioconda/lordec
   :alt:   (downloads)
.. |docker_lordec| image:: https://quay.io/repository/biocontainers/lordec/status
   :target: https://quay.io/repository/biocontainers/lordec
.. _`lordec/tags`: https://quay.io/repository/biocontainers/lordec?tab=tags


.. raw:: html

    <script>
        var package = "lordec";
        var versions = ["0.9","0.9","0.9","0.9","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lordec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lordec/README.html