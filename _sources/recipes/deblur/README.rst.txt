:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deblur'
.. highlight: bash

deblur
======

.. conda:recipe:: deblur
   :replaces_section_title:
   :noindex:

   Deblur is a greedy deconvolution algorithm based on known read error profiles.

   :homepage: https://github.com/biocore/deblur
   :license: BSD license
   :recipe: /`deblur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deblur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deblur/meta.yaml>`_

   


.. conda:package:: deblur

   |downloads_deblur| |docker_deblur|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends biom-format: 
   :depends click: 
   :depends h5py: 
   :depends mafft: ``>=7.394``
   :depends python: ``>=3``
   :depends scikit-bio: ``>=0.5.0``
   :depends sortmerna: ``2.0``
   :depends vsearch: ``>=2.0.3``
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

      mamba install deblur

   and update with::

      mamba update deblur

  To create a new environment, run::

      mamba create --name myenvname deblur

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deblur:<tag>

   (see `deblur/tags`_ for valid values for ``<tag>``)


.. |downloads_deblur| image:: https://img.shields.io/conda/dn/bioconda/deblur.svg?style=flat
   :target: https://anaconda.org/bioconda/deblur
   :alt:   (downloads)
.. |docker_deblur| image:: https://quay.io/repository/biocontainers/deblur/status
   :target: https://quay.io/repository/biocontainers/deblur
.. _`deblur/tags`: https://quay.io/repository/biocontainers/deblur?tab=tags


.. raw:: html

    <script>
        var package = "deblur";
        var versions = ["1.1.1","1.1.0","1.1.0","1.1.0","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deblur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deblur/README.html