:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minibusco'
.. highlight: bash

minibusco
=========

.. conda:recipe:: minibusco
   :replaces_section_title:
   :noindex:

   minibusco\: a faster and more accurate reimplementation of BUSCO

   :homepage: https://github.com/huangnengCSU/minibusco
   :license: Apache License 2.0
   :recipe: /`minibusco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minibusco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minibusco/meta.yaml>`_

   


.. conda:package:: minibusco

   |downloads_minibusco| |docker_minibusco|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2-0``

      

   
   :depends dendropy: ``<4.6.0``
   :depends hmmer: 
   :depends miniprot: ``>=0.11``
   :depends pandas: 
   :depends python: 
   :depends sepp: 
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

      mamba install minibusco

   and update with::

      mamba update minibusco

  To create a new environment, run::

      mamba create --name myenvname minibusco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minibusco:<tag>

   (see `minibusco/tags`_ for valid values for ``<tag>``)


.. |downloads_minibusco| image:: https://img.shields.io/conda/dn/bioconda/minibusco.svg?style=flat
   :target: https://anaconda.org/bioconda/minibusco
   :alt:   (downloads)
.. |docker_minibusco| image:: https://quay.io/repository/biocontainers/minibusco/status
   :target: https://quay.io/repository/biocontainers/minibusco
.. _`minibusco/tags`: https://quay.io/repository/biocontainers/minibusco?tab=tags


.. raw:: html

    <script>
        var package = "minibusco";
        var versions = ["0.2.1","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minibusco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minibusco/README.html